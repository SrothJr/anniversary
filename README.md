# Seven Years, One Beautiful Story

A romantic, dependency-free anniversary website for Nazim & Mithila.

## Customize

- Replace the visual placeholders in `index.html` with your own photos.
- Or simply add photos to `images/hero/`, `images/timeline/`, and `images/gallery/` using the filenames documented in `images/README.md`.
- Update the timeline copy and letter in `index.html`.
- Update the seven reasons in `script.js`.
- Adjust colors and typography at the top of `styles.css`.
- The entry password is currently `26november`; change `ACCESS_PASSWORD` near the top of `script.js` to your own secret.

## Run locally

Because this is a static site, open `index.html` directly or run:

```bash
npx serve .
```

## GitHub Pages

In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save. The included `.nojekyll` file keeps static assets working correctly.

> The password gate is client-side, so it is suitable for a personal surprise but not for truly confidential information. A static GitHub Pages site cannot securely hide its source code.
