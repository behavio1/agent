"use server";

import { prisma } from "@/lib/prisma";
import { MaintenanceStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put } from "@vercel/blob";
import { getSession } from "@/lib/auth";

const hasBlobToken = !!process.env.BLOB_READ_WRITE_TOKEN;

export async function createMaintenanceRequest(prevState: unknown, formData: FormData) {
  const user = await getSession();
  if (!user || user.role !== "TENANT") {
    return { error: "Unauthorized" };
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File | null;

  if (!title || !description) {
    return { error: "Missing required fields" };
  }

  let imageUrl: string | undefined = undefined;

  if (image && image.size > 0) {
    if (hasBlobToken) {
      try {
        const blob = await put(`maintenance/${image.name}`, image, {
          access: "public",
        });
        imageUrl = blob.url;
      } catch (err) {
        console.error("Blob upload failed", err);
      }
    } else {
      console.warn("No BLOB_READ_WRITE_TOKEN, mocking image URL.");
      imageUrl = `https://picsum.photos/seed/${Math.random()}/600/400`;
    }
  }

  try {
    await prisma.maintenanceRequest.create({
      data: {
        title,
        description,
        imageUrl,
        userId: user.id,
      },
    });
  } catch (error) {
    console.error("Create maintenance request error", error);
    return { error: "Failed to submit request" };
  }

  revalidatePath("/tenant/maintenance");
  redirect("/tenant/maintenance");
}

export async function updateMaintenanceStatus(id: string, prevState: unknown, formData: FormData) {
  const user = await getSession();
  if (!user || user.role !== "ADMIN") {
    return { error: "Unauthorized" };
  }

  const status = formData.get("status") as MaintenanceStatus;
  const assignedToId = formData.get("assignedToId") as string | null;

  if (!status) {
    return { error: "Missing status" };
  }

  try {
    await prisma.maintenanceRequest.update({
      where: { id },
      data: {
        status,
        assignedToId: assignedToId || null,
      },
    });
  } catch (error) {
    console.error("Update maintenance request error", error);
    return { error: "Failed to update request" };
  }

  revalidatePath("/admin/maintenance");
  return { success: true };
}
