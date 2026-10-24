# Loom Video Recording Script & Assessment Walkthrough Guide

Use this structured script to record your 3-5 minute Loom video walkthrough. It is designed to demonstrate technical maturity, clear engineering decisions, and interview readiness.

---

### 1. Introduction & Objective (~30s)
- **Greeting**: "Hello! My name is [Your Name], and I'm presenting my submission for the TeddyPups frontend clone hiring assessment."
- **Objective**: "The goal was to build a pixel-faithful, responsive clone of [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/) in React within 48 hours, capturing its bespoke warm aesthetic, dynamic puppy filtering, letterform contact interaction, and full navigation hierarchy."

---

### 2. Live Demo & Responsive Walkthrough (~1m 15s)
- **Homepage**:
  - Show the header with paw-print active indicators and WhatsApp direct call-to-action.
  - Highlight the typography: *Plus Jakarta Sans* for clean modern UI paired with *Caveat* for playful handwritten scrawls.
  - Scroll past the Hero section to show the breed selector pills and the "Meet the pups" cards with `tp-sketch` borders and hover effects.
  - Point out the "Two ways to meet your puppy" section and the interactive FAQ accordion.
- **Puppies Catalog (`/puppies`)**:
  - Demonstrate active breed filtering (*Maltipoo, Pomeranian, Cavapoo, etc.*).
  - Demonstrate origin filtering (*Local Dubai Showroom vs. Imported*).
  - Show the "Already gone home" archived placements section.
- **Puppy Detail Page (`/puppies/:id`)**:
  - Click on "Max" to show the detail view, complete medical checklist, and pre-filled WhatsApp inquiry button.
- **Happy Families (`/happy-families`)**:
  - Show the customer testimonial photo grid.
- **Visit & Contact (`/contact`)**:
  - Show the authentic stylized **letterform** with inline inputs, dropdown puppy selector, and live validation.
- **Mobile Responsiveness**:
  - Open Chrome DevTools, toggle mobile view (390px iPhone / 360px Android), and demonstrate the slide-out menu drawer and flexible column stacking.

---

### 3. Architecture & Tech Stack (~45s)
- **Tech Stack**:
  - **React 19 & Vite**: Chosen for ultra-fast Hot Module Replacement (HMR) and lightweight production bundles (< 100kB gzipped).
  - **React Router v7**: Enables full client-side routing across all primary and puppy detail routes.
  - **Vanilla CSS with Design Tokens**: Used CSS variables (`--cocoa`, `--honey`, `--gold`, `--sky-blue`) for maintainability without unnecessary heavy CSS utility frameworks.
  - **Structured Datasets**: All 20 puppy listings, images, breeds, and FAQs were extracted directly from the reference website into clean, typed local data structures (`puppies.js`, `siteData.js`).

---

### 4. AI-Assisted Engineering Workflow & Prompting (~30s)
- "I used Antigravity as my senior pair programmer to:"
  1. Inspect the reference DOM and extract design tokens and real content directly.
  2. Scaffold modular components (`Header`, `PuppyCard`, `WhatsAppButton`, `Footer`).
  3. Ensure production-ready code with clean git commit hygiene and zero build warnings.

---

### 5. Deployment & Vercel Configuration (~30s)
- Point out `vercel.json`:
  - Explain the SPA rewrite rule (`/(.*) -> /index.html`), ensuring direct URL refreshes on nested routes like `/puppies/maltipoo-max-male` load seamlessly without 404s.

---

### 6. Conclusion & Next Steps (~15s)
- "The codebase is cleanly organized in GitHub, fully builds in under 200ms, and is deployed live on Vercel. Thank you for your time, and I look forward to discussing the code during the interview!"
