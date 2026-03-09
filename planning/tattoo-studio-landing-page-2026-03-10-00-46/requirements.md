```markdown
# Requirements: Tattoo Studio Landing Page

## 1. Request Summary
The user has requested a "Tattoo Studio Landing Page". Since no specific requirements were provided, this document outlines a comprehensive, modern landing page for a tattoo studio. The goal is to create an engaging, visually striking, and conversion-focused web presence that highlights the studio's artists, showcases their portfolio, clearly communicates their services and pricing, and provides a straightforward booking or contact process.

## 2. Functional Requirements
The landing page must include the following sections and capabilities:
- **Hero Section:**
  - High-quality background image or video of tattooing or completed work.
  - Prominent studio name, tagline, and a primary Call-to-Action (CTA) button ("Book a Consultation" or "View Portfolio").
- **About/Artists Section:**
  - Introduction to the studio's philosophy and hygiene standards.
  - Profiles for individual artists, including their names, short bios, and their specialty styles (e.g., Traditional, Realism, Blackwork).
- **Portfolio/Gallery:**
  - A responsive, filterable image gallery showcasing past tattoo work.
  - Ability to click images to view them in a larger lightbox modal.
- **Services & Pricing Information:**
  - Breakdown of services offered (e.g., Custom Designs, Flash Tattoos, Cover-ups, Touch-ups).
  - Clear baseline pricing information or a statement regarding hourly rates vs. piece rates.
- **FAQ Section:**
  - Accordion-style layout answering common questions (e.g., age requirements, pain levels, booking deposits).
  - Dedicated sub-section for tattoo aftercare instructions.
- **Contact & Booking Section:**
  - A contact form for inquiries or booking requests (fields: Name, Email, Phone, Preferred Artist, Description of Idea, Reference Image Upload).
  - Display of studio location, embedded map, opening hours, phone number, and email.
- **Footer:**
  - Social media links (Instagram, Facebook, TikTok).
  - Links to Privacy Policy and Terms of Service.
  - Newsletter signup form (optional but recommended for flash drops).

## 3. Non-functional Requirements
- **Technology Stack:** Next.js (React), Tailwind CSS for styling, and Framer Motion for animations.
- **Responsiveness:** The site must be fully responsive, ensuring an optimal viewing experience across mobile, tablet, and desktop devices.
- **Performance:** Images must be optimized (e.g., using WebP format, lazy loading) to ensure fast page load times, particularly for the portfolio gallery. Minimum 90+ Lighthouse performance score.
- **Accessibility:** Ensure high contrast, semantic HTML, and ARIA labels where necessary (minimum WCAG 2.1 AA compliance).
- **Deployment:** Vercel for hosting, with CI/CD configured from the main branch.

## 4. Out of Scope
- Full e-commerce functionality (e.g., selling physical merchandise online).
- A complete, integrated scheduling and calendar management system (booking requests will be handled via email/contact form, not direct calendar blocking).
- User accounts or client login portals.
- Multi-language support (English only for V1).

## 5. Assumptions
- The user will provide or source their own high-resolution imagery and copy for the final production site.
- The contact form will submit inquiries via email (using a service like Resend, SendGrid, or similar) rather than storing them in a complex database.
- Reference image uploads in the contact form can be handled as file attachments sent via email or temporarily hosted on a simple cloud storage bucket.
- The default theme will be dark and edgy, fitting the typical aesthetic of a modern tattoo studio, unless specified otherwise.

## 6. Acceptance Criteria
- **AC1:** The hero section renders correctly on mobile and desktop with a visible, clickable CTA.
- **AC2:** The Artists section displays at least 2 artist profiles with their respective styles.
- **AC3:** The Portfolio gallery displays a grid of images that open in a lightbox when clicked.
- **AC4:** The Services and FAQ sections are present, readable, and the FAQ accordion functions correctly (expanding/collapsing).
- **AC5:** The Contact form validates required fields (Name, Email, Description) and shows a success message upon submission simulation.
- **AC6:** The site achieves a minimum 90+ score on Lighthouse for Performance, Accessibility, and Best Practices.
- **AC7:** All requested user-facing sections are present and fully functional without errors in the browser console.
```