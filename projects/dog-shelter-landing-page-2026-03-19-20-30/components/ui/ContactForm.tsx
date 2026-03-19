"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitInquiry } from "@/app/actions/inquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  email: z.string().email("Nieprawidłowy adres e-mail"),
  phone: z.string().optional(),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  dogId: z.string().uuid().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm({ defaultDogId }: { defaultDogId?: string }) {
  const [serverMessage, setServerMessage] = useState<{ type: "success" | "error", text: string } | null>(null);
  
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      dogId: defaultDogId || undefined,
    }
  });

  const onSubmit = async (data: FormData) => {
    setServerMessage(null);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    if (data.phone) formData.append("phone", data.phone);
    formData.append("message", data.message);
    if (data.dogId) formData.append("dogId", data.dogId);

    const result = await submitInquiry(null, formData);

    if (result.success) {
      setServerMessage({ type: "success", text: result.message || "Wiadomość wysłana pomyślnie." });
      reset();
    } else {
      setServerMessage({ type: "error", text: result.message || "Wystąpił błąd." });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-slate-700 font-medium">Imię i nazwisko</Label>
          <Input 
            id="name" 
            placeholder="Jan Kowalski" 
            className="mt-1"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-slate-700 font-medium">Adres e-mail</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="jan@example.com" 
            className="mt-1"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="text-slate-700 font-medium">Numer telefonu (opcjonalnie)</Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="+48 123 456 789" 
            className="mt-1"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="text-slate-700 font-medium">Wiadomość</Label>
          <Textarea 
            id="message" 
            placeholder="W czym możemy pomóc?" 
            rows={5}
            className="mt-1 resize-none"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
      </div>

      {serverMessage?.type === "success" && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg text-sm border border-green-200">
          {serverMessage.text}
        </div>
      )}

      {serverMessage?.type === "error" && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm border border-red-200">
          {serverMessage.text}
        </div>
      )}

      <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isSubmitting}>
        {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
      </Button>
    </form>
  );
}
