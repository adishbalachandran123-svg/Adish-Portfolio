# Adish Balachandran — Portfolio

A dark, developer-styled personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 1. Project structure

```
adish-portfolio/
├─ index.html                  # SEO tags, fonts, page title
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ public/
│  ├─ favicon.svg
│  └─ resume-placeholder.txt   # replace with your real resume.pdf
├─ src/
│  ├─ main.jsx                 # React entry point
│  ├─ App.jsx                  # assembles all sections
│  ├─ index.css                # design tokens, global styles, motion rules
│  ├─ data/
│  │  └─ portfolioData.js      # ⭐ ALL editable content lives here
│  ├─ hooks/
│  │  └─ useActiveSection.js   # scroll-spy for the navbar
│  └─ components/
│     ├─ Navbar.jsx
│     ├─ Hero.jsx
│     ├─ About.jsx
│     ├─ Skills.jsx
│     ├─ Projects.jsx
│     ├─ Education.jsx
│     ├─ Experience.jsx
│     ├─ Certifications.jsx
│     ├─ Achievements.jsx
│     ├─ TechStack.jsx
│     ├─ Contact.jsx
│     ├─ Footer.jsx
│     ├─ Loader.jsx
│     ├─ ScrollProgress.jsx
│     ├─ BackToTop.jsx
│     └─ CustomCursor.jsx
```

---

## 2. Install & run locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Unzip the project, then move into it
cd adish-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The page hot-reloads as you edit files.

To build a production version:

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

---

## 3. How to edit your information

**Almost everything is in one file:** `src/data/portfolioData.js`.

- `profile` — name, role, tagline, email, resume path, social links
- `about` — intro paragraphs, interest tags, stat cards
- `skillCategories` — skill groups and the skills inside them
- `projects` — every project card (see "Add a project" below)
- `education` — the timeline entries
- `experience` — internships / jobs
- `certifications` — certificate cards
- `achievements` — hackathons, awards, workshops
- `techStack` — the floating tech marquee
- `navLinks` — navbar items

Anything wrapped like `[ADD COMPANY NAME]` is a **placeholder** — search the file for `[ADD` and replace with your real details. Cards automatically detect unfilled placeholders (e.g. GitHub/demo links, certificate links) and show them as plain text instead of a broken button, so nothing looks broken while you fill things in.

### Add your resume
Place your PDF at `public/resume.pdf`. The "Download Resume" buttons already point at `/resume.pdf` — no code changes needed.

### Add your photo (optional)
The hero currently uses an animated code window instead of a photo, matching the "developer" aesthetic. If you'd like to add a headshot, drop an image into `public/`, then reference it (e.g. `<img src="/your-photo.jpg" />`) inside `src/components/Hero.jsx` or `About.jsx`.

---

## 4. How to add a new project

Open `src/data/portfolioData.js`, find the `projects` array, and copy-paste a block like this:

```js
{
  id: 'unique-id-here',
  title: 'Project Name',
  subtitle: 'Short category label',
  description: 'One or two sentences about what it does.',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  categories: ['Web'],       // any of: 'Web', 'AI/ML', 'Data Science', 'Java'
  github: 'https://github.com/you/repo',
  demo: 'https://your-live-demo.com', // or null if there isn't one
  accent: 'cyan',            // 'cyan' or 'violet'
},
```

The **Projects** section's filter bar (`projectFilters` in the same file) will automatically include/exclude it based on `categories`. To add a brand-new filter category, add it to `projectFilters` and use it in a project's `categories` array.

---

## 5. Design system quick reference

Defined in `tailwind.config.js` and `src/index.css`:

- **Background:** near-black (`ink-950` `#05070A`) with soft ambient violet/cyan glows
- **Accent colors:** electric cyan `#4FD8FF`, violet `#8B7FFF`
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (labels/code)
- Section labels use a `// ` comment-style prefix (`.eyebrow` class) to reinforce the developer identity throughout the page

To change the accent colors globally, edit the `cyan` / `violet` values in `tailwind.config.js`.

---

## 6. Accessibility & performance notes already built in

- Respects `prefers-reduced-motion` (animations shortened to near-zero automatically)
- Visible keyboard focus states on all interactive elements
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- Custom cursor is desktop-only and auto-disabled on touch devices / reduced motion
- Mobile nav locks background scroll while open
- Scroll-spy active-link indicator, scroll progress bar, and back-to-top button included

---

## 7. Deployment

### Vercel (recommended, zero config)
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`. Deploy.

### Netlify
1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → "Add new site" → import your repo.
3. Build command: `npm run build`, publish directory: `dist`. Deploy.

### GitHub Pages
1. In `vite.config.js`, set `base: '/your-repo-name/'` (match your repo's name exactly).
2. Install the gh-pages helper: `npm install --save-dev gh-pages`
3. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
4. Run `npm run deploy`.
5. In your GitHub repo settings → Pages, set the source to the `gh-pages` branch.

---

## 8. Content honesty note

Per your instructions, no achievements, employers, certifications, or statistics were invented. Every section that needs real information you haven't provided yet is marked with an explicit `[ADD ...]` placeholder in `portfolioData.js` — search for `[ADD` to find every one of them before you publish.
