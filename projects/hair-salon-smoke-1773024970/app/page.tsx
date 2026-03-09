import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    name: "Precision Cuts",
    price: "$45+",
    description: "Tailored cuts for women, men, and teens with a styling finish included."
  },
  {
    name: "Color & Gloss",
    price: "$95+",
    description: "Dimensional color, root touch-ups, and shine treatments for a fresh salon look."
  },
  {
    name: "Blowout & Styling",
    price: "$38+",
    description: "Smooth, voluminous styling for everyday confidence or special events."
  }
];

const gallery = [
  "Soft balayage blend",
  "Glossy bob transformation",
  "Bridal updo finish",
  "Lived-in layers and volume"
];

const hours = [
  ["Mon - Wed", "9:00 AM - 6:00 PM"],
  ["Thursday", "9:00 AM - 8:00 PM"],
  ["Friday", "9:00 AM - 7:00 PM"],
  ["Saturday", "8:00 AM - 5:00 PM"],
  ["Sunday", "Closed"]
];

const navLinks = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"]
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-6 sm:px-8">
        <header className="flex flex-col gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-4 shadow-soft backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Velvet Strand Salon</p>
          </div>
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-4 text-sm text-muted">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
            <a
              href="https://example.com/book"
              className="rounded-full bg-accent px-5 py-2.5 font-medium text-slate-950 transition hover:opacity-90"
            >
              Book Now
            </a>
          </nav>
        </header>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Luxury hair care, neighborhood warmth</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            A salon landing page built to turn first visits into loyal clients.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Discover signature cuts, dimensional color, and event styling from a team focused on confidence, care, and effortless beauty.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://example.com/book"
              className="rounded-full bg-accent px-6 py-3 font-medium text-slate-950 transition hover:opacity-90"
            >
              Book Now
            </a>
            <a href="#services" className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5">
              View Services
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Experienced stylists</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">External booking CTA</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Mobile-first layout</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-soft backdrop-blur">
          <div className="rounded-[1.5rem] bg-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Today at a glance</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-muted">Location</p>
                <p className="mt-2 text-lg font-semibold text-white">1427 Rose Avenue, Suite 4</p>
                <p className="mt-1 text-sm text-muted">Downtown studio with easy parking</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-muted">Phone</p>
                <a href="tel:+15550123456" className="mt-2 block text-lg font-semibold text-white hover:text-accent">
                  (555) 012-3456
                </a>
                <p className="mt-1 text-sm text-muted">Call for consultations</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                <p className="text-sm text-muted">Specialty</p>
                <p className="mt-2 text-lg font-semibold text-white">Modern color, healthy styling, and occasion-ready finishes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="A polished first impression for a modern salon brand"
          description="This smoke-test landing page highlights the essentials guests look for before booking: services, real style inspiration, opening hours, and a direct path to reserve an appointment."
        />
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Popular appointments"
          description="Clear pricing and concise service descriptions help clients choose quickly and feel confident before they click through to book."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent">{service.price}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Portfolio highlights"
          description="A visual showcase section gives prospective guests a quick feel for the salon aesthetic and range of finished looks."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item, index) => (
            <article
              key={item}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft"
            >
              <div className={`h-64 bg-gradient-to-br ${index % 2 === 0 ? "from-rose-200/70 via-pink-300/30 to-fuchsia-900/60" : "from-stone-100/60 via-rose-200/30 to-amber-900/60"}`} />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item}</h3>
                <p className="mt-2 text-sm text-muted">Featured style inspiration for social proof and brand tone.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <SectionHeading
              eyebrow="Contact"
              title="Visit, call, or plan your next appointment"
              description="Everything a first-time guest needs is grouped in one place, including hours, phone number, address, and a map link."
            />
            <dl className="mt-8 space-y-5 text-sm text-muted">
              <div>
                <dt className="font-semibold uppercase tracking-[0.25em] text-accent">Address</dt>
                <dd className="mt-2 text-base text-white">1427 Rose Avenue, Suite 4, Portland, OR 97205</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.25em] text-accent">Phone</dt>
                <dd className="mt-2 text-base text-white">(555) 012-3456</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.25em] text-accent">Map</dt>
                <dd className="mt-2">
                  <a href="https://maps.google.com" className="text-white underline decoration-accent underline-offset-4 hover:text-accent">
                    Open in Google Maps
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-panel p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-white">Opening hours</h3>
            <div className="mt-6 divide-y divide-white/10">
              {hours.map(([day, time]) => (
                <div key={day} className="flex items-center justify-between gap-4 py-4 text-sm sm:text-base">
                  <span className="text-muted">{day}</span>
                  <span className="font-medium text-white">{time}</span>
                </div>
              ))}
            </div>
            <a
              href="https://example.com/book"
              className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-medium text-slate-950 transition hover:opacity-90"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
