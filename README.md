# Anku Builds

> Building Cool Things with Code.

A modern, responsive developer portfolio built with Next.js and TypeScript to showcase projects, technical skills, experiments, and digital products.

The portfolio is designed around a clean developer-focused aesthetic with terminal-inspired UI, subtle animations, responsive layouts, dark/light mode, and a strong focus on performance, accessibility, and SEO.

---

## 🌐 Live Website

### [ankubuilds.com](https://ankubuilds.com)

---

## ✨ Features

- Modern developer-focused portfolio
- Fully responsive design
- Dark and light mode
- Smooth section navigation
- Active navigation state while scrolling
- Animated hero terminal
- Interactive project showcase
- Project technology badges
- Project GitHub links
- Live project demo links
- Responsive mobile navigation
- Social media links
- Contact section
- Custom branding and favicon
- Open Graph social sharing image
- SEO-friendly metadata
- Canonical URL
- Dynamic `robots.txt`
- Dynamic `sitemap.xml`
- JSON-LD structured data
- Semantic HTML
- Responsive typography
- Accessible UI components
- Production-ready Next.js architecture

---

## 🎨 Design

The portfolio uses a developer and terminal-inspired visual language while maintaining a clean and professional interface.

### Design Principles

- Clean and minimal interface
- Strong typography hierarchy
- Developer-focused visual identity
- Terminal-inspired components
- Subtle animations and transitions
- Dark/light theme support
- Responsive layouts
- Consistent accent color
- Minimal glassmorphism
- Accessible contrast
- Performance-focused implementation

### Brand Color

```text
#FDAD04
```

---

## 🛠️ Tech Stack

### Core Framework & Language

- **Framework:** Next.js (App Router)
- **Library:** React
- **Language:** TypeScript

### Styling & Components

- **Styling:** Tailwind CSS, CSS animations, responsive design
- **UI Components:** shadcn/ui
- **Icons:** Lucide React, Simple Icons

### Typography

- **Primary Body:** Inter
- **Headings & Brand:** Space Grotesk
- **Code & Terminal:** Geist Mono

### Tooling & Deployment

- **Runtime:** Node.js (18+)
- **Package Manager:** npm
- **Version Control:** Git & GitHub
- **Deployment Platform:** Vercel
- **Bundler:** Turbopack

---

## 📂 Project Structure

```text
anku-builds/
│
├── public/
│   ├── brand/
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── icon.svg
│   │   ├── opengraph-image.png
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── hero-background.tsx
│   │   ├── hero-terminal.tsx
│   │   ├── projects.tsx
│   │   ├── project-card.tsx
│   │   ├── project-preview.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   └── ui/
│   │
│   └── data/
│       └── projects.ts
│
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed locally:

- **Node.js:** 18.0.0 or higher
- **npm:** 9.0.0 or higher
- **Git**

Verify your local environment:

```bash
node -v
npm -v
git --version
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ankubuilds/anku-builds.git
   ```

2. Navigate to the project root:

   ```bash
   cd anku-builds
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

---

## 💻 Development & Build

### Local Development Server

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module reloading.

### Production Build

Create an optimized, minified production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

---

## 🧩 Key Application Sections

- **Hero:** Developer tagline, interactive deployment terminal, key tech stack chips, and primary conversion triggers.
- **About:** Overview of background, engineering focus, and software development philosophy.
- **Projects:** Interactive cards with live previews, GitHub links, and metadata powered by a single configuration source in `src/data/projects.ts`.
- **Tech Stack:** Comprehensive visual directory of core languages, libraries, databases, and DevOps tools.
- **Contact:** Multi-channel connection hub for collaboration, inquiries, and social profiles.

---

## 📌 Featured Project

### SmartRide — Automated Bus Concession Card System

SmartRide is a digital platform built to digitize and streamline the transit concession card application lifecycle. It replaces paper-heavy processes with a modern digital pipeline handling application submission, document validation, institutional approvals, and card issuance tracking.

**Stack:** Next.js, React, Node.js, MongoDB, TypeScript

---

## 🔗 Connect With Me

- **Website:** [ankubuilds.com](https://ankubuilds.com)
- **GitHub:** [@ankubuilds](https://github.com/ankubuilds)
- **Instagram:** [@ankubuilds.dev](https://instagram.com/ankubuilds.dev)
- **YouTube:** [@ankubuilds](https://youtube.com/@AnkuBuilds)
- **Facebook:** [Anku Builds](https://facebook.com/ankubuilds)

---

## 🔒 License & Copyright

Copyright © 2026–Present Anku Builds (ankubuilds.com). All Rights Reserved.

**Strictly Proprietary & Confidential**

This repository, including its source code, design layout, styling, text, branding, assets, logos, and custom components, is the exclusive intellectual property of Anku Builds.

- **No Unauthorized Duplication or Cloning:** You may NOT copy, clone, distribute, fork for redeployment, mirror, sell, license, or publish this website or any portion of its code as your own portfolio or product.
- **Not an Open Source Template:** This repository is made publicly viewable solely for code review, potential employer assessment, and technical verification. It is not a free template or starter project.
- **Asset Protection:** All brand names, images, icons, and written copy are strictly protected and may not be reused under any circumstance without prior explicit written permission from the copyright owner.

For commercial inquiries, licensing, or permissions, reach out via [ankubuilds.com](https://ankubuilds.com).
