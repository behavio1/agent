export interface Artist {
  id: string;
  name: string;
  bio: string;
  style: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  imageUrl: string;
  category: string;
  altText: string;
}

export interface Service {
  title: string;
  description: string;
  startingPrice: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const artists: Artist[] = [
  {
    id: "artist-1",
    name: "Jaxson 'Needle' Cole",
    bio: "With over 10 years of experience, Jaxson specializes in hyper-realism and dark surrealism. He treats the skin as a canvas for striking, high-contrast imagery.",
    style: "Realism & Surrealism",
    imageUrl: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "artist-2",
    name: "Elena Vance",
    bio: "Elena's work is defined by bold lines and vivid colors. She brings classic traditional tattoo aesthetics into the modern era.",
    style: "American Traditional",
    imageUrl: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "artist-3",
    name: "Marcus Thorne",
    bio: "Master of geometric patterns and intricate blackwork. Marcus creates mesmerizing mandalas and abstract dotwork pieces.",
    style: "Blackwork & Geometric",
    imageUrl: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&q=80&w=800",
  }
];

export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    imageUrl: "https://images.unsplash.com/photo-1590246814883-57832efa262c?auto=format&fit=crop&q=80&w=800",
    category: "Realism",
    altText: "Detailed realistic portrait tattoo on forearm",
  },
  {
    id: "p2",
    imageUrl: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=800",
    category: "Traditional",
    altText: "Bold American traditional eagle tattoo",
  },
  {
    id: "p3",
    imageUrl: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&q=80&w=800",
    category: "Blackwork",
    altText: "Geometric dotwork mandala tattoo on shoulder",
  },
  {
    id: "p4",
    imageUrl: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800",
    category: "Realism",
    altText: "Black and grey realism skull tattoo",
  },
  {
    id: "p5",
    imageUrl: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&w=800",
    category: "Traditional",
    altText: "Classic traditional panther tattoo",
  },
  {
    id: "p6",
    imageUrl: "https://images.unsplash.com/photo-1590246814883-57832efa262c?auto=format&fit=crop&q=80&w=800",
    category: "Blackwork",
    altText: "Intricate blackwork floral sleeve",
  }
];

export const services: Service[] = [
  {
    title: "Custom Designs",
    description: "Work directly with our artists to bring your unique vision to life. Includes a consultation and custom sketch.",
    startingPrice: "$150/hr",
  },
  {
    title: "Flash Tattoos",
    description: "Choose from our extensive collection of original, pre-drawn flash designs. Perfect for spontaneous pieces.",
    startingPrice: "$100/piece",
  },
  {
    title: "Cover-Ups",
    description: "Transform an old or unwanted tattoo into a completely new piece of art. Requires an in-person consultation.",
    startingPrice: "$200/hr",
  },
  {
    title: "Touch-Ups",
    description: "Keep your tattoos looking fresh. Free touch-ups for the first 6 months on work done at our studio.",
    startingPrice: "$50 (Minimum)",
  }
];

export const faqs: FAQ[] = [
  {
    question: "Do you accept walk-ins?",
    answer: "We primarily work by appointment to ensure our artists have adequate time to prepare. However, we do occasionally have walk-in availability for flash pieces. It's best to call ahead.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer: "Get a good night's sleep, eat a solid meal before coming in, and stay hydrated. Do not consume alcohol or blood-thinning medication 24 hours prior to your session.",
  },
  {
    question: "What is your deposit policy?",
    answer: "A non-refundable $100 deposit is required to secure your appointment. This amount goes towards the final cost of your tattoo.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept cash, major credit cards, and digital payments like Apple Pay and Venmo. Cash is preferred for tips.",
  },
  {
    question: "Can I bring a friend?",
    answer: "You may bring one guest for moral support. Please avoid bringing large groups as our studio space is limited and artists need to focus.",
  },
  {
    question: "Tattoo Aftercare Instructions",
    answer: "Keep the bandage on for 2-4 hours. Wash gently with unscented antibacterial soap and warm water. Pat dry with a clean paper towel. Apply a very thin layer of Aquaphor for the first 3 days, then switch to an unscented lotion. Do not pick, scratch, or submerge the tattoo in water (pools, baths) for at least 2 weeks."
  }
];
