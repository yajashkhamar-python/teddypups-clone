# TeddyPups Website Clone (Dubai)

A pixel-faithful, responsive clone of **TeddyPups U.A.E.** ([https://puppy.instabizweb.com/](https://puppy.instabizweb.com/)), specializing in teacup and teddy bear puppies in Downtown Dubai.

---

## 🌟 Overview & Implemented Pages

This project faithfully replicates the brand aesthetics, warm pastel design language, typography, interactions, and full route structure of the reference site:

1. **Home (`/`)**:
   - Fixed header with scalloped hem styling, active paw indicators, WhatsApp CTA, and mobile slide-out drawer menu.
   - Hero section with headline (`Premium teacup puppies in Dubai`), CTAs for local and imported puppies, and quick breed selector pills.
   - "Meet the pups" grid with real puppy listings (`tp-sketch` styled borders, hover tilts, video badges).
   - "Two ways to meet your puppy" comparison section (Downtown Dubai Showroom vs. Imported for you).
   - "Your puppy journey" 3-step adoption process.
   - "Happy families & puppies" gallery preview with testimonials.
   - FAQ preview accordion with smooth single-toggle state.
   - Full footer with verified contact info, quick navigation, social links, and copyright.

2. **Puppies Catalog (`/puppies`)**:
   - Live category filtering by **Breed** (*Maltipoo, Pomeranian, Poodle, Cavapoo, Shih Tzu*) and **Origin** (*Local Showroom vs. Imported*).
   - Two distinct sections: **Available puppies** and **Already gone home**.
   - Direct query parameter synchronization (`/puppies?breed=maltipoo`, `/puppies?origin=local`).

3. **Puppy Detail Route (`/puppies/:id`)**:
   - Dedicated views for individual puppies (e.g., `/puppies/maltipoo-max-male`).
   - Image gallery, verified status badge, bloodline specs, and complete medical warranty list.
   - Pre-filled WhatsApp direct reservation link.
   - Related puppy recommendations.

4. **Happy Families (`/happy-families`)**:
   - "Our wall of happy endings" client photo gallery with real testimonials, quotes, and adopter locations.
   - Instagram and WhatsApp community photo contribution actions.

5. **How It Works (`/how-it-works`)**:
   - Comprehensive guide on showroom visits vs. international VIP courier imports.
   - "Our premium puppy promise" veterinary certification and MOCCAE compliance standards.
   - Dubai and UAE-wide delivery options.

6. **FAQ (`/faq`)**:
   - Fully interactive accordion covering all 9 verified adoption questions (health checks, microchips, same-day pickup, flights, and aftercare).

7. **Visit & Contact (`/contact`)**:
   - Verified showroom details (Downtown Dubai, phone `+971 54 167 6733`, email `teddypupsadmin@gmail.com`).
   - The authentic **stylized letterform** (`tp-letterform`): *"Dear TeddyPups, my name is [name], reach me on [phone]..."* with inline inputs, dropdown puppy selector, honeypot field, validation, and submission feedback.

8. **Global WhatsApp Integration**:
   - Fixed floating WhatsApp action button linking directly to verified number `+971 54 167 6733`.

---

## 🛠 Technology Stack

- **Framework**: React 19 + Vite 6
- **Language**: JavaScript (ES Modules) & JSX
- **Routing**: `react-router-dom` v7 with SPA fallback configuration
- **Icons**: `lucide-react`
- **Styling**: Vanilla CSS with custom properties (`global.css`, `components.css`), responsive media queries, and Google Fonts (`Plus Jakarta Sans`, `Caveat`).
- **Data Source**: Local structured JavaScript datasets (`src/data/puppies.js`, `src/data/siteData.js`).
- **Deployment Target**: Vercel (`vercel.json` rewrite configuration for seamless nested routing).

---

## 📁 Project Folder Structure

```text
teddypups-clone/
├── public/               # Public static assets
├── src/
│   ├── components/       # Reusable layout & UI components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── PuppyCard.jsx
│   │   └── WhatsAppButton.jsx
│   ├── data/             # Verified datasets & site content
│   │   ├── puppies.js
│   │   └── siteData.js
│   ├── pages/            # Application routes
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── HappyFamilies.jsx
│   │   ├── Home.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Puppies.jsx
│   │   └── PuppyDetail.jsx
│   ├── styles/           # CSS design system
│   │   ├── components.css
│   │   └── global.css
│   ├── App.jsx           # Main routing declaration
│   └── main.jsx          # React DOM mounting
├── index.html            # HTML shell with Google Fonts
├── package.json          # Dependencies & scripts
├── vercel.json           # Vercel SPA rewrite config
└── vite.config.js        # Vite bundler configuration
```

---

## 🚀 Prerequisites & Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- Git

### 1. Clone or Open Project
```bash
cd teddypups-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates an optimized bundle in `dist/`.

---

## 🌐 Deployment Instructions (Vercel)

This repository includes `vercel.json` configured with rewrites so direct navigation and browser refreshes on routes like `/puppies/maltipoo-max-male` work without 404s.

### Option A: Import via GitHub (Recommended)
1. Push this repository to your GitHub account (see instructions below).
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." > "Project"**.
3. Select your `teddypups-clone` repository.
4. Keep the default settings (**Framework Preset**: Vite, **Build Command**: `vite build`, **Output Directory**: `dist`).
5. Click **"Deploy"**.

---

## 🤖 AI Tools & Engineering Assistance

- **Inspection & Analysis**: Analyzed live reference DOM, stylesheet tokens, color palettes, typography, and page hierarchies.
- **Component Architecture**: Built reusable component abstractions (`Header`, `PuppyCard`, `WhatsAppButton`, `Footer`) maintaining modular separation of concerns.
- **Data Engineering**: Extracted real puppy profiles, breeds, ages, genders, and testimonials from the reference site into maintainable local datasets.
- **Responsive Layout Testing**: Configured fluid clamp functions and media query breakpoints (1440px desktop, 768px tablet, 390px mobile).

---

## ⚠️ Notes & Limitations

- **Contact Form**: The frontend demonstrates honest form validation and submission feedback; no external paid email backend is configured without credentials.
- **Live Inventory**: All listed puppies and photos reflect reference snapshots and are intended for demonstration purposes.
