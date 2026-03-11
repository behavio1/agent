"use client";

import { useActionState } from "react";
import { createProperty, updateProperty } from "@/actions/property";
import { SpeechBubble } from "@/components/ui/manga";
import Image from "next/image";

type PropertyFormProps = {
  property?: {
    id: string;
    title: string;
    description: string | null;
    price: number;
    size: number;
    status: string;
    imageUrl: string | null;
  };
};

export function PropertyForm({ property }: PropertyFormProps) {
  const isEdit = !!property;
  const action = isEdit ? updateProperty.bind(null, property.id) : createProperty;
  const [state, formAction, isPending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.error && (
        <SpeechBubble direction="left" className="bg-red-500 text-white mb-4">
          <p className="font-bold text-xl uppercase">Error!</p>
          <p>{state.error}</p>
        </SpeechBubble>
      )}

      <div className="flex flex-col gap-2">
        <label className="font-manga text-2xl uppercase tracking-wider">Title</label>
        <input
          name="title"
          defaultValue={property?.title}
          required
          className="border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300"
          placeholder="Manga Mansion Apt 1"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-manga text-2xl uppercase tracking-wider">Description</label>
        <textarea
          name="description"
          defaultValue={property?.description || ""}
          className="border-4 border-black p-3 font-bold min-h-[120px] focus:outline-none focus:ring-4 focus:ring-yellow-300"
          placeholder="A beautiful apartment with lots of natural light..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-manga text-2xl uppercase tracking-wider">Price ($/mo)</label>
          <input
            name="price"
            type="number"
            step="0.01"
            defaultValue={property?.price}
            required
            className="border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300"
            placeholder="1200"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-manga text-2xl uppercase tracking-wider">Size (sqft)</label>
          <input
            name="size"
            type="number"
            defaultValue={property?.size}
            required
            className="border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300"
            placeholder="800"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-manga text-2xl uppercase tracking-wider">Status</label>
        <select
          name="status"
          defaultValue={property?.status || "AVAILABLE"}
          className="border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300 bg-white"
        >
          <option value="AVAILABLE">Available</option>
          <option value="OCCUPIED">Occupied</option>
          <option value="MAINTENANCE">Maintenance</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-manga text-2xl uppercase tracking-wider">Property Image</label>
        {property?.imageUrl && (
          <div className="relative h-48 w-full md:w-1/2 border-4 border-black mb-2">
            <Image src={property.imageUrl} alt={property.title} fill className="object-cover" />
          </div>
        )}
        <input
          name="image"
          type="file"
          accept="image/*"
          className="border-4 border-black p-3 font-bold bg-gray-100 cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-300"
        />
        <p className="text-sm text-gray-600 font-bold uppercase mt-1">
          {property?.imageUrl ? "Upload a new image to replace the current one." : "Required for a good listing!"}
        </p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 bg-yellow-400 text-black border-4 border-black shadow-[4px_4px_0_0_#000] font-manga text-3xl uppercase tracking-widest py-4 hover:bg-yellow-300 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] transition-all disabled:opacity-50"
      >
        {isPending ? "Saving..." : isEdit ? "Update Property" : "Add Property"}
      </button>
    </form>
  );
}
