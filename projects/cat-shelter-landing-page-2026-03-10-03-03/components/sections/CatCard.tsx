import Image from "next/image"
import { Cat } from "@/lib/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CatCardProps {
  cat: Cat
}

export function CatCard({ cat }: CatCardProps) {
  return (
    <Card className="flex flex-col h-full group hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <Image
          src={cat.imageUrl}
          alt={cat.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pt-6 pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{cat.name}</CardTitle>
          <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            {cat.age}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <p className="text-muted-foreground line-clamp-4 leading-relaxed">
          {cat.description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Dowiedz się więcej
        </Button>
      </CardFooter>
    </Card>
  )
}
