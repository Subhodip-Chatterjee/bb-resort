# Bombay Beach Resort — Website

A 12-page React + React Router site for Bombay Beach Resort (Mandarmani, West Bengal), built with Vite.

## Deploying (Vercel, Netlify, or any static host)

This is a client-side-routed single-page app (React Router), so the host needs to serve `index.html` for every route, not just `/`. A `vercel.json` is included with the required rewrite rule:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

Without this, visiting or refreshing a page directly (e.g. `yoursite.com/rooms`) returns a 404 — Vercel doesn't know `/rooms` should be handled by the React app rather than looked up as a real file. If you're deploying elsewhere (Netlify, etc.), that host will need the equivalent `_redirects`/rewrite rule.

On Vercel specifically: import the repo (or drag-and-drop this folder), and it auto-detects the Vite framework preset — no manual build/output settings needed. `package-lock.json` is included for a reproducible install, and `engines.node` in `package.json` pins Node ≥18.18.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`). Every nav link, footer link, and in-page CTA is wired up with real client-side routing.

To create a production build:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  main.jsx              Entry point
  App.jsx               Route table (React Router)
  styles/
    global.css           Design tokens, shared header/footer/card styles, plus each page's styles
  components/
    Layout.jsx           Wraps every page with Header + Footer + mobile sticky bar
    Header.jsx            Nav, mega-menus, mobile drawer — active link detected from the current route
    Footer.jsx
    MobileBookBar.jsx      Sticky mobile "Book Now" bar
    PhotoPlaceholder.jsx   Placeholder used everywhere a real photo will eventually go
  pages/
    Home.jsx, RoomsSuites.jsx, Dining.jsx, Amenities.jsx, Experiences.jsx,
    Weddings.jsx, Corporate.jsx, Offers.jsx, Gallery.jsx, About.jsx,
    Contact.jsx, BookNow.jsx
  assets/
    logo-mark.webp        The resort's emblem, cropped from the uploaded logo file
public/
  favicon.ico              16/32/48/64px multi-size favicon
  favicon-16x16.png, favicon-32x32.png
  apple-touch-icon.png     180x180, flattened on white for iOS home-screen icons
  icon-192.png, icon-512.png   PWA/Android manifest icons
  site.webmanifest
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/rooms` | Rooms & Suites |
| `/dining` | Dining |
| `/amenities` | Amenities |
| `/experiences` | Experiences |
| `/weddings` | Weddings |
| `/corporate` | Corporate & MICE |
| `/offers` | Offers |
| `/gallery` | Gallery |
| `/about` | About |
| `/contact` | Contact |
| `/book` | Book Now (5-step booking wizard) |

## Photos

Every image slot renders `<PhotoPlaceholder label="..." tone="..." />` instead of a real photo — no stock/third-party images were used. To drop in a real photo, replace the placeholder with a normal `<img src="..." alt="..." />`; the surrounding card, rounding, and overlay styles will keep working unchanged.

## Notes for Next Steps

- **Forms** (Contact, Corporate Enquiry, Book Now guest details) currently just update local component state on submit — wire them up to your backend/email service of choice.
- **"Check Availability" / "Book Now"** buttons route to `/book`, which is a fully client-side pricing calculator — connect it to a real booking engine/payment gateway when ready.
- **Search, phone, and social icons** in the header/footer are placeholders — link them to real destinations (search modal, tel: links are already wired, actual social profiles) as needed.
