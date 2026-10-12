# Ahmed Shaikh | Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

Most of the work shown here was done for employers and clients, so the site describes projects in general terms (problem, role, stack, hard problems solved) and never publishes code, names or data that belong to someone else.

## Getting started

```bash
nvm use            # Node 20 (see .nvmrc)
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

## Scripts

| Command          | What it does                                             |
| ---------------- | -------------------------------------------------------- |
| `npm run dev`    | Local development server                                 |
| `npm run build`  | Production build (also validates all content)            |
| `npm run check`  | Lint, typecheck, format check and tests, as CI runs them |
| `npm run format` | Format everything with Prettier                          |
| `npm test`       | Content and schema tests                                 |

## Structure

```
app/                 routes, layout, metadata, robots, sitemap, icon
components/          Header, Footer and page sections
content/             ALL site content, typed and validated with Zod
  profile.ts         name, headline, intro, contact links
  skills.ts          skill groups (only things used in real work)
  projects.ts        one entry per project (section hides while empty)
lib/site.ts          site URL from NEXT_PUBLIC_SITE_URL
tests/               content integrity tests
docs/                how to add a project, confidentiality checklist
.github/workflows/   CI: lint, typecheck, format, test, build
```

Content lives in `content/`, not in components. Every file is parsed with Zod when it is imported, so a malformed entry fails `npm run build` instead of shipping broken.

## Adding or changing content

See [docs/ADDING_A_PROJECT.md](docs/ADDING_A_PROJECT.md). Read its confidentiality checklist before publishing any project.

## Deploy (Vercel)

1. Push to GitHub and import the repository in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the final public URL (used for canonical links, the sitemap and social previews).
3. Every push to `main` deploys. Pull requests get preview URLs and must pass CI.

## Decisions

- **Static-friendly Next.js, no database.** A portfolio needs no backend. Content in typed files is simple, reviewable in pull requests, and fast.
- **Typed content with validation.** Catches missing fields and bad slugs at build time.
- **System font stack.** No third-party font requests, so the page loads fast and works offline-first.
- **Accessibility baseline.** Skip link, landmarks, visible focus, reduced-motion respected, semantic headings.
