import { SectionHeading } from "@/components/section-heading";

const navigation = [
  ["Usługi", "#uslugi"],
  ["O salonie", "#o-salonie"],
  ["Zespół", "#zespol"],
  ["Cennik", "#cennik"],
  ["Opinie", "#opinie"],
  ["Kontakt", "#kontakt"]
] as const;

const services = [
  {
    name: "Strzyżenie premium",
    description: "Precyzyjne cięcie dopasowane do kształtu twarzy, stylu życia i codziennej pielęgnacji.",
    details: "Konsultacja, mycie, masaż skóry głowy i modelowanie w cenie."
  },
  {
    name: "Koloryzacja i tonowanie",
    description: "Naturalne blondy, wielowymiarowe brązy i odświeżenie koloru bez kompromisów dla kondycji włosów.",
    details: "Pracujemy na pielęgnujących formułach i planujemy kolor pod długofalowy efekt."
  },
  {
    name: "Balayage / airtouch",
    description: "Miękkie przejścia i luksusowy połysk dla efektu, który wygląda świetnie od pierwszego dnia do odrostu.",
    details: "Idealne rozwiązanie dla klientek szukających subtelnej, eleganckiej zmiany."
  },
  {
    name: "Regeneracja i rytuały care",
    description: "Kuracje odbudowujące, nawilżające i wygładzające dobierane do porowatości oraz potrzeb włosów.",
    details: "Polecane po rozjaśnianiu i przed ważnymi wydarzeniami."
  },
  {
    name: "Modelowanie i blowout",
    description: "Lekkość, objętość i trwały efekt na co dzień lub na wyjątkowy wieczór.",
    details: "Od miękkich fal po gładkie, eleganckie wykończenie."
  },
  {
    name: "Fryzury okolicznościowe",
    description: "Śluby, sesje, eventy i ważne spotkania — fryzura, która trzyma formę i świetnie wygląda na zdjęciach.",
    details: "Możliwość wcześniejszej próby i rozpisania planu stylizacji."
  }
];

const stylists = [
  {
    name: "Marta Zielińska",
    role: "Founder & Master Stylist",
    bio: "Specjalistka od nowoczesnych cięć i pracy z formą. Tworzy fryzury, które dobrze wyglądają także po wyjściu z salonu.",
    accent: "from-rose-200/70 via-pink-200/35 to-fuchsia-800/60"
  },
  {
    name: "Klara Nowak",
    role: "Color Expert",
    bio: "Uwielbia miękkie przejścia, czyste blondy i odcienie dopasowane do karnacji oraz stylu klientki.",
    accent: "from-amber-100/70 via-rose-100/35 to-orange-800/60"
  },
  {
    name: "Zofia Lewandowska",
    role: "Styling & Care Specialist",
    bio: "Łączy pielęgnację z efektownym wykończeniem — od gładkich blowoutów po fryzury eventowe.",
    accent: "from-stone-100/70 via-rose-100/30 to-rose-900/60"
  }
];

const pricing = [
  ["Strzyżenie damskie + modelowanie", "180 zł"],
  ["Koloryzacja jednolita", "od 280 zł"],
  ["Balayage / airtouch", "od 520 zł"],
  ["Rytuał regenerujący", "od 140 zł"],
  ["Blowout / modelowanie", "120 zł"],
  ["Fryzura okolicznościowa", "od 220 zł"]
] as const;

const testimonials = [
  {
    quote: "Najpiękniejszy kolor, jaki miałam od lat. Efekt wygląda luksusowo, a włosy są miękkie i błyszczące.",
    author: "Anna, klientka koloryzacji premium"
  },
  {
    quote: "Salon jest przepiękny, a zespół słucha i proponuje rozwiązania, które naprawdę pasują do mnie.",
    author: "Karolina, stała klientka"
  },
  {
    quote: "Przyszłam przed ważnym eventem i wyszłam z fryzurą, która trzymała się cały wieczór i wyglądała świetnie na zdjęciach.",
    author: "Natalia, stylizacja okazjonalna"
  }
];

const gallery = [
  "Miękki balayage w odcieniach nude blond",
  "Lśniący bob z subtelnym podbiciem objętości",
  "Romantyczne fale na wieczorne wyjście",
  "Brunette gloss z efektem tafli",
  "Ślubne upięcie z delikatną teksturą",
  "Naturalne cięcie warstwowe z ruchem"
];

const faqs = [
  {
    question: "Jak umówić wizytę?",
    answer: "Możesz zadzwonić, napisać wiadomość lub skorzystać z formularza kontaktowego i poprosić o proponowany termin."
  },
  {
    question: "Czy pomagacie dobrać usługę przy pierwszej wizycie?",
    answer: "Tak. Każdą wizytę zaczynamy od krótkiej konsultacji, podczas której dobieramy zakres usługi i plan pielęgnacji domowej."
  },
  {
    question: "Ile trwa koloryzacja premium?",
    answer: "W zależności od techniki zwykle od 2,5 do 4,5 godziny. Po konsultacji orientacyjny czas podajemy od razu."
  },
  {
    question: "Czy wykonujecie fryzury ślubne i próby?",
    answer: "Tak, prowadzimy zapisy na pakiety ślubne, w tym próbne stylizacje i przygotowanie harmonogramu dnia ślubu."
  }
];

const stats = [
  ["12+", "lat doświadczenia zespołu"],
  ["1 500+", "zadowolonych klientek rocznie"],
  ["4.9/5", "średnia ocen wizyt"],
  ["7 dni", "odpowiedź na zapytania do 24h"]
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-6 sm:px-8">
        <header className="flex flex-col gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-4 shadow-soft backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Lumière Studio</p>
          </div>
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-4 text-sm text-muted">
            {navigation.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="rounded-full bg-accent px-5 py-2.5 font-medium text-slate-950 transition hover:opacity-90"
            >
              Umów konsultację
            </a>
          </nav>
        </header>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Nowoczesny salon fryzjerski w centrum miasta</p>
          <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Piękne włosy, spokojna atmosfera i rezerwacja, do której chce się kliknąć.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Tworzymy dopracowane kolory, cięcia i stylizacje dla kobiet, które szukają jakości premium bez nadęcia. To kompletna, gotowa do uruchomienia strona landing page dla salonu fryzjerskiego z pełnym zestawem sekcji sprzedażowych.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-accent px-6 py-3 font-medium text-slate-950 shadow-glow transition hover:opacity-90"
            >
              Zarezerwuj wizytę
            </a>
            <a href="#cennik" className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5">
              Zobacz cennik
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-soft backdrop-blur">
          <div className="rounded-[1.5rem] bg-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Najbliższe terminy</p>
            <div className="mt-6 space-y-4">
              {[
                ["Wtorek", "10:00 • Strzyżenie / konsultacja"],
                ["Środa", "13:30 • Koloryzacja + tonowanie"],
                ["Piątek", "17:15 • Blowout / event styling"]
              ].map(([day, slot]) => (
                <div key={day} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-muted">{day}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{slot}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-5">
              <p className="text-sm font-medium text-accentSoft">Bezpłatna mini konsultacja dla nowych klientek</p>
              <p className="mt-2 text-sm leading-6 text-muted">Opowiedz nam o swoich włosach, a podpowiemy najlepszą usługę oraz orientacyjny czas wizyty.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="uslugi" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Usługi"
          title="Oferta, która prowadzi klientkę od inspiracji do decyzji"
          description="Każda karta usługi łączy nazwę, korzyść i konkret — dzięki temu landing page nie wygląda jak makieta, tylko jak prawdziwa strona salonu gotowa do pozyskiwania rezerwacji."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
              <h3 className="text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              <p className="mt-4 text-sm font-medium text-accentSoft">{service.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="o-salonie" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <SectionHeading
              eyebrow="O salonie"
              title="Miejsce stworzone po to, by dbać o efekt i o samopoczucie"
              description="Lumière Studio łączy estetykę butikowego wnętrza z podejściem opartym na konsultacji, planie koloryzacji i świadomej pielęgnacji. Klientki wracają do nas po spójny efekt, dobrą energię i poczucie zaopiekowania."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Indywidualna konsultacja", "Rozmawiamy o kondycji włosów, stylu życia i oczekiwaniach przed każdą większą zmianą."],
              ["Praca na jakościowych produktach", "Wybieramy formuły wspierające połysk, trwałość koloru i komfort skóry głowy."],
              ["Estetyka premium", "Nowoczesny design strony i salonu podkreśla profesjonalizm marki i buduje zaufanie."],
              ["Rezultat gotowy na co dzień", "Tworzymy fryzury, które wyglądają pięknie nie tylko w dniu wizyty, ale też później w codziennym użytkowaniu."]
            ].map(([title, text]) => (
              <article key={title} className="rounded-[1.5rem] border border-white/10 bg-panel p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="zespol" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Zespół stylistów"
          title="Ekspertki, które przekładają inspirację na realny efekt"
          description="Sekcja zespołu wzmacnia wiarygodność marki, pokazuje specjalizacje i pomaga klientkom poczuć, że wiedzą, komu powierzają swoje włosy."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {stylists.map((stylist) => (
            <article key={stylist.name} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft">
              <div className={`h-72 bg-gradient-to-br ${stylist.accent}`} />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{stylist.role}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{stylist.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{stylist.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cennik" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-panel p-8 shadow-soft">
            <SectionHeading
              eyebrow="Cennik"
              title="Przejrzyste ceny i jasny punkt wejścia do rozmowy"
              description="Pokazujemy ceny startowe, bo finalna wycena zależy od długości, gęstości włosów i zakresu pracy. Dzięki temu strona jest konkretna, ale nadal realistyczna operacyjnie."
            />
            <div className="mt-8 divide-y divide-white/10">
              {pricing.map(([service, price]) => (
                <div key={service} className="flex items-center justify-between gap-6 py-4 text-sm sm:text-base">
                  <span className="text-muted">{service}</span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 font-medium text-accent">{price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">Dlaczego klientki wybierają nas ponownie?</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-muted">
              <li>• przemyślany plan koloru i cięcia zamiast przypadkowej usługi,</li>
              <li>• spokojna atmosfera i dbałość o komfort podczas całej wizyty,</li>
              <li>• rekomendacje pielęgnacyjne dopasowane do domowej rutyny,</li>
              <li>• estetyczny efekt premium gotowy do zdjęć i codziennego noszenia.</li>
            </ul>
            <a href="#kontakt" className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-medium text-slate-950 transition hover:opacity-90">
              Zapytaj o termin
            </a>
          </div>
        </div>
      </section>

      <section id="opinie" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Opinie klientek"
          title="Społeczny dowód jakości, który wspiera decyzję o rezerwacji"
          description="Autentycznie brzmiące opinie zwiększają zaufanie i pokazują, jak klientki opisują swoje doświadczenie po wizycie."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
              <p className="text-lg leading-8 text-white">“{testimonial.quote}”</p>
              <footer className="mt-6 text-sm font-medium text-accentSoft">{testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="Kadry, które budują wyobrażenie o efekcie jeszcze przed wizytą"
          description="Galeria działa jak portfolio salonu — pokazuje styl marki, zakres prac i estetykę wykończenia, dzięki czemu strona staje się bardziej wiarygodna i inspirująca."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <article key={item} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft">
              <div className={`h-72 bg-gradient-to-br ${index % 3 === 0 ? "from-rose-200/70 via-pink-200/35 to-fuchsia-900/60" : index % 3 === 1 ? "from-stone-100/70 via-amber-100/30 to-orange-900/60" : "from-zinc-100/70 via-rose-100/30 to-rose-950/60"}`} />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item}</h3>
                <p className="mt-2 text-sm text-muted">Inspiracja do zapisania wizyty i punkt odniesienia podczas konsultacji.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <SectionHeading
              eyebrow="Rezerwacja i kontakt"
              title="Gotowy punkt konwersji z pełnymi danymi kontaktowymi"
              description="Ta sekcja łączy CTA, formularz, godziny otwarcia i dane salonu, aby odwiedzająca mogła od razu podjąć kolejny krok bez szukania informacji w kilku miejscach."
            />
            <dl className="mt-8 space-y-5 text-sm text-muted">
              <div>
                <dt className="font-semibold uppercase tracking-[0.25em] text-accent">Adres</dt>
                <dd className="mt-2 text-base text-white">ul. Różana 18, 00-451 Warszawa</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.25em] text-accent">Telefon</dt>
                <dd className="mt-2 text-base text-white">+48 510 240 880</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.25em] text-accent">Email</dt>
                <dd className="mt-2 text-base text-white">rezerwacje@lumiere-studio.pl</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.25em] text-accent">Godziny</dt>
                <dd className="mt-2 text-base text-white">Pon–Pt 9:00–20:00 · Sob 9:00–16:00</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-panel p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-white">Poproś o termin</h3>
            <p className="mt-3 text-sm leading-7 text-muted">To statyczny formularz demonstracyjny gotowy do późniejszego podpięcia do backendu, CRM lub narzędzia do rezerwacji.</p>
            <form className="mt-8 grid gap-4">
              <label className="grid gap-2 text-sm text-muted">
                Imię i nazwisko
                <input type="text" placeholder="Np. Aleksandra Kowalska" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted/70" />
              </label>
              <label className="grid gap-2 text-sm text-muted">
                Telefon lub email
                <input type="text" placeholder="Np. 500 000 000 lub email@adres.pl" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted/70" />
              </label>
              <label className="grid gap-2 text-sm text-muted">
                Usługa
                <input type="text" placeholder="Np. balayage, strzyżenie, konsultacja" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted/70" />
              </label>
              <label className="grid gap-2 text-sm text-muted">
                Wiadomość
                <textarea rows={5} placeholder="Napisz, jaki efekt chcesz uzyskać i kiedy pasuje Ci wizyta." className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted/70" />
              </label>
              <button type="button" className="mt-2 inline-flex justify-center rounded-full bg-accent px-6 py-3 font-medium text-slate-950 transition hover:opacity-90">
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Najczęstsze pytania przed pierwszą wizytą"
          description="FAQ domyka obiekcje zakupowe i zmniejsza liczbę powtarzalnych pytań, jednocześnie wzmacniając wrażenie dopracowanej, kompletnej strony."
        />
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Lumière Studio</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
              Kompletny landing page dla salonu fryzjerskiego: estetyczny, responsywny i gotowy jako projekt Next.js do dalszego rozwijania lub wdrożenia.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <a href="#uslugi" className="transition hover:text-white">Usługi</a>
            <a href="#zespol" className="transition hover:text-white">Zespół</a>
            <a href="#cennik" className="transition hover:text-white">Cennik</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a href="#kontakt" className="transition hover:text-white">Kontakt</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
