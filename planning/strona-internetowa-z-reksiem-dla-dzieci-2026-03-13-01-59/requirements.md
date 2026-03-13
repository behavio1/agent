# requirements.md

## 1. Request summary
The goal is to build a Polish-language website aimed at children, featuring the classic animated character "Reksio" as the main protagonist. The platform needs to be highly colorful, interactive, and incorporate animations, maintaining a fun and humorous character to engage its young target audience.

## 2. Functional requirements
- **Language**: All text, prompts, and interface elements must be in Polish.
- **Main Character Focus**: Reksio must serve as the central visual element and primary guide throughout the site.
- **Interactive Elements**: Include interactive objects (e.g., clickable items that trigger animations or sounds) to engage children.
- **Animations**: Integrate smooth, playful animations (e.g., Reksio reacting to cursor movements, hovering effects, playful page transitions).
- **Humorous Character**: Use fun, kid-friendly visual reactions and engaging activities.
- **Mini-Activity Section**: At least one interactive mini-game or exploratory section (e.g., a simple click-to-discover feature).

## 3. Non-functional requirements
- **Tech Stack**: Next.js (App Router), React, Tailwind CSS, and Framer Motion for rich animations.
- **Responsive Design**: The website must work flawlessly on mobile, tablet, and desktop devices, with large touch targets optimized for children using touchscreens.
- **Performance**: High performance and fast loading speeds to retain a child's attention, aiming for 60fps animations.
- **Accessibility**: Simple navigation, high contrast colors, and minimal reliance on text reading.
- **Database / Deployment**: If data persistence is introduced (e.g., saving high scores), Neon Postgres via `DATABASE_URI` and Drizzle ORM will be used. All app-owned tables, indexes, and constraints must use a deterministic prefix via `DATABASE_TABLE_PREFIX`. The app will be deployed to Vercel (target: `vercel_app`), utilizing `VERCEL_TOKEN` without hardcoded credentials. Any Node deployment configuration will rely on runtime environment variables like `NODE_DEPLOY_HOST` and `NODE_DEPLOY_PATH`.

## 4. Out of scope
- User authentication, account creation, or login systems.
- E-commerce functionality or merchandise sales.
- Heavy 3D graphics or complex multiplayer game mechanics.
- A content management system (CMS) for administrative updates.

## 5. Assumptions
- "Reksio" refers to the classic Polish animated character; appropriate placeholder or stylized 2D assets will be used in the scaffold to capture the vibe without strict copyright infringement.
- The target audience is young children (approx. ages 3-8), so the experience should prioritize visual/auditory feedback over heavy text.
- Since no backend logic was explicitly requested, the primary focus is on frontend interactions, though backend capabilities will be properly wired if interactive score tracking is added.
- The deployment environment is Vercel.

## 6. Acceptance criteria
- [ ] The website loads successfully and all visible text is in Polish.
- [ ] Reksio is prominently featured on the main page.
- [ ] The website utilizes a bright, colorful design theme.
- [ ] At least two distinct, interactive animations (e.g., via Framer Motion) function correctly upon user interaction.
- [ ] The site is fully responsive and displays correctly on both mobile and desktop screens.
- [ ] No hardcoded database connection strings, deployment paths, or secrets are present in the source code.
- [ ] The application successfully builds and is ready for Vercel deployment.

*(Run summary note: Samurai task reporting was skipped as no Samurai Task ID was provided in the workflow metadata.)*