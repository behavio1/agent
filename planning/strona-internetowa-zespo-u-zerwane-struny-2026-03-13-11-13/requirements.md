# Requirements Document: Zerwane Struny Landing Page

## 1. Request Summary
The project is to design and develop a single-page, visually striking landing page for a heavy metal band named "Zerwane Struny". The website will function as an online business card, showcasing the band's identity, live performance visuals, and music. The goal is to create a dynamic, dark, and aggressive design inspired by heavy metal aesthetics, optimized for mobile devices.

## 2. Functional Requirements
* **Hero Section**: A high-impact introductory section featuring the band's name ("Zerwane Struny"), a short tagline or description, and an atmospheric background image or video placeholder.
* **About the Band**: A section detailing the band's history, musical style, and identity.
* **Concert Gallery**: A visually appealing image gallery for live performance photos (using placeholders initially).
* **Media Showcase (Music & Video)**: A dedicated section embedding music streams (e.g., Spotify) and video content (e.g., YouTube).
* **Upcoming Gigs / Tour Dates**: A dynamic section listing upcoming concerts, powered by a database to allow future updates.
* **Contact & Booking Form**: A form allowing promoters and fans to contact the band, securely storing inquiries in a database.
* **Social Media Links**: Clearly visible links to the band's social media profiles (Facebook, Instagram, etc.).
* **Responsive Navigation**: A sticky header or navigation menu that facilitates smooth scrolling between sections on the single page.

## 3. Non-functional Requirements
* **Design & Styling**: A heavy metal aesthetic characterized by a dark theme (dominance of black and metallic colors), high contrast, aggressive typography, and dynamic visual elements.
* **Responsiveness**: The landing page must be fully responsive, heavily optimized for mobile devices.
* **Architecture & Stack**: A modern React-based single-page application built with Next.js App Router, targeted for Vercel deployment.
* **Database & ORM**: The application requires a relational database for managing "Upcoming Gigs" and "Contact Messages". It must default to Neon Postgres configured via the `DATABASE_URI` environment variable, utilizing Drizzle ORM for schema, queries, and migrations.
* **Database Naming Convention**: Every app-owned table, index, and constraint must use a deterministic prefix derived from the app slug or an explicit `DATABASE_TABLE_PREFIX` variable (e.g., `zerwane_`).
* **Deployment Configuration**: Never hardcode connection strings, hosts, users, ports, or deploy paths. Read runtime and deploy config from environment variables (e.g., `DATABASE_URI`, `VERCEL_TOKEN`, `NODE_DEPLOY_HOST`, `NODE_DEPLOY_USER`, `NODE_DEPLOY_PATH`, etc.).

## 4. Out of Scope
* E-commerce functionality for selling band merchandise.
* User accounts, fan club login areas, or discussion forums.
* Direct hosting of large audio or video files (external embeds will be used instead).
* An integrated ticketing system (external links to ticket vendors will be provided).

## 5. Assumptions
* Specific media assets (photos, videos, music) are currently unavailable; high-quality, royalty-free heavy metal placeholders will be used during development.
* The band will handle music and video hosting via third-party platforms (YouTube, Spotify), so the app only needs to embed external media.
* The deployment environment will provide standard standard secrets (e.g., `DATABASE_URI`, `VERCEL_TOKEN`).

## 6. Acceptance Criteria
* **AC1**: The landing page loads a single-page layout featuring a dark, heavy metal-inspired theme (aggressive typography, high contrast, dark colors).
* **AC2**: Navigation links smoothly scroll the user to the corresponding sections: Hero, About, Gallery, Media, Gigs, and Contact.
* **AC3**: The Media Showcase section successfully embeds functional mock placeholders for Spotify and YouTube.
* **AC4**: The Concert Gallery displays responsive placeholder images that look good on both mobile and desktop screens.
* **AC5**: A database-backed Contact Form allows users to submit messages, which are successfully written to the database using Drizzle ORM and Neon Postgres.
* **AC6**: The Upcoming Gigs section dynamically reads from the database.
* **AC7**: Database tables and constraints are prefixed correctly (e.g., `zerwane_`) using standard environment variables (`DATABASE_URI`, `DATABASE_TABLE_PREFIX`).
* **AC8**: The application is fully responsive and displays correctly on mobile, tablet, and desktop devices.