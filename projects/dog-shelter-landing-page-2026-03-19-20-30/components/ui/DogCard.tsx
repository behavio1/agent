import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { buttonVariants } from "./button";
import { PawPrint } from "lucide-react";

interface DogCardProps {
  id: string;
  name: string;
  breed: string | null;
  age: number | null;
  description: string | null;
  imageUrl: string | null;
}

export function DogCard({ id, name, breed, age, description, imageUrl }: DogCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={`Zdjęcie psa ${name}`} className="object-cover w-full h-full" />
        ) : (
          <div className="flex flex-col items-center justify-center text-muted-foreground">
            <PawPrint className="w-12 h-12 mb-2 opacity-50" />
            <span className="text-sm">Brak zdjęcia</span>
          </div>
        )}
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          {age !== null && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {age} {age === 1 ? 'rok' : age >= 2 && age <= 4 ? 'lata' : 'lat'}
            </span>
          )}
        </div>
        <CardDescription className="text-sm font-medium">
          {breed || "Mieszaniec"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description || "Ten piesek jeszcze nie ma opisu, ale na pewno jest wspaniały i czeka na kochający dom."}
        </p>
      </CardContent>
      <CardFooter>
        <a href={`#kontakt?dog=${id}`} className={`w-full ${buttonVariants({ variant: "outline" })}`}>
          Zapytaj o mnie
        </a>
      </CardFooter>
    </Card>
  );
}
