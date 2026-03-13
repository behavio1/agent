# Technical Design: Zerwane Struny Landing Page

## 1. Architecture Overview
The application is a modern, single-page landing website built with the **Next.js App Router**. To support high performance and SEO, sections containing static content (Hero, About, Gallery, Media) and database-driven content (Gigs) will be rendered on the server. Client-side interactivity is limited to the Contact form submission and smooth scrolling navigation. 

The aesthetic requires a dark, heavy metal-inspired design which will be implemented using **Tailwind CSS**. A deterministic table prefix will be applied (e.g. `zerwane_`) for all tables.
The application will connect to **Neon Postgres** using **Drizzle ORM** for fetching upcoming gigs and saving contact inquiries. Deployment is targeted for **Vercel**.

## 2. Repository Context and Relevant Existing Files
The project scaffold is located at `projects/strona-internetowa-zespo-u-zerwane-struny-2026-03-13-11-13`.
Relevant files:
- `db/schema/gigs.ts`: Stores upcoming gigs details.
- `db/schema/messages.ts`: Stores contact form submissions.
- `db/utils.ts`: Includes the `createTable` utility mapping `DATABASE_TABLE_PREFIX`.
- `app/layout.tsx`: Root layout, to be updated with dark theme global styles and heavy metal specific typography.
- `app/page.tsx`: The main single-page layout that will assemble all the sections.
- `components/`: Will hold UI primitives (via shadcn) and specific section components.
- `tailwind.config.ts` (or standard `postcss.config.mjs` / `globals.css` with Tailwind V4): Will define the aggressive, high-contrast dark theme colors.

## 3. Component and Page Breakdown
As a single-page app, `app/page.tsx` will stack the following components sequentially. 
Section components will be created in `components/sections/` and layout components in `components/layout/`:

- **Layout Components**:
  - `Header`: Sticky top navigation bar. Links point to section IDs (`#about`, `#gigs`, etc.) using smooth scrolling.
  - `Footer`: Copyright info and social media links.
- **Section Components**:
  - `Hero`: High-impact landing view. Contains the band name, aggressive typography, tagline, and an atmospheric background image/video placeholder. ID: `#hero`.
  - `About`: Band history, musical style, and identity. ID: `#about`.
  - `Gallery`: Responsive CSS grid displaying live performance photos (placeholders). ID: `#gallery`.
  - `Media`: Contains iframe embeds for Spotify (music) and YouTube (videos). ID: `#media`.
  - `Gigs`: Renders upcoming concerts. Acts as a React Server Component (RSC) to directly fetch data using Drizzle. ID: `#gigs`.
  - `Contact`: A contact form (Name, Email, Message) using a React Server Action to post data. ID: `#contact`.

## 4. Data Model and State Boundaries
Database tables use Drizzle ORM mapping directly to Postgres, initialized via `db/utils.ts` to respect `DATABASE_TABLE_PREFIX`.

- **Table: `gigs`**
  - `id` (UUID, PK)
  - `venue` (varchar)
  - `location` (varchar)
  - `date` (timestamp)
  - `ticketLink` (text, nullable)
  - `createdAt` (timestamp)
- **Table: `messages`**
  - `id` (UUID, PK)
  - `name` (varchar)
  - `email` (varchar)
  - `message` (text)
  - `createdAt` (timestamp)

**State Boundaries**:
- The majority of the page is server-rendered and stateless.
- The `Contact` form component uses React `useActionState` (or standard Server Actions) to manage pending states and success/error feedback during submission.

## 5. API and Integration Surface
- **Database Access**: Direct DB connections via Drizzle from Server Components (`Gigs` section) and Server Actions (Contact form submission). No external REST/GraphQL API routes are required.
- **Third-party Embeds**: YouTube and Spotify players will be integrated via standard HTML `<iframe>` elements to keep bundle size small and avoid complex API integrations.

## 6. Ordered Implementation Strategy
1. **Database Schema Setup**: Verify Drizzle setup for `gigs` and `messages`. Prepare a quick seed file or script if needed to populate initial gigs for UI testing.
2. **Theming & Global Styles**: Configure Tailwind CSS with a dark mode base, stark white/metallic accents, and heavy typography suitable for a metal band. Update `app/globals.css`.
3. **Core UI Components**: Scaffold standard UI components (Button, Input, Textarea, Form, Card) using `shadcn/ui`.
4. **Layout Implementation**: Build the `Header` with smooth scrolling and `Footer`. Set them up inside `app/layout.tsx`.
5. **Static Sections**: Implement `Hero`, `About`, `Gallery`, and `Media` with high-quality styling and placeholders.
6. **Dynamic Sections**: 
   - Implement `Gigs` component. Fetch data from `gigs` table and display a list/grid of upcoming events.
   - Implement `Contact` component. Build the form and wire it to a Next.js Server Action that inserts records into the `messages` table.
7. **Assembly & Final Polish**: Integrate all sections into `app/page.tsx`. Test mobile responsiveness, verify heavy metal aesthetics, and ensure there are no build errors.

## 7. Testing and Validation Strategy
- **Visual & Responsive Testing**: Ensure the landing page loads correctly on mobile and desktop without horizontal overflow. Verify dark theme colors and aggressive styling match the requested heavy metal aesthetic.
- **Navigation Testing**: Click each link in the sticky header and verify it smoothly scrolls to the correct section.
- **Database Integration Testing**:
  - Insert dummy data into the `gigs` table and verify it renders correctly on the page.
  - Submit the contact form through the UI and verify a new record is created in the `messages` table.
- **Build Validation**: Run `npm run build` locally to guarantee that type checking and production optimization succeed without errors. Ensure Drizzle schema push works successfully with the prefix environment variables.
