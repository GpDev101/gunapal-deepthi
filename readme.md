# Gunapal P. & Deepthi R. — Wedding Invitation

A small, static wedding-invitation site built with **Vite + React + TypeScript + Tailwind + Framer Motion**. Designed to deploy to **GitHub Pages** for free (also works on Vercel/Netlify).

- Blessing: **|| Sri Boreswara Swamy Prasanna ||**
- Date: **Thursday, 2 July 2026** · Dhāra Muhūrta 8:30 – 9:00 AM IST
- Venue: **Sri Yoga Narasimha Swami Temple**, Vijayanagar 1st Stage, Mysuru 570017
- Languages: English / ಕನ್ನಡ (toggle in the top-right)
- Sections: Hero · Countdown · Details · Location · RSVP · Footer
- Vibe: gold + maroon + temple green, arch frame, lanterns, mango-leaf flourishes, falling petals, scroll-reveal animations, smooth-scroll anchors

## Couple illustration

Drop your centerpiece artwork at:

```
public/assets/couple.png
```

The hero renders it inside the animated arch + lantern + petals scene. If the file isn't there, a soft SVG silhouette is used as a fallback so the site keeps working. See [public/assets/README.md](public/assets/README.md) for size suggestions.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/GP-Dipz101/
npm run build    # type-checks then builds to dist/
npm run preview  # serves the built site locally
```

## Configuration

Couple/venue details live in [src/lib/config.ts](src/lib/config.ts):

- `groomName`, `brideName`
- `dateIso` — ceremony time (drives the countdown)
- `venueName`, `venueShort`
- `googleMapsUrl` — used for the "Open in Google Maps" button
- `rsvpEmail` — RSVP submissions open a prefilled `mailto:` to this address

Localized copy lives in [src/data/locales.ts](src/data/locales.ts) (`en` and `kn`).

> Note: RSVPs go via `mailto:` because GitHub Pages is static (no backend). If you want a server-side endpoint later, swap the handler in [src/components/RSVP.tsx](src/components/RSVP.tsx) for Formspree / Web3Forms / a tiny Cloud Function.

## Deploying to GitHub Pages

1. Push to `main` on https://github.com/GpDev101/GP-Dipz101.
2. In the repo, go to **Settings → Pages → Build and deployment** and set **Source = GitHub Actions**.
3. The workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and publishes on every push to `main`.

The site will be available at:

```
https://gpdev101.github.io/GP-Dipz101/
```

### Base path

For project pages the build needs to know the repo name. The workflow passes it as `VITE_BASE=/<repo>/` automatically. For local dev or custom-domain deploys, override:

```bash
VITE_BASE=/ npm run build   # for root deploys (Vercel, custom domain, etc.)
```

The default in [vite.config.ts](vite.config.ts) is `/GP-Dipz101/`.

## Deploying to Vercel (optional)

1. Import the repo on Vercel.
2. Framework preset: **Vite**.
3. Add an env var `VITE_BASE=/` (since Vercel serves from root).
4. Deploy — that's it.

## Project structure

```
.
├── index.html
├── public/
│   └── .nojekyll                # tells GH Pages not to run Jekyll
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Countdown.tsx
│   │   ├── Details.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LangToggle.tsx
│   │   ├── Location.tsx
│   │   └── RSVP.tsx
│   ├── data/locales.ts          # EN / KN copy
│   └── lib/config.ts            # couple, date, venue, RSVP email
├── .github/workflows/deploy.yml # GH Pages CI
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig*.json
```
