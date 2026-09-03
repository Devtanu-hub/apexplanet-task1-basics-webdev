# Devtanu Das — Web Developer Intern Portfolio

A single-page personal portfolio built for **Task 1** of the ApexPlanet Software Pvt. Ltd. Web Development Internship (45-day program). The site introduces Devtanu, outlines the core skills being learned (HTML, CSS, JavaScript), and includes a small interactive JavaScript demo.

## 🔗 Live Preview

Open `index.html` directly in a browser, or serve the folder with any static file server (see [Getting Started](#getting-started)).

## 📁 Project Structure

```
.
├── index.html    # Page markup and content
├── style.css     # All styling (theme variables, layout, responsive rules)
├── script.js     # "Say hello" button interaction
├── images.jpg              # HTML/CSS/JS logo graphic (referenced, not included)
├── profile.jpg              # Profile portrait (referenced, not included)
└── apexplanet-banner.jpg    # Internship program banner (referenced, not included)
```

> **Note:** `images.jpg`, `profile.jpg`, and `apexplanet-banner.jpg` are referenced by `index.html` but were not part of this upload. Add your own images with these filenames (or update the `src` attributes in `index.html`) for the page to render fully.

## ✨ Features

- **Responsive layout** — a fluid hero grid, three-column skills section, and an about card that all collapse gracefully on tablet and mobile breakpoints (`860px` and `560px`).
- **Custom design system** — CSS custom properties (`:root` variables) define a consistent palette (deep teal, amber, sage), type scale (Fraunces for display, Inter for body, JetBrains Mono for accents), and spacing.
- **Sections:**
  - **Hero** — name, tagline, intro copy, and an inline SVG illustration.
  - **Focus** — three cards covering HTML, CSS, and JavaScript, each with a hand-drawn SVG icon.
  - **About** — a snapshot card with a profile photo, bio, and a `<dl>` of quick facts (program, current stage, stack).
  - **Say Hello** — a button wired up in `script.js` that shows a random greeting via `alert()` and also writes it to the page (`aria-live="polite"`) so the message persists after the alert is dismissed.
  - **Find Me** — links out to GitHub, LinkedIn, and email.
- **Accessibility touches** — a skip-to-content link, `aria-hidden` on decorative SVGs, `aria-live` for the greet response, and a `prefers-reduced-motion` media query that disables all transitions for users who request it.
- **No dependencies** — plain HTML, CSS, and vanilla JavaScript. The only external resources are Google Fonts.

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, Grid, Flexbox, media queries) |
| Behavior | Vanilla JavaScript (DOM APIs, event listeners) |
| Fonts | [Fraunces](https://fonts.google.com/specimen/Fraunces), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts |

## 🚀 Getting Started

1. Clone or download this folder.
2. Make sure `images.jpg`, `profile.jpg`, and `apexplanet-banner.jpg` are present in the same directory as `index.html` (see note above).
3. Open `index.html` in a browser — no build step or server required.

Optional local server (for correct relative-path/image loading in some setups):

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## 🎨 Customization

- **Colors & fonts:** edit the CSS variables at the top of `style.css` (`:root { ... }`).
- **Copy:** all text content lives directly in `index.html`.
- **Greeting messages:** edit the `messages` array in `script.js`.
- **Links:** update the GitHub, LinkedIn, and email URLs in the "Find Me" section of `index.html`.

## 📌 About This Task

This build satisfies Task 1 of the internship brief:
- Basic HTML page structure with semantic sections
- CSS styling with a cohesive visual theme and responsive design
- One small JavaScript interaction (click → response)

## 👤 Author

**Devtanu Das**
Web Development Intern, ApexPlanet Software Pvt. Ltd. — 2026
[LinkedIn](https://www.linkedin.com/in/devtanu-das-50b945391/)
