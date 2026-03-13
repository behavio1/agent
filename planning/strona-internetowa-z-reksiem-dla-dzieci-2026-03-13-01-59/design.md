# Technical Design: Strona internetowa z Reksiem dla dzieci

## 1. Architecture Overview
This application will be built as a highly interactive, child-friendly Next.js (App Router) web application.
- **Frontend Framework**: Next.js App Router for a hybrid rendering approach (Server Components for data fetching, Client Components for animations and interaction).
- **Styling**: Tailwind CSS configured for a vibrant, high-contrast, colorful theme with large touch targets.
- **Animations**: Framer Motion for 60fps, playful, physics-based interactions (hover effects, bouncing, cursor tracking).
- **State Management**: React Context / Hooks (`useState`, `useReducer`) for handling the state of mini-games and interactive elements on the client side.
- **Database & Persistence**: Neon Postgres accessed via Drizzle ORM to store global interaction counts (e.g., "total bones found by children"). This leverages `DATABASE_URI` and `DATABASE_TABLE_PREFIX`.
- **Deployment**: Vercel (`vercel_app` target), using Server Actions to securely communicate with the database without exposing secrets.

## 2. Repository Context and Relevant Existing Files
The project scaffold is located at `/repos/behavio1__agent/projects/strona-internetowa-z-reksiem-dla-dzieci-2026-03-13-01-59`.
Relevant files:
- **`app/layout.tsx`**: Will be updated to set `<html lang="pl">`, include a child-friendly font (e.g., `Nunito` or `Balsamiq Sans` from `next/font/google`), and establish the global layout.
- **`app/page.tsx`**: The main entry point. Will be refactored to host the interactive Reksio hero section and the mini-game.
- **`app/globals.css`**: Will house the primary color variables (bright yellows, reds, blues, greens) and basic custom styling.
- **`lib/db/schema.ts`**: Contains the Drizzle schema. Includes the `interactions` table prefixed with `DATABASE_TABLE_PREFIX` to track global engagement metrics.
- **`lib/db/index.ts`**: Manages the Neon database connection using the `DATABASE_URI` environment variable.

## 3. Component and Page Breakdown
The user interface will be entirely in Polish, featuring large, distinct areas for interaction.

### Pages
- **`app/page.tsx`**: The core dashboard. Acts as a continuous scrolling story or playground featuring Reksio.

### Components
- **`components/HeroReksio.tsx`** (Client Component): A central animated visual of Reksio. Uses Framer Motion to react to user interactions (e.g., tail wagging on hover, jumping on click, looking at the cursor).
- **`components/InteractiveObject.tsx`** (Client Component): Reusable component for environmental elements (e.g., a bouncing ball, a wiggling tree). Triggers a brief animation and plays a simple sound effect (if applicable/accessible) upon interaction.
- **`components/MiniGame.tsx`** (Client Component): An interactive "Znajdź kości" (Find the bones) mini-activity. Children click on hidden spots (like bushes or doghouses) to reveal items.
- **`components/GlobalScore.tsx`** (Server Component): Displays global stats fetched directly from the database (e.g., "Dzieci znalazły już 1500 kości!").

### UI / Layout Elements
- Custom oversized buttons (min 48x48px touch targets) with rounded corners (`rounded-2xl` or `rounded-full`) and deep drop shadows for a tactile, "pushable" feel.

## 4. Data Model and State Boundaries
### Database State (Server)
- **Table**: `${DATABASE_TABLE_PREFIX}interactions`
  - `id` (serial, PK)
  - `actionType` (varchar): e.g., 'bone_found', 'reksio_pet'
  - `count` (integer): Aggregated count of actions.
  - `updatedAt` (timestamp)
- **Strategy**: To keep performance high and avoid excessive writes, interactions can be incremented via an atomic SQL update in a Next.js Server Action.

### Client State
- **`MiniGame` State**: Tracks which specific items have been found in the current browser session using standard React `useState`. Once all items are found, a completion animation triggers, and a background request is made to the Server Action to update global stats.
- **Animation State**: Managed internally by `framer-motion` variants and `useAnimation` hooks for physics-based feedback.

## 5. API and Integration Surface
- **Server Actions (`app/actions.ts`)**:
  - `incrementInteraction(actionType: string)`: Updates the `interactions` table for a given `actionType`. Returns the new total.
  - `getInteractionStats()`: Fetches the current counts to hydrate the UI on load or upon completing a game.
- **Environment Variables**:
  - `DATABASE_URI`: Connection string to the Neon Postgres database.
  - `DATABASE_TABLE_PREFIX`: Ensures the `interactions` table does not collide with other apps (e.g., `reksio_app_interactions`).
  - No hardcoded secrets will exist in the codebase.

## 6. Ordered Implementation Strategy
1. **Foundation**:
   - Update `app/layout.tsx` for Polish language (`lang="pl"`) and a playful Google Font.
   - Configure bright, high-contrast Tailwind colors in `tailwind.config.ts` and `app/globals.css`.
   - Install `framer-motion` and `lucide-react`.
2. **Database & Backend**:
   - Verify `lib/db/schema.ts` and ensure Drizzle migrations are generated and applied for the `interactions` table.
   - Create `app/actions.ts` with the `incrementInteraction` and `getInteractionStats` Server Actions.
3. **Core Interactive Components**:
   - Implement `HeroReksio.tsx` with Framer Motion hover (`whileHover`) and tap (`whileTap`) animations.
   - Implement reusable `InteractiveObject.tsx` for background elements.
4. **Mini-Game Construction**:
   - Build `MiniGame.tsx` ("Znajdź kości"). Implement local state to track found items.
   - Wire the completion state of the mini-game to call the `incrementInteraction` Server Action.
5. **Page Assembly**:
   - Compose `app/page.tsx` using `HeroReksio.tsx`, the `MiniGame.tsx`, and `GlobalScore.tsx`.
   - Ensure the layout is responsive, placing elements ergonomically for mobile (touch) and desktop (mouse) users.
6. **Refinement**:
   - Polish animations to ensure they hit 60fps (favoring `transform` and `opacity` animations).
   - Verify all textual elements are in Polish and contextually appropriate for young children (simple, humorous).

## 7. Testing and Validation Strategy
- **Accessibility & Usability**: Manually test on touch devices (or touch simulators) to guarantee all interactive elements are easily tappable (large touch targets) by children. Ensure high contrast.
- **Animation Performance**: Use Chrome DevTools to monitor rendering performance and guarantee smooth, jank-free 60fps animations.
- **Language Verification**: Code review to ensure zero English user-facing text leaks into the final build.
- **Database Integration**: Test the Server Actions locally to confirm that clicks correctly update the Neon database without causing UI blocking or unhandled promise rejections.
- **Build & Deployment**: Run `npm run build` to ensure Next.js App Router and Drizzle dependencies compile successfully, ready for Vercel deployment.
