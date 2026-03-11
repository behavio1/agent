# Requirements: Apartment Management Service - Manga Style

## 1. Request Summary
The user requested an "Apartment Management Service - Manga Style". The goal is to build a web-based apartment management system that utilizes a distinctive Manga/Comic aesthetic (e.g., comic book panels, halftone patterns, stylized typography, speedlines, monochrome palettes with vibrant accents). The platform will serve both property managers/landlords and tenants, providing core functionality for property listing, tenant management, rent tracking, and maintenance requests, all wrapped in a highly engaging, thematic UI.

## 2. Functional Requirements

### 2.1. Landing Page (Public)
* **Hero Section:** Manga-style cover page featuring dynamic typography and illustrations.
* **Available Properties:** A grid (styled as manga panels) displaying available apartments.
* **Call to Action (CTA):** Application form for prospective tenants.

### 2.2. Tenant Portal
* **Dashboard:** Overview of current lease status, upcoming rent payments, and open maintenance requests.
* **Rent Payments:** Ability to view payment history and pay rent (mock integration).
* **Maintenance Requests:** Submission form for maintenance issues, allowing text description and image uploads (styled like speech bubbles or action panels).
* **Profile Management:** Update contact information.

### 2.3. Admin/Landlord Portal
* **Dashboard:** System overview, pending applications, overdue rent, and critical maintenance issues.
* **Property Management:** Add, edit, and remove apartment units (price, size, status, photos).
* **Tenant Management:** Approve applications, assign tenants to units, view tenant details.
* **Financial Tracking:** Log payments, track outstanding balances.
* **Maintenance Management:** View, assign, and update the status of maintenance requests.

## 3. Non-Functional Requirements
* **Styling & Aesthetics:** Must heavily leverage a "Manga Style" UI. This includes:
  * Halftone backgrounds and textures.
  * Thick black borders for layout elements (panels).
  * Comic-style fonts for headings and standard sans-serif for readability in body text.
  * Use of classic manga visual tropes (e.g., action lines for loading states, speech bubbles for tooltips/notifications).
* **Responsiveness:** Must function seamlessly on mobile and desktop. Panels should reflow vertically on small screens.
* **Tech Stack:** 
  * Frontend: Next.js/React, Tailwind CSS (with custom manga-style classes).
  * Backend: Next.js API Routes or Server Actions.
  * Database: Vercel Postgres or similar relational database (Prisma ORM).
* **Accessibility:** Ensure high contrast for readability despite the stylized theme.

## 4. Out of Scope
* Native mobile applications (iOS/Android).
* Real bank account or credit card processing (will use mocked payments or Stripe test mode).
* Real-time chat between landlord and tenant.
* Multi-landlord or SaaS platform capabilities (built for a single property management entity).

## 5. Assumptions
* The platform is intended for a single property management company or landlord.
* Authentication will be handled via standard email/password or simple OAuth (e.g., NextAuth/Auth.js).
* English will be the primary language, even though the aesthetic is Japanese Manga.

## 6. Acceptance Criteria
* **AC1:** A user can navigate to the landing page and see a clearly identifiable Manga-styled interface.
* **AC2:** An admin can log in, add a new apartment unit, and set it to "available".
* **AC3:** A prospective tenant can view available units on the public page.
* **AC4:** A tenant can log in, view their rent balance, and submit a dummy payment.
* **AC5:** A tenant can submit a maintenance request, which immediately appears in the Admin Portal.
* **AC6:** The application is fully responsive, with the manga panels scaling appropriately on mobile devices.