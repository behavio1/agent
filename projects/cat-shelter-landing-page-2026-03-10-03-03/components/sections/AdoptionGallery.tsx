import { availableCats } from "@/lib/data"
import { CatCard } from "./CatCard"

export function AdoptionGallery() {
  return (
    <section id="koty-do-adopcji" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Koty do adopcji
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Poznaj naszych podopiecznych, którzy czekają na nowy dom. Każdy z nich ma swoją unikalną historię i charakter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {availableCats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
