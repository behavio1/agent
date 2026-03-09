# Technical Design: Tattoo Studio Landing Page

## 1. Architecture Overview
This application is a single-page marketing landing page built with Next.js App Router. It is designed to be fully static for high performance (Lighthouse 90+ target), leveraging React client components selectively where interactivity is required (e.g., forms, modals, filterable galleries, animations).
The visual layer relies on Tailwind CSS for layout and responsiveness, Framer Motion for scroll/entry animations, and `shadcn/ui` for accessible component primitives (forms, accordions, dialogs).

## 2. Repository Context and Existing Files
- **App Root**: `projects/tattoo-studio-landing-page-2026-03-10-00-46/`
- **Entry Point**: `app/page.tsx` (the single landing page)
- **Layout**: `app/layout.tsx` (global wrappers, font, metadata)
- **Global Styles**: `app/globals.css`
- **UI Components Directory**: `components/ui/` (holds `button.tsx` and future shadcn primitives)
- **Config Files**: `package.json`, `components.json`, `tailwind.config.ts` (or modern Tailwind v4 equivalent), and `next.config.ts`.

## 3. Component and Page Breakdown
The entire site will be served from `app/page.tsx` but split into semantic feature components inside a `components/sections/` and `components/layout/` directory.

### Layout Components (`components/layout/`)
- `Navbar.tsx`: Sticky navigation bar with anchor links to sections.
- `Footer.tsx`: Social links, privacy/TOS links, and optional newsletter stub.

### Section Components (`components/sections/`)
- `HeroSection.tsx`: Background image/video banner, studio name, tagline, and CTA button.
- `AboutArtistsSection.tsx`: Studio philosophy and a grid of artist profiles.
- `PortfolioGallerySection.tsx`: Interactive image gallery. Includes filter buttons (e.g., "All", "Realism", "Traditional") and a Lightbox modal wrapper.
- `ServicesPricingSection.tsx`: List of services and base pricing.
- `FAQSection.tsx`: Accordion list of FAQs and aftercare instructions.
- `ContactBookingSection.tsx`: Contact form (Name, Email, Phone, Artist, Description) and studio location info (embedded map iframe, address, hours).

### UI Primitives (`components/ui/` via shadcn)
- `Button`
- `Dialog` (for the Lightbox modal)
- `Accordion` (for FAQs)
- `Input`, `Textarea`, `Label`, `Form` (for the contact/booking form)

## 4. Data Model and State Boundaries
Since this is a landing page with no backend database, data will be modeled as static typed constants in a `lib/data.ts` or `constants/` file.

### Static Data Models
- **Artists**: Array of objects `{ id, name, bio, style, imageUrl }`
- **Portfolio**: Array of objects `{ id, imageUrl, category, altText }`
- **Services**: Array of objects `{ title, description, startingPrice }`
- **FAQs**: Array of objects `{ question, answer }`

### State Boundaries (Client Components)
- `PortfolioGallerySection`: Needs client state for the `activeFilter` (string) and `lightboxImage` (object/null for modal state).
- `ContactBookingSection`: Needs client state for form handling (using `react-hook-form` with `zod` validation) and submission status (idle, loading, success, error).
- `HeroSection` / `Layout`: Minimal client state if mobile menu toggle is needed.
- Animations: Handled via `framer-motion` hooks (`useInView`, `motion.div`) locally within section components.

## 5. API and Integration Surface
There is no dedicated backend API required for this version.
- **Contact Form**: The form will simulate a submission or use an external service placeholder (e.g., mailto or a mock API route if necessary for AC5 validation). For this iteration, we will implement a mock client-side delay and success message to satisfy AC5. If actual email sending is later desired, an API route (`app/api/contact/route.ts`) would be added using Resend/SendGrid.
- **Reference Image Upload**: The form will include a file input visually, but actual file processing will be bypassed in the simulated submission.

## 6. Ordered Implementation Strategy
1. **Dependencies & Primitives**:
   - Install `framer-motion`, `react-hook-form`, `@hookform/resolvers`, `zod`.
   - Add shadcn/ui components: `accordion`, `dialog`, `input`, `textarea`, `label`, `form`.
2. **Data Mocking**:
   - Create `lib/data.ts` to hold placeholder data for artists, portfolio images, services, and FAQs.
3. **Core Layout Setup**:
   - Implement `Navbar.tsx` and `Footer.tsx`.
   - Update `app/layout.tsx` to include them.
4. **Section Implementation (Static)**:
   - Build `HeroSection.tsx` with a dark, edgy visual theme.
   - Build `AboutArtistsSection.tsx` and `ServicesPricingSection.tsx`.
5. **Interactive Section Implementation**:
   - Build `FAQSection.tsx` using the Accordion component.
   - Build `PortfolioGallerySection.tsx` with filtering logic and the Dialog component for the lightbox.
   - Build `ContactBookingSection.tsx` with `react-hook-form` validation and success state handling.
6. **Polishing & Animations**:
   - Add Framer Motion entry animations to sections (e.g., fade-in, slide-up on scroll).
   - Ensure all images are optimized (using `next/image`).
7. **Final Assembly**:
   - Compose all sections sequentially in `app/page.tsx`.

## 7. Testing and Validation Strategy
- **Visual & Responsive Verification**: Manually verify layout on mobile (320px), tablet (768px), and desktop (1024px+) viewports. Check that the sticky header and hero CTA function correctly (AC1).
- **Interactive Testing**:
   - Click portfolio filters to verify the image grid updates.
   - Click an image to ensure the lightbox modal opens and displays the correct image (AC3).
   - Toggle FAQ accordions to ensure they expand/collapse smoothly (AC4).
   - Submit the contact form empty to trigger Zod validation errors, then fill it correctly to see the simulated success message (AC5).
- **Performance & Accessibility**: Run Lighthouse in Chrome DevTools on a production build (`next build && next start`) to verify scores are 90+ for Performance, Accessibility, and Best Practices. Ensure semantic tags (e.g., `<section>`, `<nav>`) and ARIA labels are used (AC6).
