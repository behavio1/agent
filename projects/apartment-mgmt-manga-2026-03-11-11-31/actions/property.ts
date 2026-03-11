"use server";

import { prisma } from "@/lib/prisma";
import { PropertyStatus, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put, del } from "@vercel/blob";

const hasBlobToken = !!process.env.BLOB_READ_WRITE_TOKEN;

export async function createProperty(prevState: unknown, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const size = parseInt(formData.get("size") as string, 10);
  const status = formData.get("status") as PropertyStatus;
  const image = formData.get("image") as File | null;

  if (!title || isNaN(price) || isNaN(size)) {
    return { error: "Missing required fields" };
  }

  let imageUrl: string | undefined = undefined;

  if (image && image.size > 0) {
    if (hasBlobToken) {
      try {
        const blob = await put(`properties/${image.name}`, image, {
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
    await prisma.property.create({
      data: {
        title,
        description,
        price,
        size,
        status: status || PropertyStatus.AVAILABLE,
        imageUrl,
      },
    });
  } catch (error) {
    console.error("Create property error", error);
    return { error: "Failed to create property" };
  }

  revalidatePath("/admin/properties");
  redirect("/admin/properties");
}

export async function updateProperty(id: string, prevState: unknown, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const size = parseInt(formData.get("size") as string, 10);
  const status = formData.get("status") as PropertyStatus;
  const image = formData.get("image") as File | null;

  if (!title || isNaN(price) || isNaN(size)) {
    return { error: "Missing required fields" };
  }

  let imageUrl: string | undefined = undefined;

  if (image && image.size > 0) {
    if (hasBlobToken) {
      try {
        const blob = await put(`properties/${image.name}`, image, {
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
    const data: Prisma.PropertyUpdateInput = {
      title,
      description,
      price,
      size,
      status: status || PropertyStatus.AVAILABLE,
    };
    if (imageUrl) {
      data.imageUrl = imageUrl;
    }

    await prisma.property.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("Update property error", error);
    return { error: "Failed to update property" };
  }

  revalidatePath("/admin/properties");
  redirect("/admin/properties");
}

export async function deleteProperty(id: string) {
  try {
    const prop = await prisma.property.findUnique({ where: { id } });
    if (prop?.imageUrl && hasBlobToken) {
      try {
        await del(prop.imageUrl);
      } catch (err) {
         console.error("Blob delete failed", err);
      }
    }
    await prisma.property.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Delete property error", error);
    return { error: "Failed to delete property" };
  }

  revalidatePath("/admin/properties");
}
