"use server";

import { z } from "zod";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

const inquirySchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  email: z.string().email("Nieprawidłowy adres e-mail"),
  phone: z.string().optional(),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  dogId: z.string().uuid().optional().or(z.literal("")),
});

export type InquiryState = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
    dogId?: string[];
  };
};

export async function submitInquiry(prevState: InquiryState | null, formData: FormData): Promise<InquiryState> {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      dogId: formData.get("dogId"),
    };

    const validatedData = inquirySchema.parse({
      ...rawData,
      dogId: rawData.dogId ? rawData.dogId : undefined,
    });

    await db.insert(inquiries).values({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || null,
      message: validatedData.message,
      dogId: validatedData.dogId || null,
    });

    return {
      success: true,
      message: "Dziękujemy! Twoja wiadomość została wysłana.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Proszę poprawić błędy w formularzu.",
      };
    }
    
    console.error("Failed to submit inquiry:", error);
    return {
      success: false,
      message: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
    };
  }
}
