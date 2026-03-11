"use server";

import { createSession, deleteSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  
  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  // TODO: Replace with real database validation
  // Mocking simple check for demonstration:
  let role: "ADMIN" | "TENANT" = "TENANT";
  if (email === "admin@example.com" && password === "admin") {
    role = "ADMIN";
  } else if (email === "tenant@example.com" && password === "tenant") {
    role = "TENANT";
  } else {
    return { error: "Invalid credentials (try admin@example.com/admin or tenant@example.com/tenant)" };
  }

  const userId = role === "ADMIN" ? "admin-id" : "tenant-id";
  await createSession(userId, email, role);

  if (role === "ADMIN") {
    redirect("/admin");
  } else {
    redirect("/tenant");
  }
}

export async function logoutAction() {
  await deleteSession();
  redirect("/login");
}