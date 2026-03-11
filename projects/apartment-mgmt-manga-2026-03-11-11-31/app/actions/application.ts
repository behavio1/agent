"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitApplication(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string | null;
  const message = formData.get("message") as string | null;

  if (!name || !email) {
    return { error: "Name and email are required!" };
  }

  try {
    await prisma.application.create({
      data: {
        name: name.toString(),
        email: email.toString(),
        phone: phone?.toString() || null,
        message: message?.toString() || null,
      },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Failed to submit application:", error);
    return { error: "Failed to submit application. Try again!" };
  }
}
