"use client";

import { useActionState } from "react";
import { loginAction } from "@/actions/auth";
import { MangaPanel, HalftoneBg, ActionText } from "@/components/ui/manga";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState<{ error: string | null }, FormData>(
    async (prevState, formData) => {
      const result = await loginAction(formData);
      return result || { error: null };
    },
    { error: null }
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <HalftoneBg className="bg-yellow-300 opacity-50" />
      
      <MangaPanel 
        className="w-full max-w-md bg-white p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <ActionText as="h1" className="text-4xl text-black">
            LOGIN!
          </ActionText>
          <p className="mt-2 font-bold text-gray-600">Access your portal</p>
        </div>

        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <label className="block font-bold mb-2 uppercase tracking-wide">Email</label>
            <input 
              name="email" 
              type="email" 
              className="w-full border-4 border-black p-3 font-sans focus:outline-none focus:ring-4 focus:ring-yellow-400"
              placeholder="tenant@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block font-bold mb-2 uppercase tracking-wide">Password</label>
            <input 
              name="password" 
              type="password" 
              className="w-full border-4 border-black p-3 font-sans focus:outline-none focus:ring-4 focus:ring-yellow-400"
              placeholder="••••••••"
              required
            />
          </div>

          {state?.error && (
            <div className="bg-red-500 text-white font-bold p-3 border-4 border-black">
              {state.error}
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isPending}
            className="mt-4 w-full text-xl py-6 rounded-none uppercase font-manga tracking-wider"
          >
            {isPending ? "Authenticating..." : "Smash to Login!"}
          </Button>
        </form>

        <div className="mt-6 text-center font-bold">
          <Link href="/" className="hover:underline text-blue-600">
            &larr; Back to Home
          </Link>
        </div>
      </MangaPanel>
    </div>
  );
}