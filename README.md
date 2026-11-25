# Seven Years, One Beautiful Story

A romantic, dependency-free anniversary website for Nazim & Mithila.

## Customize

- Replace the visual placeholders in `index.html` with your own photos.
- Or simply add photos to `images/hero/`, `images/timeline/`, and `images/gallery/` using the filenames documented in `images/README.md`.
- Update the timeline copy and letter in `index.html`.
- Update the seven reasons in `script.js`.
- Adjust colors and typography at the top of `styles.css`.

## Run locally

Because this is a static site, open `index.html` directly or run:

```bash
npx serve .
```

## GitHub Pages

In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save. The included `.nojekyll` file keeps static assets working correctly.

> The theme toggle remembers its setting in the browser. This version intentionally has no real password protection because a client-only password cannot securely protect static content.
