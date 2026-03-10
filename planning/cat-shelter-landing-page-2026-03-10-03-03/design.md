# Technical Design: Cat Shelter Landing Page (Schronisko dla Kotów)

## 1. Architecture Overview
This project will be built as a modern Single Page Application (SPA) landing page utilizing Next.js 16 with the App Router architecture. React 19 will be used for UI components, styled with Tailwind CSS v4 and standard shadcn/ui components.
The application will be predominantly statically generated. Since an external CMS or database is out of scope for the MVP, all data (e.g., available cats, shelter stats, donation information) will be stored in static TypeScript files (`lib/data.ts`).
The layout will use smooth scrolling to navigate between logical sections. Form submissions will be simulated with a client-side success message or a `mailto:` link as no backend API is required.

## 2. Repository Context and Relevant Existing Files
- **Project Root**: `/repos/behavio1__agent/projects/cat-shelter-landing-page-2026-03-10-03-03`
- **Main Entry Point**: `app/page.tsx` will assemble all the individual sections into a cohesive landing page.
- **Global Layout**: `app/layout.tsx` will be configured with `<html lang="pl">` and appropriate metadata for SEO.
- **Styling**: `app/globals.css` configured for Tailwind.
- **UI Components**: Shadcn components will live in `components/ui/` (e.g., `button.tsx` is already present).

## 3. Component and Page Breakdown
The user interface will be split into logical feature sections housed under `components/sections/`, which will be composed within `app/page.tsx`.
- **`Header.tsx`**: A sticky navigation bar containing links (`<a href="#section-id">`) for smooth scrolling to sections: Koty do adopcji, Wesprzyj nas, Wolontariat, Kontakt. Includes mobile menu toggle.
- **`Hero.tsx`**: High-quality hero image/banner, welcoming Polish headline, and primary CTAs (`Adoptuj`, `Wesprzyj nas`).
- **`About.tsx`**: Brief history, mission statement, and key statistics (e.g., rescued/adopted counts).
- **`AdoptionGallery.tsx`**: A responsive grid (CSS grid) of `CatCard` components.
- **`CatCard.tsx`**: Displays individual cat data: image (`next/image` for optimization with alt text), name, age, and short description.
- **`Support.tsx`**: Details on financial support (bank account numbers) and material donations (lists of needed items).
- **`Volunteer.tsx`**: Instructions on becoming a volunteer, accompanied by a simple contact/signup form (UI only, simulating submission).
- **`Contact.tsx`**: Address, opening hours, phone number, email, and a basic contact form or clear instructions.
- **`Footer.tsx`**: Copyright info, social media links, and a link to the privacy policy.

## 4. Data Model and State Boundaries
The data layer will be static TypeScript arrays and objects living in `lib/data.ts` (or individual files under `lib/data/`).

**Data Structures:**
- `Cat`: `{ id: string, name: string, age: string, description: string, imageUrl: string, imageAlt: string }`
- `ShelterStats`: `{ rescuedCount: number, adoptedCount: number, volunteersCount: number }`
- `DonationInfo`: `{ bankAccount: string, swiftCode: string, neededItems: string[] }`
- `ContactInfo`: `{ address: string, phone: string, email: string, workingHours: string }`

**State Boundaries:**
- **Server Components (Default):** The main layout, `page.tsx`, and most sections (Hero, About, AdoptionGallery, Support, Footer) will be static Server Components.
- **Client Components (`"use client"`):**
  - **Mobile Navigation:** `Header.tsx` will need local state for the mobile hamburger menu toggle.
  - **Forms:** `Volunteer.tsx` and `Contact.tsx` forms will handle internal client state for inputs (e.g., `useState` for controlled inputs or simple generic native form validation) and a success state display.

## 5. API and Integration Surface
As specified in the constraints, there is no external API, CMS, or database for this MVP.
- Form submissions in the Volunteer and Contact sections will rely on simple client-side logic to show a "Dziękujemy" (Thank you) message to acknowledge the interaction.
- Bank transfers will be handled via static text displaying the IBAN/Bank Account details for manual entry by the user.
- Images will be sourced from public domain/stock photo sites (e.g., Unsplash placeholders via standard URL).

## 6. Ordered Implementation Strategy
1. **Data Layer Setup**: Create `lib/data.ts` and populate it with Polish mock data for cats, stats, and shelter info.
2. **UI Component Scaffold**: Add necessary shadcn/ui components (`Card`, `Input`, `Textarea`, `Label`) using `npx shadcn@latest add ...` or manual creation.
3. **Core Shell & Navigation**: Update `app/layout.tsx` for SEO and Polish language. Implement `Header.tsx` (with mobile nav) and `Footer.tsx`.
4. **Section Implementation (Top-Down)**:
   - `Hero.tsx` (Hero layout and CTAs)
   - `About.tsx` (Mission and stats layout)
   - `AdoptionGallery.tsx` & `CatCard.tsx` (The grid displaying available cats)
   - `Support.tsx` (Financial/material donation info)
   - `Volunteer.tsx` (Volunteer info and form)
   - `Contact.tsx` (Contact info and form)
5. **Page Assembly**: Compose all sections within `app/page.tsx`, ensuring smooth scrolling links via `id` attributes.
6. **Refinement & Polish**: Ensure mobile-first responsiveness across all breakpoints. Validate WCAG 2.1 AA compliance (alt texts for all cats, contrast ratios).

## 7. Testing and Validation Strategy
- **Static Analysis & Build**: Run `next build` and `npm run lint` to catch TypeScript or structural errors.
- **Lighthouse Audits**: Run local Lighthouse checks to ensure high scores (>90) for Performance, Accessibility, Best Practices, and SEO.
- **Manual Responsive Testing**: Resize the browser and test on simulated mobile/tablet views to verify the grid behaves correctly and the mobile menu functions.
- **Accessibility Check**: Navigate the site using only the keyboard (Tab, Enter) and visually verify all text contrasts and presence of alt attributes on cat images.
- **Content Verification**: Manually verify all hardcoded text and form placeholders are correctly translated into Polish.
