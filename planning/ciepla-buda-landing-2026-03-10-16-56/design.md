# Technical Design: Schronisko Ciepła Buda

## 1. Architecture overview
The application is a modern, single-page landing site built with Next.js App Router and React Server Components. It relies heavily on static rendering to ensure high performance and fast Largest Contentful Paint (LCP). Styling is managed via Tailwind CSS and shadcn/ui. Because there is no backend CMS or dynamic data requirement for this MVP, all content (including the animal gallery) will be statically embedded or mocked via a local data module. Interactivity is kept to a minimum (e.g., mobile navigation, contact form UI) and isolated in specific Client Components.

## 2. Repository context and relevant existing files
- **Root Layout (`app/layout.tsx`)**: The global layout wrapper. Needs updates to include Polish SEO metadata (title, description), custom fonts, and semantic HTML layout tags (`<header>`, `<main>`, `<footer>`).
- **Main Page (`app/page.tsx`)**: The entry point for the landing page. Will be restructured to stack the main section components sequentially.
- **Global Styles (`app/globals.css`)**: Tailwind configuration and global CSS variables.
- **UI Components (`components/ui/*`)**: Currently contains a `Button` component. We will need to add or generate additional elements (e.g., `Card`, `Input`, `Textarea`, `Label`) to build out the feature set.
- **Utility (`lib/utils.ts`)**: Existing utility for class merging (`cn`).

## 3. Component and page breakdown
The application will be broken down into modular components within the `components/` directory:

### Global Layout Components
- `components/Header.tsx`: Sticky or static header containing the shelter logo/name and navigation links. Will use a Client Component for managing mobile menu state (hamburger toggle). Links will use anchor tags (`href="#o-nas"`) for smooth scrolling.
- `components/Footer.tsx`: Displays copyright info, social media links, and a quick summary of contact details.

### Page Sections (`components/sections/*`)
- `Hero.tsx`: The primary landing view containing the shelter's name ("Schronisko Ciepła Buda"), a welcoming tagline, and primary CTAs ("Adoptuj", "Wesprzyj").
- `About.tsx`: A section presenting the shelter's mission, history, and values using a text-and-image layout.
- `Adoption.tsx`: A grid/gallery displaying featured animals. Uses `Card` components to show a photo, name, age, and breed/type.
- `HowToHelp.tsx`: Details ways to support the shelter (financial donations, material gifts, volunteering, virtual adoption) visually represented through icons or cards.
- `Contact.tsx`: A two-column or stacked layout displaying contact info (address, phone, email, opening hours, map placeholder) alongside a visually complete contact form.

## 4. Data model and state boundaries

### Data Model
Since there is no CMS, data will be defined statically in a new file: `lib/data.ts`.
- **Animal Type**:
  ```typescript
  type Animal = {
    id: string;
    name: string;
    type: 'dog' | 'cat' | 'other';
    age: string; // e.g., "2 lata", "3 miesiące"
    breed: string; // e.g., "Mieszaniec", "Owczarek"
    description: string;
    imageUrl: string;
  };
  ```
- **Content**: General placeholder text and contact details will also be centralized here or hardcoded directly in the section components.

### State Boundaries
The application is mostly static, but requires isolated client-side state:
- **`Header.tsx`**: `useState` for toggling the mobile navigation menu. Marked with `"use client"`.
- **`Contact.tsx` (or a sub-component `ContactForm.tsx`)**: `useState` for managing form inputs and submission state. Marked with `"use client"`.
- All other components (Hero, About, Adoption, HowToHelp, Footer) will be Server Components.

## 5. API and integration surface
- **Backend API**: None required for the initial scope.
- **Contact Form**: The form will be visually functional but will not process real submissions to a backend unless configured with a simple `mailto:` action or mocked with a standard `onSubmit` `e.preventDefault()` handler that shows a success message.
- **Map**: A static map image or embedded iframe (e.g., Google Maps) will be used in the Contact section.
- **Images**: Placeholder animal photos will be sourced from Unsplash or locally stored in the `public/images/` directory.

## 6. Ordered implementation strategy
1. **Repository Configuration & Meta**:
   - Update `app/layout.tsx` to include Polish SEO metadata, an appropriate font (e.g., Inter or standard sans-serif), and semantic structure.
2. **UI Component Setup**:
   - Create or generate necessary shadcn/ui components: `Card`, `Input`, `Textarea`, `Label`.
3. **Data Mocking (`lib/data.ts`)**:
   - Create the `Animal` type and a mocked array of at least 3 featured animals.
   - Define contact information constants to ensure consistency across the Footer and Contact sections.
4. **Global Layout Implementation**:
   - Build `Header.tsx` with responsive navigation (desktop links + mobile hamburger menu).
   - Build `Footer.tsx` with social links and contact summary.
5. **Section Implementation**:
   - Build `Hero.tsx` with title and CTA buttons linking to specific sections.
   - Build `About.tsx` with placeholder mission text.
   - Build `Adoption.tsx` that maps over the mocked animal data to render cards.
   - Build `HowToHelp.tsx` outlining donation and volunteering options.
   - Build `Contact.tsx` combining contact details, map placeholder, and the contact form UI.
6. **Page Assembly**:
   - Import and stack all section components sequentially in `app/page.tsx`.
7. **Styling and Polish**:
   - Review and adjust Tailwind spacing, typography, and colors to create a warm, pet-friendly theme.

## 7. Testing and validation strategy
- **Responsiveness**: Verify layout behavior across key breakpoints: mobile (`sm`, 640px), tablet (`md`, 768px), and desktop (`lg`, 1024px+). Ensure no horizontal overflow occurs.
- **Performance**: Test Next.js `<Image />` component implementations to verify proper loading, sizing, and optimization for fast LCP.
- **Accessibility**: Conduct semantic HTML checks. Ensure all images have descriptive `alt` attributes (especially animal photos) and all form fields have associated labels or `aria-label` attributes.
- **Navigation**: Verify that clicking navigation links correctly scrolls the user to the targeted section (`#id` attributes must match the `href` values).
- **Form Behavior**: Test the contact form submission handler to ensure it prevents default page reloads and displays appropriate UI feedback (e.g., a "Message sent" alert).