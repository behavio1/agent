export const studioInfo = {
  name: "Ink & Echo Tattoo Studio",
  address: "123 Needle St, Arts District, NY 10001",
  phone: "+1 (555) 123-4567",
  email: "booking@inkandecho.com",
  hours: [
    { days: "Mon - Thu", time: "11:00 AM - 8:00 PM" },
    { days: "Fri - Sat", time: "11:00 AM - 10:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  mapLink: "https://maps.google.com/?q=123+Needle+St,+Arts+District,+NY+10001",
  about: "Ink & Echo is a premium tattoo studio specializing in custom designs, blackwork, and fine line tattoos. We provide a clean, welcoming environment and work closely with our clients to bring their visions to life."
};

export const artists = [
  {
    id: "alex",
    name: "Alex Thorne",
    role: "Lead Artist & Founder",
    specialties: ["Blackwork", "Geometric", "Dotwork"],
    bio: "With over 10 years of experience, Alex specializes in intricate blackwork and geometric patterns.",
    image: "https://images.unsplash.com/photo-1598371839696-5e5bb00b059b?w=800&q=80",
    instagram: "@alex_tattoos"
  },
  {
    id: "mia",
    name: "Mia Silva",
    role: "Resident Artist",
    specialties: ["Fine Line", "Micro-realism", "Floral"],
    bio: "Mia brings a delicate touch to her work, creating stunning micro-realism and floral pieces.",
    image: "https://images.unsplash.com/photo-1573511860302-28c5243198e6?w=800&q=80",
    instagram: "@mia_ink"
  },
  {
    id: "jaxon",
    name: "Jaxon Reed",
    role: "Resident Artist",
    specialties: ["Traditional", "Neo-Traditional", "Color"],
    bio: "Jaxon's bold lines and vibrant colors make his traditional and neo-traditional pieces stand out.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    instagram: "@jaxon_tattoos"
  }
];

export const portfolioImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80", alt: "Blackwork geometric sleeve", category: "Blackwork", artistId: "alex" },
  { id: 2, src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800&q=80", alt: "Fine line floral tattoo", category: "Fine Line", artistId: "mia" },
  { id: 3, src: "https://images.unsplash.com/photo-1598371839696-5e5bb00b059b?w=800&q=80", alt: "Neo-traditional panther", category: "Neo-Traditional", artistId: "jaxon" },
  { id: 4, src: "https://images.unsplash.com/photo-1588607149591-6de1d52de5d1?w=800&q=80", alt: "Dotwork mandala", category: "Dotwork", artistId: "alex" },
  { id: 5, src: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80", alt: "Micro-realism portrait", category: "Micro-realism", artistId: "mia" },
  { id: 6, src: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80", alt: "Traditional dagger and rose", category: "Traditional", artistId: "jaxon" }
];

export const services = [
  {
    id: "custom",
    title: "Custom Tattoos",
    description: "Work 1-on-1 with an artist to design a unique piece tailored perfectly to your body and vision.",
    startingPrice: "$150/hr",
    icon: "pen"
  },
  {
    id: "flash",
    title: "Flash Designs",
    description: "Choose from our regularly updated collection of pre-drawn flash designs. Perfect for walk-ins.",
    startingPrice: "From $100",
    icon: "zap"
  },
  {
    id: "cover-ups",
    title: "Cover-ups",
    description: "Transform an old or unwanted tattoo into something you love. Requires a mandatory consultation.",
    startingPrice: "$150/hr",
    icon: "refresh-cw"
  },
  {
    id: "piercings",
    title: "Body Piercing",
    description: "Professional body piercing services using high-quality titanium and solid gold jewelry.",
    startingPrice: "From $40",
    icon: "disc"
  }
];

export const faqs = [
  {
    question: "Do I need an appointment or do you take walk-ins?",
    answer: "We welcome walk-ins for smaller flash pieces on a first-come, first-served basis. However, for custom work and larger pieces, an appointment is required."
  },
  {
    question: "How much does a tattoo cost?",
    answer: "Our shop minimum is $100. For custom pieces, we charge $150 per hour. Flash pieces have set prices. We'll give you an estimate during your consultation."
  },
  {
    question: "What is your deposit policy?",
    answer: "A non-refundable deposit of $100 is required to secure your appointment. This deposit goes towards the final cost of your tattoo. 48-hour notice is required to reschedule."
  },
  {
    question: "How should I prepare for my tattoo appointment?",
    answer: "Get a good night's sleep, eat a solid meal beforehand, and stay hydrated. Wear comfortable clothing that allows easy access to the area being tattooed. Please do not consume alcohol or blood-thinning medication 24 hours prior."
  },
  {
    question: "How do I care for my new tattoo?",
    answer: "We will provide you with detailed written aftercare instructions and recommended products. Generally, you'll need to keep it clean, moisturized, and out of direct sunlight and soaking water for 2-3 weeks."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "Alex is an absolute master. He took my vague idea and turned it into a breathtaking full sleeve. The studio is incredibly clean and professional.",
    rating: 5,
    date: "October 2025"
  },
  {
    id: 2,
    name: "Marcus T.",
    text: "Got my first tattoo here with Mia. She was so patient and made me feel completely at ease. The fine line work healed perfectly.",
    rating: 5,
    date: "December 2025"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    text: "Jaxon's color work is out of this world. The vibe in the shop is cool but welcoming, not intimidating at all like some other places.",
    rating: 5,
    date: "February 2026"
  }
];
