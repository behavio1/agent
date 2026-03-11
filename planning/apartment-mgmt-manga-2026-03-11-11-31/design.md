# Technical Design: Apartment Management Service - Manga Style

## 1. Architecture Overview
The application will be built using the **Next.js App Router** (React 19) architecture, leveraging Server Components for optimized data fetching and Server Actions for form submissions and mutations.
- **Frontend:** Next.js, React 19, Tailwind CSS v4. The styling will be completely customized to reflect a Japanese manga/comic book aesthetic.
- **Backend:** Next.js Server Actions will handle the business logic (auth, property management, payments, maintenance).
- **Database:** A relational database (PostgreSQL via Vercel Postgres) managed with **Prisma ORM**.
- **File Storage:** **Vercel Blob** will be used to store and serve user-uploaded images for properties and maintenance requests.
- **Authentication:** A simplified, secure cookie-based session implementation or NextAuth (Auth.js) supporting role-based access control (`ADMIN` vs `TENANT`).

## 2. Repository Context and Relevant Existing Files
- **App Directory (`app/`)**: The core of the application logic. Currently contains the default `layout.tsx` and `page.tsx`. These will be restructured to accommodate public, tenant, and admin routes.
- **Components (`components/`)**: Will house shared UI components. This folder will be populated with heavily themed Manga components (`MangaPanel`, `SpeechBubble`, etc.).
- **Global CSS (`app/globals.css`)**: Will be expanded to include custom CSS variables for manga themes (halftone patterns, thick black borders, comic fonts).
- **Tailwind Config (`package.json` / CSS)**: Tailwind v4 in `app/globals.css` will be configured with custom fonts (e.g., 'Bangers' or a sans-serif comic font) and manga-specific utilities.

## 3. Component and Page Breakdown

### 3.1 Routing Structure
- `app/(public)/page.tsx`: Public Landing Page (Hero, properties grid styled as manga panels, CTA).
- `app/(public)/apply/page.tsx`: Application form for prospective tenants.
- `app/login/page.tsx`: Unified login page for tenants and admins.
- `app/(tenant)/tenant/layout.tsx`: Tenant portal layout (navigation, user profile snippet).
- `app/(tenant)/tenant/page.tsx`: Tenant Dashboard (lease status, next rent due, open maintenance issues).
- `app/(tenant)/tenant/rent/page.tsx`: Rent payment history and mock payment form (styled with action effects like "BAM!" or "PAID!").
- `app/(tenant)/tenant/maintenance/page.tsx`: Maintenance request submission (description + Vercel Blob image upload) and history.
- `app/(tenant)/tenant/profile/page.tsx`: Tenant Profile Management (update contact info like phone number and email).
- `app/(admin)/admin/layout.tsx`: Admin portal layout.
- `app/(admin)/admin/page.tsx`: Admin Dashboard (overview, pending apps, overdue rent).
- `app/(admin)/admin/properties/page.tsx`: Add/edit/remove properties (with Vercel Blob image upload).
- `app/(admin)/admin/tenants/page.tsx`: Review applications, approve tenants, assign units.
- `app/(admin)/admin/finance/page.tsx`: View rent payments.
- `app/(admin)/admin/maintenance/page.tsx`: View, assign (to admin/staff), and update maintenance request statuses.

### 3.2 Key UI Components
- `MangaPanel`: A container wrapper with `border-4 border-black bg-white shadow-[8px_8px_0_0_#000]`.
- `SpeechBubble`: Notification or tooltip component featuring a directional tail.
- `HalftoneBg`: A background utility class/component applying a dotted CSS pattern.
- `ActionText`: Bold, skewed typography for state changes (e.g., "SUCCESS!", "ERROR!").
- `PropertyCard`: Displays unit details using manga panel layouts.

## 4. Data Model and State Boundaries

The application will use **Prisma ORM** with the following schema:

```prisma
model User {
  id          String   @id @default(cuid())
  email       String   @unique
  password    String   // Hashed
  role        Role     @default(TENANT)
  name        String?
  phone       String?  // Contact info that tenants can update
  
  tenantProfile TenantProfile?
  payments      Payment[]
  maintenance   MaintenanceRequest[] @relation("SubmittedRequests")
  assignedMaintenance MaintenanceRequest[] @relation("AssignedRequests")
}

enum Role { ADMIN, TENANT }

model Property {
  id          String   @id @default(cuid())
  title       String
  description String?
  price       Float
  size        Int
  status      PropertyStatus @default(AVAILABLE)
  imageUrl    String?  // URL from Vercel Blob

  tenantId    String?  @unique
  tenant      TenantProfile? @relation(fields: [tenantId], references: [id])
}

enum PropertyStatus { AVAILABLE, OCCUPIED, MAINTENANCE }

model TenantProfile {
  id             String   @id @default(cuid())
  userId         String   @unique
  user           User     @relation(fields: [userId], references: [id])
  leaseStart     DateTime?
  leaseEnd       DateTime?
  balance        Float    @default(0)
  
  property       Property?
}

model Payment {
  id          String   @id @default(cuid())
  amount      Float
  date        DateTime @default(now())
  status      PaymentStatus @default(COMPLETED)
  userId      String
  user        User     @relation(fields: [userId], references: [id])
}

enum PaymentStatus { PENDING, COMPLETED, FAILED }

model MaintenanceRequest {
  id          String   @id @default(cuid())
  title       String
  description String
  imageUrl    String?  // URL from Vercel Blob
  status      MaintenanceStatus @default(OPEN)
  createdAt   DateTime @default(now())
  
  userId      String
  user        User     @relation("SubmittedRequests", fields: [userId], references: [id])

  assignedToId String?
  assignedTo   User?    @relation("AssignedRequests", fields: [assignedToId], references: [id])
}

enum MaintenanceStatus { OPEN, IN_PROGRESS, RESOLVED }

model Application {
  id          String   @id @default(cuid())
  name        String
  email       String
  phone       String?
  message     String?
  status      AppStatus @default(PENDING)
  createdAt   DateTime @default(now())
}

enum AppStatus { PENDING, APPROVED, REJECTED }
```

## 5. API and Integration Surface
Since the project relies heavily on the Next.js App Router:
- **Server Actions** will act as the primary API boundary for form submissions (e.g., `createApplication`, `submitMaintenance`, `processMockPayment`, `updatePropertyStatus`, `updateTenantProfile`).
- **Server Components** will directly query the Prisma database to load initial data for dashboards and lists, negating the need for separate REST/GraphQL APIs.
- **Vercel Blob** will be integrated for image uploads (Property images, Maintenance issue images).
- No external third-party integrations for payments are strictly required (Stripe is simulated via mock).

## 6. Ordered Implementation Strategy
1. **Infrastructure & Schema Initialization:**
   - Install Prisma, setup database (Vercel Postgres/SQLite).
   - Configure Vercel Blob for image uploads.
   - Generate schema and seed the database with an Admin user and test properties.
2. **Theming & Global Styles:**
   - Configure Tailwind v4 in `globals.css` with manga-style variables (halftone patterns, comic fonts, thick borders, robust box-shadows).
   - Build base reusable UI components (`MangaPanel`, `Button`, `Input`).
3. **Authentication Layer:**
   - Implement simple session/cookie auth to manage `ADMIN` and `TENANT` roles.
   - Build `/login` page.
4. **Public & Application Flow:**
   - Develop Landing Page (`/`) and dynamic property listing.
   - Implement the Tenant Application form (`/apply`).
5. **Admin Portal:**
   - Dashboard layout and key metrics.
   - Implement Property CRUD features (with Blob image uploads).
   - Implement Application review and Tenant assignment logic.
   - Implement Maintenance management (assigning to staff, updating status).
6. **Tenant Portal:**
   - Tenant Dashboard.
   - Profile management (`/tenant/profile`) to update contact details.
   - Mock rent payment interface (updating the `Payment` and `TenantProfile` balance).
   - Maintenance request submission flow (with Blob image uploads).
7. **Cross-Portal Integration:**
   - Admin view of maintenance requests and financial logs.
8. **Final Polish & Responsiveness Check:**
   - Ensure the Manga panels break and reflow cleanly on mobile screens.

## 7. Testing and Validation Strategy
- **Manual Verification (AC Checklist):**
  - Verify landing page visual aesthetic matches manga styling.
  - Test the full lifecycle: User applies -> Admin approves -> Tenant logs in -> Tenant updates profile -> Tenant pays rent -> Tenant submits maintenance (with image) -> Admin assigns and resolves maintenance.
- **Visual Testing:** Check high contrast, responsive reflow of thick-bordered panels, and readability of the chosen fonts.
- **Functional Testing:** Ensure role-based access works (tenants cannot access `/admin`, public users cannot access `/tenant`). Verify image uploads to Vercel Blob succeed and render correctly.
