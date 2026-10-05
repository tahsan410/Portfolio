# Tahsan Farhad Ovi — Portfolio

Premium dark developer portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

Requires Node 18+.

## Things to add before publishing

| What | Where |
| --- | --- |
| Your real resume | Replace `public/resume.pdf` (currently a placeholder page) |
| Project screenshots | `public/images/hishabi.png` and `public/images/courier.png` (1280×800 works well). Until they exist, a neutral preview is shown instead. |
| Hishabi GitHub repo | `src/data/projects.js` → set `github` for the `hishabi` entry (no public repo was found on the profile) |
| Dates | `src/data/experience.js` and `src/data/education.js` → fill in `period` (hidden while empty) |
| Open Graph image URL | `index.html` → make `og:image` an absolute URL after deploying |

## Editing content

Everything lives in `src/data/`:

- `site.js` — name, contact details, links, navigation
- `projects.js` — add a project by appending an object (use `group: 'backend'` + `variant: 'compact'` for Backend & API cards)
- `skills.js`, `experience.js`, `education.js`, `achievements.js`

## Notes

- The contact form opens the visitor's email app (`mailto:`). There is no backend.
- The GitHub section reads public data from the GitHub API and falls back to plain links if the request fails. Nothing is hard-coded or invented.
- The portrait is `public/images/ovi.jpg`.
- Hosting: any static host works (Firebase Hosting: set `"public": "dist"`; Netlify / Vercel: build command `npm run build`, output `dist`).
