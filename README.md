# Mirza Saif Mahmud Alvee — Portfolio

A CV-based professional profile site — Next.js 14 (App Router) + TypeScript +
Tailwind CSS + Framer Motion + Lucide React. Deliberately different design
from a "dev portfolio": navy/gold palette, serif (Fraunces) + sans (Inter)
pairing, solid document-style cards instead of glassmorphism, and a
resume-shaped layout (Highlights, About, Experience, Education, Languages,
References, Contact).

## 1. Run it locally (Windows)

Open this folder in VS Code, then in a terminal:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edit content in `data/portfolio.ts` and the page
reloads automatically — no need to touch component files for text changes.

`.env.local` already has the real reference phone/email filled in, so local
dev works with no extra setup — it just won't be pushed to GitHub (see §3).

## 2. Fill in what's missing

- Add a real photo at `public/avatar.jpg` (optional — initials show until then).
- Add `public/favicon.ico`.
- The CV you uploaded is already wired in as the "Download CV" button.

## 3. Security & privacy notes

- **References:** phone numbers and emails for referees are **not in the
  codebase at all** — they live only in `.env.local`, which is gitignored and
  never gets pushed to GitHub. `data/portfolio.ts` only holds their name,
  title, and relation. The public page shows "Contact details available on
  request" by default regardless; set `revealContact: true` on a reference in
  `data/portfolio.ts` if you'd rather show one outright (it'll pull the real
  value from `.env.local` at render time, still without ever reaching the
  browser bundle, since this only happens in a Server Component).
- **Download CV button:** `public/Alvee-CV.pdf` is a genuinely redacted copy —
  the reference contact details were left out when the PDF was generated, not
  covered up, so they can't be recovered by selecting/copying text from the
  file. **Never place the full, unredacted CV inside `public/`** — everything
  there is served to any visitor at a guessable URL, linked or not. Keep the
  full CV only on your own machine and send it directly for real job
  applications. See `public/README.md`.
- **Contact form:** has a hidden honeypot field (invisible to real visitors,
  invisible to screen readers) — not doing anything today since the form just
  opens an email client, but keep the check if you later wire up a real
  backend, so bot-submitted spam gets silently dropped.
- No analytics or tracking scripts are included, and there's no server or
  database for anything to attack — the site is fully static.

## 4. Deploy to Vercel (free)

1. Push this project to a new GitHub repo — `.env.local` won't be included
   (it's gitignored), so the reference numbers stay off GitHub even if the
   repo is public.
2. Go to https://vercel.com → **Add New Project** → import that repo.
3. Leave settings on default (Vercel auto-detects Next.js) → **Deploy**.
4. Live in about a minute at a `.vercel.app` URL.
5. Optional: if you ever set `revealContact: true` for a reference, also add
   the matching `REF_..._PHONE` / `REF_..._EMAIL` variables under Vercel's
   Project Settings → Environment Variables (see `.env.example` for the
   names) — otherwise that reference's contact fields will render empty in
   production, since Vercel never sees your local `.env.local`.

For a free custom domain, see the `is-a.dev` steps in the other portfolio
project's README (same process, different codebase).

## 5. What's not wired up yet

- Contact form opens the visitor's email client (no backend) — swap in
  Formspree/Resend if you'd rather collect submissions directly.
- Only one role is in Experience — the timeline component is built to take
  more entries whenever there's a second job to add.
- Not yet build-tested in a real Node environment (authored without network
  access) — run `npm install` first and flag anything that errors.
