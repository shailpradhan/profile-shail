# Shail Pradhan — developer portfolio

An editorial, responsive portfolio built with React, TypeScript, Vite, and Three.js. Resume details that have not been supplied are visibly marked as placeholders; no experience, skills, projects, qualifications, or contact information have been invented.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Edit resume and portfolio content

`src/data/resumeContent.ts` is the editable source of truth for the portfolio. Update the content there:

- `profile` contains your name, title, location, introduction, tagline, and social profile links.
- `skills` lists technologies and areas without assigning proficiency levels.
- `experience` contains the supplied NCompass TechStudio roles. Confirm their titles and dates and add responsibilities or achievements only when you can verify them.
- `projects` contains the three project descriptions, repository links, technology lists, and notes that limit claims where implementation details need confirmation.
- `education` and `certifications` hold your degree information and the expandable certification list.
- Set `resumePdf.available` to `true` after adding the real file at `public/resume.pdf`.

The About summary is based on public profile and project descriptions; refine it to reflect your current responsibilities and goals. Technologies are not presented as proficiency claims. Project notes identify implementation details that should be verified before stronger claims are published. Responsibilities and achievements are not invented. Add certifications to the `certifications.items` array and they will appear in the expandable section.

Update `src/App.tsx` only when changing the page structure or component behavior. Edit `src/App.css` for visual changes.

Only the GitHub and LinkedIn links provided for this site are live profile links. Add other profile or project links only when they are verified.

## Add a downloadable PDF

Place your final PDF at `public/resume.pdf`. Then, in `src/App.tsx`, change the disabled Resume control into a link to `/resume.pdf` with the `download` attribute, and update its helper text. Until the file exists, the control stays disabled rather than linking to a missing file.

## Motion and visual assets

The hero's wind lines and visible waves are drawn in SVG, while the name letters move with CSS. These effects stop for visitors who prefer reduced motion.
