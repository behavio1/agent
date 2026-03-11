"use client";

import { useActionState } from "react";
import { createMaintenanceRequest } from "@/actions/maintenance";
import { SpeechBubble } from "@/components/ui/manga";

export function MaintenanceForm() {
  const [state, formAction, isPending] = useActionState(createMaintenanceRequest, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-6 w-full max-w-md">
      {state?.error && (
        <SpeechBubble direction="left" className="bg-red-500 text-white mb-4">
          <p className="font-bold text-xl uppercase">Error!</p>
          <p>{state.error}</p>
        </SpeechBubble>
      )}

      <div className="flex flex-col gap-2">
        <label className="font-manga text-2xl uppercase tracking-wider">What&apos;s broken?</label>
        <input
          name="title"
          required
          className="border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-red-400"
          placeholder="Leaky Faucet!"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-manga text-2xl uppercase tracking-wider">Details</label>
        <textarea
          name="description"
          required
          className="border-4 border-black p-3 font-bold min-h-[120px] focus:outline-none focus:ring-4 focus:ring-red-400"
          placeholder="The faucet in the kitchen is dripping constantly..."
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-manga text-2xl uppercase tracking-wider">Photo Proof</label>
        <input
          name="image"
          type="file"
          accept="image/*"
          className="border-4 border-black p-3 font-bold bg-gray-100 cursor-pointer focus:outline-none focus:ring-4 focus:ring-red-400"
        />
        <p className="text-sm text-gray-600 font-bold uppercase mt-1">Show us the damage! 📸</p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 bg-red-500 text-white border-4 border-black shadow-[4px_4px_0_0_#000] font-manga text-3xl uppercase tracking-widest py-4 hover:bg-red-600 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] transition-all disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Submit Request!"}
      </button>
    </form>
  );
}
