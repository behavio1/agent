"use client";

import { useActionState } from "react";
import { submitApplication } from "@/app/actions/application";
import { MangaPanel } from "@/components/ui/manga/manga-panel";
import { SpeechBubble } from "@/components/ui/manga/speech-bubble";
import { ActionText } from "@/components/ui/manga/action-text";
import { Button } from "@/components/ui/button";

const initialState = { error: "", success: false };

export default function ApplyForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: typeof initialState, formData: FormData) => {
      const res = await submitApplication(formData);
      if (res?.error) return { error: res.error, success: false };
      return { error: "", success: true };
    },
    initialState
  );

  if (state.success) {
    return (
      <MangaPanel className="bg-green-100 p-8 text-center border-4 border-black shadow-[8px_8px_0_0_#000]">
        <ActionText as="h2" className="text-4xl text-green-600 mb-6 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
          BOOYAH!
        </ActionText>
        <SpeechBubble direction="bottom" className="mx-auto bg-white mb-6 w-max">
          <p className="font-bold text-2xl text-black">Application Received!</p>
        </SpeechBubble>
        <p className="text-xl font-bold">We will contact you shortly.</p>
      </MangaPanel>
    );
  }

  return (
    <MangaPanel className="bg-white p-6 md:p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
      <form action={formAction} className="flex flex-col gap-6 font-sans">
        {state.error && (
          <SpeechBubble direction="bottom" className="bg-red-400 mx-auto w-max mb-4">
            <p className="font-bold text-white text-xl">ERROR: {state.error}</p>
          </SpeechBubble>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-manga text-2xl uppercase tracking-wider">
            Full Name (Hero Title) *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="border-4 border-black p-3 text-xl font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-[4px_4px_0_0_#000]"
            placeholder="Saitama"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-manga text-2xl uppercase tracking-wider">
            Email Address (Comms Link) *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border-4 border-black p-3 text-xl font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-[4px_4px_0_0_#000]"
            placeholder="hero@association.org"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-manga text-2xl uppercase tracking-wider">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="border-4 border-black p-3 text-xl font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-[4px_4px_0_0_#000]"
            placeholder="555-HERO"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-manga text-2xl uppercase tracking-wider">
            Why are you awesome? (Message)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="border-4 border-black p-3 text-xl font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-[4px_4px_0_0_#000] resize-y"
            placeholder="I can defeat any landlord with one punch..."
          ></textarea>
        </div>

        <div className="mt-4 flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            size="lg"
            className="text-2xl"
          >
            {isPending ? "SENDING..." : "SMASH APPLY!"}
          </Button>
        </div>
      </form>
    </MangaPanel>
  );
}
