import { LeadCaptureForm } from "@/components/lead-capture-form";

const features = [
  {
    title: "Validate demand fast",
    description: "Launch a focused page in hours, not weeks, to measure whether customers care before building.",
  },
  {
    title: "Track intent signals",
    description: "Capture CTA clicks and email signups to understand real buying interest, not just opinions.",
  },
  {
    title: "Learn what to build",
    description: "Use qualitative feedback and conversion data to prioritize the features customers actually want.",
  },
  {
    title: "Stay launch-ready",
    description: "Collect an early list of interested users so you can announce your product to people already primed to convert.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Smoke test landing page</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Validate Your Idea Instantly
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            A fast, conversion-focused landing page to test demand, capture leads, and learn whether your next product deserves to be built.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Responsive design</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Basic analytics events</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Accessible lead capture</span>
          </div>
        </div>

        <div className="w-full max-w-xl">
          <LeadCaptureForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
