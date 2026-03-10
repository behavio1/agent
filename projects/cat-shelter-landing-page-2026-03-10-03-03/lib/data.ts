export interface Cat {
  id: string;
  name: string;
  age: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ShelterStats {
  rescuedCount: number;
  adoptedCount: number;
  volunteersCount: number;
}

export interface DonationInfo {
  bankAccount: string;
  swiftCode: string;
  neededItems: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

export const availableCats: Cat[] = [
  {
    id: "cat-1",
    name: "Mruczek",
    age: "3 lata",
    description: "Spokojny i uwielbiający głaskanie. Idealny towarzysz na długie, zimowe wieczory. Toleruje inne koty.",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Rudy kot leżący na podłodze",
  },
  {
    id: "cat-2",
    name: "Luna",
    age: "1 rok",
    description: "Energiczna i ciekawska kotka. Uwielbia zabawy wędką i gonitwy za laserem. Wymaga wyrozumiałego opiekuna.",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Biało-rudy kot patrzący w obiektyw",
  },
  {
    id: "cat-3",
    name: "Puszek",
    age: "5 lat",
    description: "Kocur o dłuższej sierści, bardzo proludzki. Najlepiej czułby się jako jedynak, gdyż jest bywa o siebie zazdrosny.",
    imageUrl: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Puszysty szary kot",
  },
  {
    id: "cat-4",
    name: "Bella",
    age: "2 lata",
    description: "Nieśmiała, ale bardzo wdzięczna kotka. Potrzebuje trochę czasu, żeby zaufać nowemu opiekunowi.",
    imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Czarno-biały kot z żółtymi oczami",
  },
  {
    id: "cat-5",
    name: "Karmel",
    age: "4 miesiące",
    description: "Rozkoszny maluch, wszędzie go pełno. Nauczony korzystania z kuwety. Czeka na swój pierwszy, prawdziwy dom.",
    imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Mały rudy kociak",
  },
  {
    id: "cat-6",
    name: "Shadow",
    age: "7 lat",
    description: "Dostojny kocur o czarnym umaszczeniu. Jest bardzo spokojny, dużo śpi i mruczy, kiedy tylko poczuje obecność człowieka.",
    imageUrl: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Czarny kot siedzący w cieniu",
  }
];

export const shelterStats: ShelterStats = {
  rescuedCount: 1250,
  adoptedCount: 980,
  volunteersCount: 45,
};

export const donationInfo: DonationInfo = {
  bankAccount: "12 3456 7890 1234 5678 9012 3456",
  swiftCode: "PLBXXPL",
  neededItems: [
    "Wysokomięsna mokra karma dla kotów dorosłych i kociąt",
    "Żwirek (najlepiej bentonitowy lub drewniany)",
    "Koce, ręczniki i czyste posłania",
    "Zabawki wędkowe, drapaki",
    "Transportery w dobrym stanie",
    "Środki czystości (płyny do podłóg, podkłady higieniczne)"
  ],
};

export const contactInfo: ContactInfo = {
  address: "ul. Kocia 15, 00-001 Warszawa",
  phone: "+48 123 456 789",
  email: "kontakt@schroniskokoty.pl",
  workingHours: "Poniedziałek - Piątek: 10:00 - 18:00, Sobota - Niedziela: 10:00 - 15:00",
};
