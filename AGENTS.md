# Coding Guidelines & Quality Gates (AGENTS.md)

This document contains strict rules that all developer agents, workstreams, and AI assistants must follow when working on the website redesign for **IIC Limited (International Interior Contractor Private Limited / IICL)**.

---

## 1. Project Overview
* **Project Name**: IICL Website Redesign
* **Client**: International Interior Contractor Private Limited (Pune, Maharashtra)
* **Goal**: Build a modern, minimal, elegant, and light-theme trust-building website showcasing high-end interior design, turnkey contracting, and civil engineering capabilities.

---

## 2. Design Rules
* **Theme**: Light theme only. No dark theme components or dark background hero sections.
* **Aesthetic Tone**: Minimal, premium, elegant, and highly trustworthy. It must feel like an architectural, high-end design contracting brand, not a generic building or construction website.
* **Layout Design**: Use generous spacing (large whitespace), clean thin-bordered cards, premium layouts, and consistent section rhythm. Avoid visual clutter.
* **Animations**: Muted and subtle entrance fades or slide-ups. Avoid heavy, flashy, or continuous animations.
* **Consistency**: Maintain a unified typographic system (serif Playfair Display for headers, Outfit/sans-serif for copy) and synchronized styling tokens across all cards, buttons, margins, and borders.

---

## 3. Code & Architecture Rules
* **Framework**: Next.js App Router (latest stable with React 19).
* **Language**: Strict TypeScript with robust interfaces for all components and datasets. No fallback to `any`.
* **Modularity**: Create highly reusable components (grids, buttons, input fields). Keep page routing files clean and declarative.
* **No Code Duplication**: Extract all repeating content (services lists, project specs, client reviews, FAQ items, and navigation structures) into dedicated schema-typed data files in `src/data/`. Hardcoded repeated sections are strictly forbidden.
* **Access & Responsiveness**: Every component must be fully responsive (tested from 360px up to 4K resolutions) and semantically correct (using `header`, `nav`, `main`, `section`, `footer`, proper tab indices, and ARIA labels).
* **Asset Loading**: Always utilize Next.js `<Image>` components with defined dimensions, responsive `sizes` configurations, and structural layouts.
* **Performance**: Avoid unnecessary `"use client"` statements. Build components as React Server Components (RSC) by default; only use client-side directives for forms, micro-interactions, local states, or scroll listeners.

---

## 4. Search Engine Optimization (SEO) Rules
* **Metadata**: Every page route must supply a descriptive, optimized metadata object (title, page description, openGraph tags, and keywords).
* **JSON-LD Schema**: Incorporate rich structured schema markup using our helper library (`src/lib/seo.tsx`):
  * **Homepage**: LocalBusiness / HomeAndConstructionBusiness schema.
  * **Service Pages**: Service schema with provider and area parameters.
  * **FAQ Elements**: FAQPage schema to acquire Google rich answers.
* **Hierarchy**: Enforce a clean, single-H1 structural heading hierarchy (`h1` -> `h2` -> `h3`) on all sections.
* **Thin Content**: Never create duplicate thin pages. Local SEO or targeted pages must hold unique, copywritten, and valuable text.

---

## 5. Copy & Content Quality Rules
* **No Fake Data**: Do not inventory fake Google reviews, unearned awards, or fabricated client logotypes. If authentic client metrics are missing during development, use professional, clearly marked placeholder states or `TODO` annotations.
* **Professional Pitch**: Fix grammar, avoid technical slang, and structure the copywriting to establish absolute confidence.
* **Core Value Propositions**: Align the messaging around:
  * **Trust & Integrity**
  * **Execution Quality & Architectural Detail**
  * **Rigid Timelines & Milestone Guarantees**
  * **Singular Turnkey Accountability**
  * **Absolute Design Clarity**

---

## 6. Lead Generation & Capture Rules
Ensure multiple strategically located conversion touchpoints that remain elegant and premium:
* **Primary CTA**: A high-contrast call-to-action button placed prominently in major sections (Hero, Services, Contact, and Footer).
* **WhatsApp CTA**: Integrations allowing users to initiate instant chats with Pune managers.
* **Callback Request**: A lightweight, minimal dialog/form to request quick callback schedules.
* **Brochure Download**: Placeholders facilitating downloadable digital PDFs of project catalogs in exchange for name/email fields.
* **Consultation Request**: Complete multi-step project audit forms powered by `react-hook-form` + `zod` validation.
* **Cost Estimator**: A dynamic interior budget calculator serving as a highly converting lead magnet.

---

## 7. Quality Gates & Sign-off Checklist
Every phase must pass these gates before deployment or completion:
1. `npm run lint` must complete with zero code style violations.
2. `npm run build` must complete successfully, producing a fully optimized production static export.
3. Fully verify responsive presentation down to `360px` screens.
4. Verify Lighthouse performance fundamentals (image scaling, font layout shifts, accessibility labels).
5. Conduct structural checks on form validation errors (handling invalid emails, short numbers, and empty fields cleanly).
