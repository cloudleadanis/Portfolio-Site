# Portfolio-Site

This repository contains a single‑page personal portfolio for Anis Ali Khan. The site is a clean, monochrome design inspired by high‑quality Apple website patterns and optimized for clarity and performance.

Files added
- index.html — main site
- assets/css/style.css — site styles
- assets/js/main.js — JS for modal, smooth scroll, reveal animations, highlight.js init
- assets/images/* — placeholder SVGs for portrait and project thumbnails

Quick start
1. Enable GitHub Pages:
   - In your repository settings > Pages, set Source to `main` branch and folder `/(root)`.
   - Save. Your site will be published at `https://<username>.github.io/Portfolio-Site/`.

2. Replace placeholder images
   - Replace files in `assets/images/` with real screenshots and a portrait. Use similar filenames or update `index.html` accordingly.

3. Edit projects and links
   - Update project descriptions and repo links in `index.html`. The modal detail content is defined in `assets/js/main.js` under the `projects` object.

Twitch embed note
- The embedded Twitch player requires the hosting domain to be included in the `parent` query parameter. When hosted on GitHub Pages the `parent` should be `github.io`. The iframe in `index.html` is preconfigured for that.

Accessibility & performance
- The site includes basic keyboard interactions for modals and smooth scrolling, and lazy loading for images.

If you want, I can:
- Add a CI workflow to run a basic HTML validator.
- Create PNG/JPEG screenshots from the SVG placeholders.
- Add a small contact form (Formspree) instead of mailto.