# Technical Design: Massage Salon Landing Page

## 1. Architecture overview
The application is a single-page Next.js application built with React, Tailwind CSS, and TypeScript. The UI is currently a functional monolith inside `src/app/page.tsx` scaffolded during repository setup. The target architecture refines this by extracting functional sections into distinct, reusable React components and isolating mock data from the UI to improve maintainability and adherence to a clear data model.

The architecture is entirely client-side rendered (or statically generated, as no dynamic server features are currently required), ensuring high performance (Lighthouse scores) and straightforward Vercel deployment.

## 2. Repository context and relevant existing files
- **Root Directory**: `projects/massage-salon-landing-page`
- **Current Entry Point**: `projects/massage-salon-landing-page/src/app/page.tsx` (a ~400-line monolith containing all sections).
- **Styling**: `projects/massage-salon-landing-page/src/app/globals.css` (Tailwind imports) and `tailwind.config.ts`.
- **Target Component Directory**: `projects/massage-salon-landing-page/src/components/` (to be created).
- **Target Data Directory**: `projects/massage-salon-landing-page/src/data/` (to be created).

## 3. Component and page breakdown
To satisfy the requirements and clean up the monolith, `src/app/page.tsx` will be refactored into the following component structure:
- `src/app/page.tsx`: The main page composing the sections below.
- `src/components/layout/Navbar.tsx`: Sticky navigation menu with mobile drawer.
- `src/components/layout/Footer.tsx`: Footer with social links and business info.
- `src/components/sections/Hero.tsx`: High-impact top section with "Book Now" CTA.
- `src/components/sections/Services.tsx`: Grid displaying available massage therapies.
- `src/components/sections/Pricing.tsx`: Transparent price list.
- `src/components/sections/About.tsx`: Salon philosophy and a sub-section for **Team/Qualifications**, showcasing 2-3 therapist profiles.
- `src/components/sections/Testimonials.tsx`: Customer reviews.
- `src/components/sections/Contact.tsx`: Location, business hours, and functional-looking contact form with simple success state.

## 4. Data model and state boundaries
Data will be stored as static TypeScript objects in `src/data/mockData.ts` to simulate a CMS or database.

**Data Models**:
- `Service`: `{ id: string, title: string, description: string, duration: string, icon: string }`
- `PricingItem`: `{ id: string, name: string, duration: string, price: string }`
- `TeamMember`: `{ id: string, name: string, role: string, description: string, image: string }`
- `Testimonial`: `{ id: string, author: string, content: string, rating: number }`

**State Boundaries**:
- **Navbar**: Local state for mobile menu toggle (`isMenuOpen`).
- **Contact Form**: Local state for form submission simulation (`isSubmitting`, `isSuccess`).

## 5. API and integration surface
- No external backend or database is required.
- The "Book Now" CTA and map links will trigger external default behaviors (e.g., `tel:`, `mailto:`, or `https://maps.google.com`).
- The Contact Form will use an `e.preventDefault()` handler to simulate submission locally without requiring a live API.

## 6. Ordered implementation strategy
1. **Data Extraction**: Create `src/data/mockData.ts` and define typed arrays for Services, Pricing, Team, and Testimonials.
2. **Component Scaffold**: Create the `src/components/layout` and `src/components/sections` directories.
3. **Refactoring - Navigation & Footer**: Extract the Navbar and Footer from `page.tsx` into their respective files.
4. **Refactoring - Sections**: Extract Hero, Services, Pricing, and Testimonials into separate components, hooking them up to the mock data.
5. **Feature Addition - Team**: Extend the About section component to include team member cards, fulfilling the requirement for therapist qualifications.
6. **Feature Addition - Contact Form State**: Extract the Contact section and add a `useState` hook to show a "Thank you" message upon form submission.
7. **Final Integration**: Update `src/app/page.tsx` to import and render only the section components sequentially.

## 7. Testing and validation strategy
- **Visual Validation**: Run `npm run dev` and manually verify that all sections render correctly and match the Polish UI requirements.
- **Responsive Testing**: Verify the mobile navigation toggle works and all section grids gracefully degrade to single columns on small screens.
- **Interaction Testing**: Submit the contact form to ensure the mock success state appears. Click the "Book Now" CTA to verify it triggers the `tel:` link.
- **Static Analysis**: Run `npm run lint` and `npm run build` to ensure no TypeScript or ESLint errors exist before merging to `main`.
