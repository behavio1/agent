export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  name: string;
  description: string;
  details: string;
};

export type AboutFeature = {
  title: string;
  description: string;
};

export type Stylist = {
  name: string;
  role: string;
  bio: string;
  accent: string;
};

export type PriceItem = {
  service: string;
  price: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  accent: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ContactDetail = {
  label: string;
  value: string;
};

export type ContactField = {
  label: string;
  placeholder: string;
  type?: "text" | "textarea";
  rows?: number;
};

export const siteContent = {
  brand: {
    name: "Lumière Studio",
    tagline: "Butikowy salon fryzjerski w centrum Warszawy"
  },
  navigation: [
    { label: "Usługi", href: "#uslugi" },
    { label: "O salonie", href: "#o-salonie" },
    { label: "Zespół", href: "#zespol" },
    { label: "Cennik", href: "#cennik" },
    { label: "Opinie", href: "#opinie" },
    { label: "Kontakt", href: "#kontakt" }
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Nowoczesny salon fryzjerski w centrum miasta",
    title: "Piękne włosy, spokojna atmosfera i rezerwacja, do której chce się kliknąć.",
    description:
      "Tworzymy dopracowane kolory, cięcia i stylizacje dla kobiet, które szukają jakości premium bez pośpiechu. Od pierwszej konsultacji po finalne wykończenie prowadzimy klientkę przez doświadczenie, które wygląda luksusowo i daje realny komfort noszenia na co dzień.",
    primaryCta: { label: "Zarezerwuj wizytę", href: "#kontakt" },
    secondaryCta: { label: "Zobacz cennik", href: "#cennik" },
    stats: [
      { value: "12+", label: "lat doświadczenia zespołu" },
      { value: "1 500+", label: "zadowolonych klientek rocznie" },
      { value: "4.9/5", label: "średnia ocen wizyt" },
      { value: "24h", label: "średni czas odpowiedzi na zapytania" }
    ] satisfies StatItem[],
    availability: {
      eyebrow: "Najbliższe terminy",
      slots: [
        { day: "Wtorek", slot: "10:00 • Strzyżenie / konsultacja" },
        { day: "Środa", slot: "13:30 • Koloryzacja + tonowanie" },
        { day: "Piątek", slot: "17:15 • Blowout / event styling" }
      ],
      calloutTitle: "Bezpłatna mini konsultacja dla nowych klientek",
      calloutText:
        "Opowiedz nam o swoich włosach, a podpowiemy najlepszą usługę oraz orientacyjny czas wizyty."
    }
  },
  services: {
    eyebrow: "Usługi",
    title: "Oferta, która prowadzi klientkę od inspiracji do decyzji",
    description:
      "Każda karta usługi łączy nazwę, korzyść i konkret — dzięki temu landing page nie wygląda jak makieta, tylko jak prawdziwa strona salonu gotowa do pozyskiwania rezerwacji.",
    items: [
      {
        name: "Strzyżenie premium",
        description:
          "Precyzyjne cięcie dopasowane do kształtu twarzy, stylu życia i codziennej pielęgnacji.",
        details: "Konsultacja, mycie, masaż skóry głowy i modelowanie w cenie."
      },
      {
        name: "Koloryzacja i tonowanie",
        description:
          "Naturalne blondy, wielowymiarowe brązy i odświeżenie koloru bez kompromisów dla kondycji włosów.",
        details: "Pracujemy na pielęgnujących formułach i planujemy kolor pod długofalowy efekt."
      },
      {
        name: "Balayage / airtouch",
        description:
          "Miękkie przejścia i luksusowy połysk dla efektu, który wygląda świetnie od pierwszego dnia do odrostu.",
        details: "Idealne rozwiązanie dla klientek szukających subtelnej, eleganckiej zmiany."
      },
      {
        name: "Regeneracja i rytuały care",
        description:
          "Kuracje odbudowujące, nawilżające i wygładzające dobierane do porowatości oraz potrzeb włosów.",
        details: "Polecane po rozjaśnianiu i przed ważnymi wydarzeniami."
      },
      {
        name: "Modelowanie i blowout",
        description: "Lekkość, objętość i trwały efekt na co dzień lub na wyjątkowy wieczór.",
        details: "Od miękkich fal po gładkie, eleganckie wykończenie."
      },
      {
        name: "Fryzury okolicznościowe",
        description:
          "Śluby, sesje, eventy i ważne spotkania — fryzura, która trzyma formę i świetnie wygląda na zdjęciach.",
        details: "Możliwość wcześniejszej próby i rozpisania planu stylizacji."
      }
    ] satisfies ServiceItem[]
  },
  about: {
    eyebrow: "O salonie",
    title: "Miejsce stworzone po to, by dbać o efekt i o samopoczucie",
    description:
      "Lumière Studio łączy estetykę butikowego wnętrza z podejściem opartym na konsultacji, planie koloryzacji i świadomej pielęgnacji. Klientki wracają do nas po spójny efekt, dobrą energię i poczucie zaopiekowania.",
    features: [
      {
        title: "Indywidualna konsultacja",
        description:
          "Rozmawiamy o kondycji włosów, stylu życia i oczekiwaniach przed każdą większą zmianą."
      },
      {
        title: "Praca na jakościowych produktach",
        description:
          "Wybieramy formuły wspierające połysk, trwałość koloru i komfort skóry głowy."
      },
      {
        title: "Estetyka premium",
        description:
          "Nowoczesny design strony i salonu podkreśla profesjonalizm marki i buduje zaufanie."
      },
      {
        title: "Rezultat gotowy na co dzień",
        description:
          "Tworzymy fryzury, które wyglądają pięknie nie tylko w dniu wizyty, ale też później w codziennym użytkowaniu."
      }
    ] satisfies AboutFeature[]
  },
  team: {
    eyebrow: "Zespół stylistów",
    title: "Ekspertki, które przekładają inspirację na realny efekt",
    description:
      "Sekcja zespołu wzmacnia wiarygodność marki, pokazuje specjalizacje i pomaga klientkom poczuć, że wiedzą, komu powierzają swoje włosy.",
    members: [
      {
        name: "Marta Zielińska",
        role: "Founder & Master Stylist",
        bio:
          "Specjalistka od nowoczesnych cięć i pracy z formą. Tworzy fryzury, które dobrze wyglądają także po wyjściu z salonu.",
        accent: "from-rose-200/70 via-pink-200/35 to-fuchsia-800/60"
      },
      {
        name: "Klara Nowak",
        role: "Color Expert",
        bio:
          "Uwielbia miękkie przejścia, czyste blondy i odcienie dopasowane do karnacji oraz stylu klientki.",
        accent: "from-amber-100/70 via-rose-100/35 to-orange-800/60"
      },
      {
        name: "Zofia Lewandowska",
        role: "Styling & Care Specialist",
        bio:
          "Łączy pielęgnację z efektownym wykończeniem — od gładkich blowoutów po fryzury eventowe.",
        accent: "from-stone-100/70 via-rose-100/30 to-rose-900/60"
      }
    ] satisfies Stylist[]
  },
  pricing: {
    eyebrow: "Cennik",
    title: "Przejrzyste ceny i jasny punkt wejścia do rozmowy",
    description:
      "Pokazujemy ceny startowe, bo finalna wycena zależy od długości, gęstości włosów i zakresu pracy. Dzięki temu strona jest konkretna, ale nadal realistyczna operacyjnie.",
    items: [
      { service: "Strzyżenie damskie + modelowanie", price: "180 zł" },
      { service: "Koloryzacja jednolita", price: "od 280 zł" },
      { service: "Balayage / airtouch", price: "od 520 zł" },
      { service: "Rytuał regenerujący", price: "od 140 zł" },
      { service: "Blowout / modelowanie", price: "120 zł" },
      { service: "Fryzura okolicznościowa", price: "od 220 zł" }
    ] satisfies PriceItem[],
    highlightsTitle: "Dlaczego klientki wybierają nas ponownie?",
    highlights: [
      "przemyślany plan koloru i cięcia zamiast przypadkowej usługi,",
      "spokojna atmosfera i dbałość o komfort podczas całej wizyty,",
      "rekomendacje pielęgnacyjne dopasowane do domowej rutyny,",
      "estetyczny efekt premium gotowy do zdjęć i codziennego noszenia."
    ],
    cta: { label: "Zapytaj o termin", href: "#kontakt" }
  },
  testimonials: {
    eyebrow: "Opinie klientek",
    title: "Społeczny dowód jakości, który wspiera decyzję o rezerwacji",
    description:
      "Autentycznie brzmiące opinie zwiększają zaufanie i pokazują, jak klientki opisują swoje doświadczenie po wizycie.",
    items: [
      {
        quote:
          "Najpiękniejszy kolor, jaki miałam od lat. Efekt wygląda luksusowo, a włosy są miękkie i błyszczące.",
        author: "Anna, klientka koloryzacji premium"
      },
      {
        quote:
          "Salon jest przepiękny, a zespół słucha i proponuje rozwiązania, które naprawdę pasują do mnie.",
        author: "Karolina, stała klientka"
      },
      {
        quote:
          "Przyszłam przed ważnym eventem i wyszłam z fryzurą, która trzymała się cały wieczór i wyglądała świetnie na zdjęciach.",
        author: "Natalia, stylizacja okazjonalna"
      }
    ] satisfies Testimonial[]
  },
  gallery: {
    eyebrow: "Galeria",
    title: "Kadry, które budują wyobrażenie o efekcie jeszcze przed wizytą",
    description:
      "Galeria działa jak portfolio salonu — pokazuje styl marki, zakres prac i estetykę wykończenia, dzięki czemu strona staje się bardziej wiarygodna i inspirująca.",
    items: [
      {
        title: "Miękki balayage w odcieniach nude blond",
        description: "Inspiracja do zapisania wizyty i punkt odniesienia podczas konsultacji.",
        accent: "from-rose-200/70 via-pink-200/35 to-fuchsia-900/60"
      },
      {
        title: "Lśniący bob z subtelnym podbiciem objętości",
        description: "Inspiracja do zapisania wizyty i punkt odniesienia podczas konsultacji.",
        accent: "from-stone-100/70 via-amber-100/30 to-orange-900/60"
      },
      {
        title: "Romantyczne fale na wieczorne wyjście",
        description: "Inspiracja do zapisania wizyty i punkt odniesienia podczas konsultacji.",
        accent: "from-zinc-100/70 via-rose-100/30 to-rose-950/60"
      },
      {
        title: "Brunette gloss z efektem tafli",
        description: "Inspiracja do zapisania wizyty i punkt odniesienia podczas konsultacji.",
        accent: "from-rose-200/70 via-pink-200/35 to-fuchsia-900/60"
      },
      {
        title: "Ślubne upięcie z delikatną teksturą",
        description: "Inspiracja do zapisania wizyty i punkt odniesienia podczas konsultacji.",
        accent: "from-stone-100/70 via-amber-100/30 to-orange-900/60"
      },
      {
        title: "Naturalne cięcie warstwowe z ruchem",
        description: "Inspiracja do zapisania wizyty i punkt odniesienia podczas konsultacji.",
        accent: "from-zinc-100/70 via-rose-100/30 to-rose-950/60"
      }
    ] satisfies GalleryItem[]
  },
  contact: {
    eyebrow: "Rezerwacja i kontakt",
    title: "Gotowy punkt konwersji z pełnymi danymi kontaktowymi",
    description:
      "Ta sekcja łączy CTA, formularz, godziny otwarcia i dane salonu, aby odwiedzająca mogła od razu podjąć kolejny krok bez szukania informacji w kilku miejscach.",
    details: [
      { label: "Adres", value: "ul. Różana 18, 00-451 Warszawa" },
      { label: "Telefon", value: "+48 510 240 880" },
      { label: "Email", value: "rezerwacje@lumiere-studio.pl" },
      { label: "Godziny", value: "Pon–Pt 9:00–20:00 · Sob 9:00–16:00" }
    ] satisfies ContactDetail[],
    formTitle: "Poproś o termin",
    formDescription:
      "To statyczny formularz demonstracyjny gotowy do późniejszego podpięcia do backendu, CRM lub narzędzia do rezerwacji.",
    formFields: [
      { label: "Imię i nazwisko", placeholder: "Np. Aleksandra Kowalska" },
      { label: "Telefon lub email", placeholder: "Np. 500 000 000 lub email@adres.pl" },
      { label: "Usługa", placeholder: "Np. balayage, strzyżenie, konsultacja" },
      {
        label: "Wiadomość",
        placeholder: "Napisz, jaki efekt chcesz uzyskać i kiedy pasuje Ci wizyta.",
        type: "textarea",
        rows: 5
      }
    ] satisfies ContactField[],
    submitLabel: "Wyślij zapytanie"
  },
  faq: {
    eyebrow: "FAQ",
    title: "Najczęstsze pytania przed pierwszą wizytą",
    description:
      "FAQ domyka obiekcje zakupowe i zmniejsza liczbę powtarzalnych pytań, jednocześnie wzmacniając wrażenie dopracowanej, kompletnej strony.",
    items: [
      {
        question: "Jak umówić wizytę?",
        answer:
          "Możesz zadzwonić, napisać wiadomość lub skorzystać z formularza kontaktowego i poprosić o proponowany termin."
      },
      {
        question: "Czy pomagacie dobrać usługę przy pierwszej wizycie?",
        answer:
          "Tak. Każdą wizytę zaczynamy od krótkiej konsultacji, podczas której dobieramy zakres usługi i plan pielęgnacji domowej."
      },
      {
        question: "Ile trwa koloryzacja premium?",
        answer:
          "W zależności od techniki zwykle od 2,5 do 4,5 godziny. Po konsultacji orientacyjny czas podajemy od razu."
      },
      {
        question: "Czy wykonujecie fryzury ślubne i próby?",
        answer:
          "Tak, prowadzimy zapisy na pakiety ślubne, w tym próbne stylizacje i przygotowanie harmonogramu dnia ślubu."
      }
    ] satisfies FaqItem[]
  },
  footer: {
    description:
      "Kompletny landing page dla salonu fryzjerskiego: estetyczny, responsywny i gotowy jako projekt Next.js do dalszego rozwijania lub wdrożenia.",
    links: [
      { label: "Usługi", href: "#uslugi" },
      { label: "Zespół", href: "#zespol" },
      { label: "Cennik", href: "#cennik" },
      { label: "FAQ", href: "#faq" },
      { label: "Kontakt", href: "#kontakt" }
    ] satisfies NavItem[]
  }
} as const;
