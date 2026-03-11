"use client";

import { useTransition } from "react";
import { deleteProperty } from "@/actions/property";

export function DeletePropertyButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this property?")) {
          startTransition(() => {
            deleteProperty(id);
          });
        }
      }}
      disabled={isPending}
      className="flex-1 bg-red-500 text-white font-bold uppercase py-2 text-center border-2 border-black hover:bg-red-600 transition-colors shadow-[2px_2px_0_0_#000] disabled:opacity-50"
    >
      {isPending ? "..." : "Delete"}
    </button>
  );
}
