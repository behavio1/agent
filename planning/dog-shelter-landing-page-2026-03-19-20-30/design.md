# Technical Design: Landing page dla schroniska dla psów

## 1. Architecture Overview
The application is built using the **Next.js 16 App Router** with React Server Components (RSC) to maximize performance and SEO for the landing page. Client Components will be utilized strictly for interactive elements like the contact form or image carousels.

- **Frontend framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS v4, initialized with Lucide React for iconography.
- **UI Components:** `shadcn/ui` alongside `@base-ui/react` primitives.
- **Database:** **Neon Postgres** using `@neondatabase/serverless` driver.
- **ORM:** **Drizzle ORM** configured with `dog_shelter_*` table prefixes.
- **Deployment:** Primarily targeted for **Vercel** (alternatively, standard Node.js server deployments utilizing `NODE_DEPLOY_*` environment variables for bare-metal/VM setups).

## 2. Repository Context and Relevant Existing Files
The repository contains the initialized foundation under `/repos/behavio1__agent/projects/dog-shelter-landing-page-2026-03-19-20-30`.

Key architectural files:
- `app/layout.tsx`: Root layout that will house the global Navigation header and Footer.
- `app/page.tsx`: Main server component serving as the single-page application orchestrator.
- `db/schema.ts`: Drizzle schema defining the database entities (`dogs` and `inquiries`).
- `db/index.ts`: The database connection instance for Drizzle using `DATABASE_URI`.
- `drizzle.config.ts`: Configuration file enforcing the `'dog_shelter_*'` prefix.
- `components/ui/`: Directory containing generated UI components (currently `button.tsx`, will be expanded with inputs, forms, and cards).

## 3. Component and Page Breakdown
The single-page application is broken down into distinct semantic sections, managed within `app/page.tsx`.

### Layout Level
- `components/layout/Header.tsx`: Sticky navigation with smooth scrolling anchor links (O nas, Nasi podopieczni, Adopcja, Wsparcie, Kontakt).
- `components/layout/Footer.tsx`: Shelter contact details, NIP/KRS for tax donations, social links.

### Page Sections (Server Components by Default)
- `components/sections/HeroSection.tsx`: Above-the-fold banner with primary CTA ("Adoptuj" or "Wspomóż").
- `components/sections/AboutSection.tsx`: Mission statement and shelter overview.
- `components/sections/DogsShowcase.tsx`: Data-driven section fetching `is_adopted = false` dogs directly from the DB.
- `components/sections/AdoptionProcess.tsx`: Step-by-step guide explaining the adoption procedure.
- `components/sections/SupportSection.tsx`: Information on donations, bank transfers, 1% tax, and volunteering.

### Interactive Elements (Client Components)
- `components/ui/ContactForm.tsx`: Uses `react-hook-form` and `@hookform/resolvers/zod` for client-side validation. On submit, it calls a Server Action to persist the inquiry.
- `components/ui/DogCard.tsx`: Reusable component displaying dog details. Could include an interactive modal for more information.

## 4. Data Model and State Boundaries
Database interaction relies exclusively on Drizzle ORM. As requested, all tables are prefixed with `dog_shelter_` to share a Neon Postgres instance safely.

**`dog_shelter_dogs` table:**
- `id` (UUID, Primary Key)
- `name` (Text, Required)
- `breed` (Text, Optional)
- `age` (Integer, Optional)
- `description` (Text, Optional)
- `image_url` (Text, Optional)
- `is_adopted` (Boolean, Default `false`)
- `created_at` / `updated_at` (Timestamp)

**`dog_shelter_inquiries` table:**
- `id` (UUID, Primary Key)
- `dog_id` (UUID, Foreign Key to `dog_shelter_dogs.id`, Optional)
- `name` (Text, Required)
- `email` (Text, Required)
- `phone` (Text, Optional)
- `message` (Text, Required)
- `status` (Text, Default `'pending'`)
- `created_at` (Timestamp)

**State Management Boundaries:**
- **Server State**: Next.js App Router seamlessly handles fetching and caching non-adopted dogs via Server Components. No global state (like Redux) is necessary.
- **Client State**: Confined to local component states (e.g., form inputs, dropdowns, modal toggles).

## 5. API and Integration Surface
Instead of building traditional REST endpoints in `app/api/`, the architecture utilizes **Next.js Server Actions**:

- `app/actions/inquiry.ts`: Contains the `submitInquiry(data: InquirySchema)` function.
  - Validates incoming data using Zod on the server.
  - Inserts the sanitized data into `dog_shelter_inquiries`.
  - Returns a success or error payload to the client.

**Environment Configuration:**
- `DATABASE_URI`: Connection string for Neon Postgres.
- Drizzle handles automated DB migrations via `npm run db:generate` and `npm run db:push` in local dev/CI.

## 6. Ordered Implementation Strategy
1. **Schema Validation & Seed Script:** Add a `seed.ts` script to populate dummy dogs for local development. Ensure migrations successfully apply to the database.
2. **Layout Foundation:** Implement `Header.tsx` and `Footer.tsx` with responsive Tailwind styling and correct Polish copy.
3. **Static Sections Construction:** Build `HeroSection`, `AboutSection`, `AdoptionProcess`, and `SupportSection`. These are text/image heavy and establish the visual language.
4. **Data Fetching Implementation:** Develop `DogsShowcase.tsx` to query `db.select().from(dogs).where(eq(dogs.isAdopted, false))` and display results using `DogCard`.
5. **Form Integration:** Implement `ContactForm.tsx` and the corresponding Server Action. Provide error states and a success toast/message upon completion.
6. **Refinement & Accessibility:** Ensure semantic HTML, proper contrast, logical tab order, and mobile responsiveness.

## 7. Testing and Validation Strategy
- **Visual Regression:** Manually verify layout breaks across mobile, tablet, and desktop viewports. Ensure sticky header functions properly.
- **Data Integrity Validation:**
  - Verify that dogs marked as `is_adopted = true` in the database do not appear in the showcase.
  - Ensure missing image URLs degrade gracefully (fallback placeholder).
- **Form E2E Testing:**
  - Submit the contact form missing required fields; verify client-side validation errors trigger.
  - Submit a valid form; verify the Server Action returns success and a new row appears in `dog_shelter_inquiries` with the `'pending'` status.