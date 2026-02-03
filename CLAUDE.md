# CLAUDE.md

## Project Overview

Personal portfolio and resume website for Drew Jones, hosted on GitHub Pages at **https://drewj.net**. This is a pure static site — hand-written HTML, CSS, and vanilla JavaScript with no build tools, frameworks, or dependencies.

## Repository Structure

```
mrdrewj.github.io/
├── CNAME                  # Custom domain config (drewj.net)
├── README.md
├── index.html             # Home page (hero + quick links)
├── about/index.html       # About page (in progress)
├── contact/index.html     # Contact form (Formspree backend)
├── projects/index.html    # Projects page (in progress)
├── resume/index.html      # Full professional resume
└── assets/
    ├── css/style.css      # Single stylesheet (~400 lines)
    ├── js/main.js         # Minimal JS (~13 lines)
    └── resume.pdf         # Downloadable PDF resume
```

## Tech Stack

- **HTML5** — semantic elements (`<header>`, `<footer>`, `<section>`, `<article>`)
- **CSS3** — custom properties, flexbox, single responsive breakpoint at 560px
- **Vanilla JavaScript** — no libraries or frameworks
- **Formspree** — contact form backend (`https://formspree.io/f/xkojvzql`)
- **GitHub Pages** — hosting and deployment via CNAME to drewj.net

## Development Workflow

### No build step

Files are served directly. Edit HTML/CSS/JS and push — GitHub Pages deploys automatically from the default branch.

### Local preview

Open any `index.html` in a browser, or use a local server:

```sh
python3 -m http.server 8000
```

### Deployment

```sh
git push origin main
```

GitHub Pages picks up changes automatically. No CI/CD pipeline or build commands are needed.

## Key Conventions

### Page structure

Every page follows this template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page Title — Drew J.</title>
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  <div class="container">
    <header class="top">
      <a href="/" class="brand">Drew J.</a>
      <nav class="nav" aria-label="Main">
        <!-- nav links -->
      </nav>
    </header>
    <!-- page content -->
    <footer class="footer">
      <div class="footer-inner">
        <span>&copy; <span data-year></span> Drew Jones</span>
        <!-- footer links -->
      </div>
    </footer>
  </div>
  <script src="/assets/js/main.js"></script>
</body>
</html>
```

### CSS architecture

- All styles live in a single file: `assets/css/style.css`
- CSS custom properties defined in `:root` for colors, fonts, and max-width
- Sections are organized with `/* ===== Section Name ===== */` comment headers
- Max content width: `760px` (`--max`)
- Typography: serif for body text, sans-serif for navigation/UI elements
- Single responsive breakpoint: `@media (max-width: 560px)`

### CSS variables (theming)

```css
--bg: #fbfbfa        /* page background */
--paper: #ffffff      /* card/input background */
--text: #1f2328       /* primary text */
--muted: #6b7280      /* secondary text */
--rule: #e7e5e4       /* borders/dividers */
--link: #1f2328       /* link color */
--linkHover: #0f172a  /* link hover color */
```

### JavaScript

`assets/js/main.js` handles two things:
1. Sets the current year in `<span data-year>` elements (footer copyright)
2. Marks the current nav link with `aria-current="page"` based on URL path

No other JS files exist. Keep JavaScript minimal — this is a content-first static site.

### Naming conventions

- CSS classes use lowercase with hyphens: `.resume-item-head`, `.contact-form`
- Page directories use lowercase: `/about/`, `/contact/`, `/projects/`, `/resume/`
- Each page is an `index.html` inside its directory for clean URLs

### Accessibility

- Use semantic HTML elements
- Include `aria-label` on `<nav>` elements
- Navigation uses `aria-current="page"` for the active link
- Form inputs have associated `<label>` elements
- Contact form includes a honeypot field (`.honeypot` class, visually hidden) for spam prevention

## Pages Status

| Page | Status |
|------|--------|
| Home (`/`) | Complete |
| Resume (`/resume/`) | Complete |
| Contact (`/contact/`) | Complete |
| About (`/about/`) | In progress (placeholder content) |
| Projects (`/projects/`) | In progress (placeholder content) |

## Important Notes

- **No package manager** — there is no `package.json`, `node_modules`, or dependency management
- **No `.gitignore`** — all files in the repo are tracked
- **PDF resume** — `assets/resume.pdf` is a binary file; update it by replacing the file directly
- **Formspree endpoint** — the contact form posts to a specific Formspree form ID; do not change it without the owner's approval
- **CNAME file** — must remain as `drewj.net` for custom domain routing; deleting it will break the domain
- **Resume dates** — the resume page dynamically calculates years of experience using inline `<script>` tags; these compute durations from hardcoded start dates
