# Business Engine — Agency Website

A React + Vite + Tailwind CSS single-page site for **BUSINESS ENGINE**, built from
the provided design reference and content brief.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  components/   One component per section (Navbar, Hero, Services, Work, Contact, ...)
  data/
    content.js  All copy, stats, services, work items and insight articles live here —
                edit this file to change text/content without touching component code.
  hooks/
    useCountUp.js  Animated number counter used in the stats section.
  index.css     Tailwind layers + small set of custom utility classes.
public/
  media/hero-video.mp4  Hero background video.
```

## Notes

- **Fonts**: Instrument Sans, loaded from Google Fonts in `index.html`.
- **Images**: Work and Insights sections use royalty-free Unsplash photography
  as placeholders matched to each project/article's subject. Swap the `image`
  URLs in `src/data/content.js` for your own real project photography/screenshots
  whenever you have them — no other code changes are needed.
- **Contact form**: fully built with client-side validation (required fields +
  privacy checkbox). It currently shows a success state on submit; wire the
  `handleSubmit` function in `src/components/Contact.jsx` up to your email
  service, CRM, or backend API endpoint to actually send submissions.
- **Animations**: built with Framer Motion — scroll reveals, staggered hero
  text, animated tab switching, counters, carousel transitions and hover
  micro-interactions throughout. Motion is reduced automatically for users
  with `prefers-reduced-motion` enabled.
- **Navigation**: smooth-scrolls to sections and highlights the active nav
  item based on scroll position.
