# Technical Design: Tattoo Studio Landing Page

## 1. Architecture Overview
This application is a modern, responsive Single Page Application (SPA) built using the Next.js App Router (React 19). It serves as an interactive landing page for a tattoo studio, employing a mobile-first approach and styled with a dark, edgy aesthetic suitable for the industry.

- **Framework:** Next.js (App Router) with React Server Components as the default, opting into Client Components (`"use client"`) only for interactive UI sections (e.g., portfolio filtering, contact form validation, FAQ accordion).
- **Styling:** Tailwind CSS integrated via `@tailwindcss/postcss`. Custom dark theme variables will be applied to establish the studio's brand.
- **Components:** Built on top of Radix primitives and generic UI patterns (via Shadcn/ui or Base UI), ensuring an accessible foundation.
- **Animations:** Framer Motion will be used for smooth section transitions, scroll-reveal effects, and portfolio image filtering animations.
- **Optimization:** Native `next/image` components will handle optimized delivery of high-quality portfolio and artist profile assets.

## 2. Repository Context and Relevant Existing Files
- **Monorepo Root:** `/repos/behavio1__agent`
- **Project Path:** `/repos/behavio1__agent/projects/tattoo-studio-landing-page-2026-03-09-19-56`

### Key Files to Modify:
- `app/layout.tsx`: Update to inject global fonts (e.g., an edgy serif or modern sans-serif), metadata, and apply the dark theme globally alongside the `Header` and `Footer`.
- `app/globals.css`: Add custom Tailwind utility classes, typography scale, and dark-mode specific CSS variables.
- `app/page.tsx`: The primary entry point that will assemble all the individual page sections in top-down order.
- `components/ui/*`: Add missing base UI elements (Input, Textarea, Select, Accordion) alongside the existing `button.tsx`.

## 3. Component and Page Breakdown
The single-page structure will be segmented into distinct logical sections, housed in a new `components/sections/` directory.

### Structural Components
- `Header.tsx`: A sticky top navigation bar with anchor links mapping to section IDs (e.g., `#artists`, `#portfolio`). Includes a mobile hamburger menu.
- `Footer.tsx`: Contains quick navigation links, social media icons (via Lucide React), and copyright information.

### Page Sections (`components/sections/`)
1. `HeroSection.tsx`: Displays a full-width background image/video overlay, the studio name, tagline, and a prominent "Book a Consultation" CTA button linking to `#contact`.
2. `AboutSection.tsx`: A standard two-column or stacked layout detailing the studio's history, culture, and strict hygiene standards.
3. `ArtistsSection.tsx`: Renders a grid mapping over the resident artists. Uses a sub-component `ArtistCard.tsx` displaying the photo, name, bio, style, and Instagram link.
4. `PortfolioSection.tsx`: A visually engaging masonry or standard grid for completed tattoos. Includes a row of filter buttons ("All", "Linework", "Color", "Black & Grey") that interactively update the visible images.
5. `FAQSection.tsx`: An accordion-style list covering deposit policies, age requirements, and aftercare instructions.
6. `ContactSection.tsx`: A split layout featuring:
   - **Info Side:** Address, embedded map (or styled placeholder), and operating hours.
   - **Form Side:** A booking inquiry form capturing Name, Email, Phone, Description, Preferred Artist (dropdown), and Preferred Date.

## 4. Data Model and State Boundaries
Given the static nature of the content, no external database is required. Data will be modeled as constants within a `lib/data.ts` file.

### Mock Data Schemas:
- `Artist`: `{ id: string, name: string, image: string, bio: string, style: string, instagramUrl: string }`
- `PortfolioItem`: `{ id: string, imageUrl: string, altText: string, styleCategory: 'Linework' | 'Color' | 'Black & Grey' }`
- `FAQ`: `{ id: string, question: string, answer: string }`

### Client State Boundaries:
- **`Header.tsx`**: Local boolean state for toggling the mobile navigation menu.
- **`PortfolioSection.tsx`**: Local string state (`activeFilter`) determining which items from the `PortfolioItem` array to render. Framer Motion handles the layout shifts when items are filtered.
- **`ContactSection.tsx`**: Local form state for tracking input values (Name, Email, Phone, Description, Artist, Date) and handling basic frontend validation before showing a success toast/alert.
- **`FAQSection.tsx`**: Managed by the generic Accordion component's internal state to handle panel expansion/collapse.

## 5. API and Integration Surface
- **Backend:** None required. The landing page operates as a static site.
- **Form Submission:** The contact/booking form is a UI-level implementation. Upon successful validation, it will simulate a submission delay, clear the fields, and display a localized success message (e.g., "Your inquiry has been sent!"). It will not trigger a real HTTP POST request in this version.

## 6. Ordered Implementation Strategy
1. **Foundation & Configuration:**
   - Define dark theme color variables in `globals.css`.
   - Setup custom fonts in `app/layout.tsx`.
   - Scaffold the folder structure (`components/sections`, `components/ui`, `lib`).
2. **Data & Base UI:**
   - Create `lib/data.ts` with placeholder content for artists, portfolio, and FAQs.
   - Implement base UI components required for the form and accordion (Input, Textarea, Select, Accordion).
3. **Core Layout Elements:**
   - Build and wire up `Header.tsx` (with smooth scroll anchors) and `Footer.tsx`.
   - Include them in `app/layout.tsx`.
4. **Static Sections Implementation:**
   - Develop `HeroSection.tsx` and `AboutSection.tsx`.
   - Develop `ArtistsSection.tsx` and the `ArtistCard.tsx` sub-component.
5. **Interactive Sections Implementation:**
   - Develop `FAQSection.tsx` utilizing the Accordion component.
   - Develop `PortfolioSection.tsx` with its filtering logic and Framer Motion integration.
   - Develop `ContactSection.tsx` including the localized form validation logic and map placeholder.
6. **Assembly & Polish:**
   - Assemble all sections within `app/page.tsx` ensuring correct ID attributes for navigation anchoring.
   - Apply Framer Motion scroll-reveal variants across sections to enhance the premium feel.
   - Optimize all images using `next/image`.

## 7. Testing and Validation Strategy
- **Visual & Responsive Testing:** Validate the dark theme rendering across mobile (primary focus), tablet, and desktop breakpoints. Ensure the sticky header functions without overlapping content.
- **Interactive Verification:**
   - Confirm portfolio filtering correctly updates the image grid.
   - Confirm form validation prevents submission with empty required fields.
   - Confirm the FAQ accordion expands and collapses predictably.
- **Performance & Accessibility:**
   - Run a Lighthouse audit to confirm high scores.
   - Check that all images (especially in the portfolio and artists sections) have descriptive `alt` tags.
   - Ensure the site is navigable via keyboard and contrast ratios meet standard accessibility guidelines despite the dark theme.