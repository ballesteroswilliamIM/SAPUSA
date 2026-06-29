# Aldergate Partners — Consulting Template (React)

A React conversion of the static consulting template, built with [Vite](https://vitejs.dev).

## Project structure

```
src/
  components/
    Header.jsx       Sticky nav + mobile menu (open/close state)
    Hero.jsx          Hero section with headline and engagement snapshot panel
    TrustStrip.jsx    Logo/segment strip below the hero
    Approach.jsx      Three-card "how we work" section
    Practice.jsx      Practice area list
    Engagement.jsx    "Engagement ledger" signature section
    Contact.jsx       Contact form (controlled inputs + submit state)
    Footer.jsx
  App.jsx             Composes all sections
  main.jsx            React entry point
  index.css           Global styles, design tokens (CSS variables)
index.html            Vite HTML entry (fonts, meta tags)
```

## Running locally

You'll need [Node.js](https://nodejs.org) (18+) installed.

```bash
npm install
npm run dev
```

This starts a local dev server (Vite will print the URL, typically `http://localhost:5173`) with hot reload — edit any file in `src/` and the browser updates instantly.

## Building for production

```bash
npm run build
```

This outputs static files to `dist/` — plain HTML, CSS, and JS, ready to upload to any static host (including cPanel's `public_html`, same as the original non-React version).

To preview the production build locally before deploying:

```bash
npm run preview
```

## What's different from the static HTML version

- **Mobile menu** is now React state (`useState` in `Header.jsx`) instead of manual DOM class toggling.
- **Contact form** is a controlled form (`Contact.jsx`) that tracks input values in state and shows a confirmation view on submit — still a placeholder, see below.
- Content (practice areas, engagement steps, trust-strip items) is pulled from small arrays at the top of each component, so editing copy means editing one array instead of hunting through markup.
- Visual design and CSS are unchanged — same design tokens, same layout, same "engagement ledger" signature element.

## Before publishing

- **Connect the contact form** to a real endpoint or service (e.g. [Formspree](https://formspree.io), Netlify Forms, or your own API) — right now `handleSubmit` in `Contact.jsx` only logs to the console and shows a placeholder confirmation.
- **Swap placeholder content**: brand name, email, phone, address, and all copy describing practice areas and approach.
- **Replace the favicon** in `public/` with your own.
