# Technical Design: Tattoo Studio Landing Page

## 1. Architecture Overview
The application will be built as a modern, responsive single-page landing page utilizing **Next.js 16** (App Router) and **React 19**. Given the static nature of most of the content (services, artists, studio info), we will leverage static rendering for optimal performance, aligning with the 90+ Lighthouse score requirement. 

Styling will be handled via **Tailwind CSS v4**, and we will use **shadcn/ui** for accessible, customizable UI components. The aesthetic will feature a high-contrast, edgy theme (dark mode by default) suitable for a premium tattoo studio. State management will be minimal, primarily handling the contact form using React state (and potentially `react-hook-form` + `zod` for robust validation).

## 2. Repository Context & Existing Files
The application resides in `projects/tattoo-studio-landing-page-2026-03-09-21-57/` within the monorepo.
Relevant files and directories:
- `app/layout.tsx`: Root layout, will be updated to include global metadata (SEO), font settings, the Navbar, and Footer.
- `app/page.tsx`: The main landing page, which will assemble all the individual section components.
- `app/globals.css`: Global styles, will be modified to define the dark/premium tattoo studio color palette.
- `components/`: Directory for React components. Will be subdivided into `components/ui/` (shadcn primitives) and `components/sections/` (landing page sections).
- `lib/`: Utility functions and static data definitions.

## 3. Component and Page Breakdown

### Shared Layout Components
- `Navbar`: Sticky top navigation with smooth-scroll anchor links (e.g., `#artists`, `#services`, `#contact`) and a CTA button.
- `Footer`: Bottom section containing quick links, social media icons, operating hours, and copyright info.

### Section Components (in `components/sections/`)
- `HeroSection`: Prominent high-quality background image/video (optimized WebP), studio headline, and primary CTA.
- `ArtistsSection`: Grid of resident artists with bio blurbs.
- `PortfolioSection`: Gallery showing recent tattoo work. Can use a modal/dialog to view larger images.
- `ServicesSection`: Cards or a list detailing services (custom tattoos, flash, piercings) and starting prices.
- `StudioInfoSection`: Physical address, embedded map or link, and standard policies/FAQs (using shadcn Accordion).
- `TestimonialsSection`: Customer reviews presented in a grid or carousel.
- `ContactSection`: The booking inquiry form.

### Required shadcn/ui Components
- `button`, `input`, `textarea`, `card`, `dialog` (for portfolio images), `accordion` (for FAQs).

## 4. Data Model and State Boundaries
There is no CMS required. Data will be statically typed and stored in `lib/data.ts`.
- **Static Data Objects:** `artists`, `portfolioImages`, `services`, `faqs`, `testimonials`, `studioInfo`.
- **State Boundaries:**
  - `ContactForm`: Local component state for form inputs (Name, Email, Phone, Preferred Artist, Description, Dates) and submission status (idle, loading, success, error).
  - `PortfolioGallery`: Local state to manage the currently selected image for the modal view.

## 5. API and Integration Surface
- **Booking Form Submission:** Instead of a complex backend, we will implement a Next.js Server Action (`app/actions/contact.ts`). This action will receive the form payload, perform server-side validation, and log the inquiry to the server console (simulating a webhook/email integration), returning a success response to the client.

## 6. Ordered Implementation Strategy
1. **Theming & Setup:** Update `app/globals.css` with a dark, high-contrast theme. Update `app/layout.tsx` for SEO meta tags and appropriate fonts (e.g., a modern sans-serif or edgy display font).
2. **Static Data Layer:** Create `lib/data.ts` and populate it with placeholder content for artists, services, FAQs, etc.
3. **UI Primitives:** Install necessary shadcn/ui components (`button`, `card`, `input`, `textarea`, `accordion`).
4. **Layout Components:** Implement the `Navbar` (with smooth scrolling logic) and `Footer`.
5. **Content Sections:** Implement `HeroSection`, `ServicesSection`, `StudioInfoSection` (with Accordion for FAQ), and `TestimonialsSection`.
6. **Media Sections:** Implement `ArtistsSection` and `PortfolioSection` with optimized Next.js `<Image>` components and lazy loading.
7. **Contact Form & Action:** Build the `ContactSection` form, implement client-side validation, and wire it up to a Server Action for submission handling.
8. **Assembly & Polish:** Compose all sections in `app/page.tsx`. Perform responsive design checks on mobile, tablet, and desktop views.

## 7. Testing and Validation Strategy
- **Functional Testing:** Manually verify that all navigation anchor links correctly scroll to their targets. Ensure the contact form enforces required fields and successfully displays the success message upon submission. Ensure the portfolio image modals open correctly.
- **Responsive Testing:** Verify the layout adapts seamlessly to mobile screens (e.g., hamburger menu for nav, stacked grids for artists/services).
- **Performance & SEO (Lighthouse):** Run Lighthouse audits locally on the built output (`next build && next start`). Target >90 for Performance (verify image optimization) and >90 for SEO/Accessibility (verify alt tags, ARIA labels, semantic HTML, and contrast ratios).
