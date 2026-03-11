import { prisma } from "@/lib/prisma";
import { MangaPanel, ActionText } from "@/components/ui/manga";
import { PropertyForm } from "../../property-form";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditPropertyPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const property = await prisma.property.findUnique({
    where: { id: params.id },
  });

  if (!property) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <MangaPanel className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ef4444]" noShadow>
        <ActionText as="h1" className="text-4xl text-black uppercase mb-6 border-b-4 border-black pb-4">
          Edit Property
        </ActionText>
        <PropertyForm property={property} />
      </MangaPanel>
    </div>
  );
}
