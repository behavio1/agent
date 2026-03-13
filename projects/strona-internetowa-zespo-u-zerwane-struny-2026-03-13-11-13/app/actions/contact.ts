'use server';

import { db } from '@/db';
import { messages } from '@/db/schema/messages';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Imię jest wymagane').max(255, 'Imię jest za długie'),
  email: z.string().email('Nieprawidłowy adres email').max(255, 'Email jest za długi'),
  message: z.string().min(1, 'Wiadomość jest wymagana'),
});

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Popraw błędy w formularzu przed wysłaniem.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await db.insert(messages).values({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
    });

    return {
      success: true,
      message: 'Wiadomość została pomyślnie wysłana. Dziękujemy za kontakt!',
    };
  } catch (error) {
    console.error('Error inserting message:', error);
    return {
      success: false,
      message: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.',
    };
  }
}
