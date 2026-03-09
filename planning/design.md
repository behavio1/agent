# Technical Design: Landing Page dla Salonu Tatuażu

## 1. Architecture Overview
- **Framework:** Next.js 14 (App Router) using React 18.
- **Language:** TypeScript for type safety across components and data models.
- **Styling:** Tailwind CSS for rapid, utility-first styling with mobile-first responsive design. Lucide React for consistent icons.
- **Deployment:** Vercel for continuous deployment, caching, and optimized Edge delivery.
- **Paradigm:** The application will heavily rely on React Server Components (RSC) to maximize performance and SEO. Client Components (`"use client"`) will be used strictly for interactive islands (e.g., gallery filtering, FAQ accordions, and the contact form).
- **Assets:** Next.js `<Image />` component will handle automatic optimization (WebP, resizing, lazy-loading) for the heavy visual assets (Hero, Portfolio, Artists).

## 2. Repository Context and Relevant Existing Files
The project is initialized as a Next.js application at `projects/tattoo-studio-landing-page`.

**Key files and directories expected to change/be created:**
- `projects/tattoo-studio-landing-page/src/app/layout.tsx`: Root layout, containing the global navigation (Navbar), footer (Footer), and Polish SEO metadata.
- `projects/tattoo-studio-landing-page/src/app/page.tsx`: The main landing page orchestrating all sections.
- `projects/tattoo-studio-landing-page/src/components/*`: Directory for reusable UI components (e.g., `Button`, `SectionHeading`) and page-specific sections.
- `projects/tattoo-studio-landing-page/src/data/mockData.ts`: Static JSON-like data structure to power the page content (acting as the CMS for the MVP).
- `projects/tattoo-studio-landing-page/public/*`: Placeholder and static images.

## 3. Component and Page Breakdown
The single page application will be constructed from modular section components in `src/components/sections/`:

1. **`Navbar`**: Fixed navigation with links to sections.
2. **`HeroSection`**: Background image (or video placeholder) of tattooing, studio name, tagline, and primary CTA ("Umów się na sesję").
3. **`AboutSection`**: Static text content describing the studio's philosophy, hygiene standards, and atmosphere.
4. **`ArtistsSection`**: Grid of artist cards displaying names, preferred styles, and Instagram links.
5. **`PortfolioSection`** (Client Component): A masonry or responsive grid gallery of tattoo photos. Includes a client-side filter (by style or artist).
6. **`ServicesSection`**: List/grid of offered services (custom tattoos, flash, cover-ups, piercing, laser removal) with simple icons.
7. **`TestimonialsSection`**: Review cards displaying client ratings and text.
8. **`FAQSection`** (Client Component): Accordion-style list of frequently asked questions regarding pricing, pain, preparation, and aftercare.
9. **`ContactSection`** (Client Component): Contact form (Name, Email, Message), embedded map, opening hours, phone, and email details.
10. **`Footer`**: Copyright info, privacy policy link, and social media links.

## 4. Data Model and State Boundaries
Content will be managed statically via typed arrays exported from `src/data/mockData.ts`.

### Data Structures (TypeScript Interfaces)
- `Artist`: `{ id: string; name: string; styles: string[]; image: string; socialLink: string }`
- `PortfolioItem`: `{ id: string; imageUrl: string; artistId: string; style: string; altText: string }`
- `Service`: `{ id: string; title: string; description: string; icon: string }`
- `Testimonial`: `{ id: string; author: string; rating: number; text: string }`
- `FAQ`: `{ id: string; question: string; answer: string }`

### State Boundaries (Client Components)
- **`PortfolioSection`**: Requires `activeFilter` (string) state to toggle visible gallery items.
- **`FAQSection`**: Requires `openItemId` (string | null) state to manage accordion toggles.
- **`ContactForm`**: Requires form state (name, email, message) and `submissionStatus` ('idle' | 'loading' | 'success' | 'error').

## 5. API and Integration Surface
- **Contact Form Submission**: Given the MVP requirements, the form will use a Server Action (`src/app/actions/submitContact.ts`) to validate the input (using simple regex or native HTML5 validation). Upon successful validation, it will simulate an email dispatch (or construct a `mailto:` link if preferred by the user client-side) and return a success message to the UI. No external database or active third-party integrations (like Booksy or Resend) will be strictly enforced for the initial deploy, keeping the architecture lean.

## 6. Ordered Implementation Strategy
1. **Core Setup & Global Layout**: Update `layout.tsx` with Polish metadata, font configuration, Navbar, and Footer. Configure `tailwind.config.ts` if custom colors/fonts are needed.
2. **Data Mocking**: Create `src/data/mockData.ts` and define the interfaces and placeholder content in Polish.
3. **Static Sections**: Build `HeroSection`, `AboutSection`, `ServicesSection`, and `TestimonialsSection` using pure React Server Components.
4. **Interactive Gallery**: Build `PortfolioSection` with image optimization (`next/image`) and client-side filtering logic.
5. **Artists & FAQ**: Build `ArtistsSection` (static) and `FAQSection` (interactive accordion).
6. **Contact & Forms**: Build `ContactSection` integrating the form UI, validation state, Server Action logic, and static contact details (address/map).
7. **Orchestration**: Assemble all sections in `src/app/page.tsx`.
8. **Polish & Optimization**: Ensure Lighthouse scores are >90 by checking alt attributes, color contrast, semantic HTML, and image lazy loading.

## 7. Testing and Validation Strategy
- **Responsive Design Check**: Manually test the layout across mobile (320px), tablet (768px), and desktop (1024px+) breakpoints using browser developer tools.
- **Lighthouse Audits**: Run Google Lighthouse in Chrome DevTools on local build and Vercel preview URLs. Target metrics must be >= 90 for Performance, Accessibility, Best Practices, and SEO.
- **Accessibility Validation**: Ensure all interactive elements (buttons, form fields) have `aria-label` or visible labels, and all `next/image` components have descriptive `alt` text. Verify keyboard navigability of the FAQ accordion and gallery filters.
- **Functional Testing**: Verify the contact form rejects empty submissions and successfully displays a success state upon correct submission. Test the portfolio filters to ensure correct images render.
