"use server";

import { createSession, deleteSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  
  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: "Invalid credentials" };
  }

  const isValid = await bcrypt.compare(password, user.password);
  
  if (!isValid) {
    return { error: "Invalid credentials" };
  }

  await createSession(user.id, user.email, user.role);

  if (user.role === "ADMIN") {
    redirect("/admin");
  } else {
    redirect("/tenant");
  }
}

export async function logoutAction() {
  await deleteSession();
  redirect("/login");
}