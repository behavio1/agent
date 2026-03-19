import React from "react";
import { DogCard } from "@/components/ui/DogCard";
import { db } from "@/db";
import { dogs } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { PawPrint } from "lucide-react";
import { unstable_noStore as noStore } from "next/cache";

export async function DogsShowcase() {
  noStore();
  
  let availableDogs: typeof dogs.$inferSelect[] = [];
  let dbError = false;

  try {
    if (process.env.DATABASE_URI) {
      availableDogs = await db.select()
        .from(dogs)
        .where(eq(dogs.isAdopted, false))
        .orderBy(desc(dogs.createdAt));
    } else {
      console.warn('DATABASE_URI not set. Skipping dog fetch.');
      dbError = true;
    }
  } catch (error) {
    console.error('Failed to fetch dogs from database:', error);
    dbError = true;
  }

  return (
    <section id="psy" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <PawPrint className="h-10 w-10 text-primary mb-2" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nasi podopieczni</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Poznaj psy, które aktualnie przebywają w naszym schronisku i czekają na swój nowy, kochający dom.
          </p>
        </div>

        {dbError ? (
          <div className="text-center py-12 px-4 rounded-xl border border-dashed border-muted-foreground/30 bg-muted/50">
            <h3 className="text-lg font-medium mb-2">Chwilowy brak danych</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Nie mogliśmy w tej chwili połączyć się z bazą danych schroniska. Prosimy spróbować ponownie później.
            </p>
          </div>
        ) : availableDogs.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-xl border border-dashed border-muted-foreground/30 bg-muted/50">
            <h3 className="text-lg font-medium mb-2">Wspaniałe wieści!</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Aktualnie wszystkie nasze psy znalazły nowe domy. Śledź naszą stronę, aby być na bieżąco, lub wesprzyj nas w inny sposób.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {availableDogs.map((dog) => (
              <DogCard
                key={dog.id}
                id={dog.id}
                name={dog.name}
                breed={dog.breed}
                age={dog.age}
                description={dog.description}
                imageUrl={dog.imageUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
