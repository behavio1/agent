export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Sections will be added here in subsequent steps */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Schronisko Ciepła Buda
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Poznaj nasze zwierzaki, zaadoptuj przyjaciela lub wesprzyj naszą misję.
          </p>
        </div>
      </section>
    </main>
  );
}
