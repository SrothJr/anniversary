# Seven Years, One Beautiful Story

A romantic, dependency-free anniversary website for Nazim & Mithila.

## Customize

- Replace the visual placeholders in `index.html` with your own photos.
- Or simply add photos to `images/hero/`, `images/timeline/`, and `images/gallery/` using the filenames documented in `images/README.md`.
- Update the timeline copy and letter in `index.html`.
- Update the seven reasons in `script.js`.
- Adjust colors and typography at the top of `styles.css`.
- The entry password is stored as a SHA-256 hash in `script.js`, so the plaintext password is not present in the public repository. To change it, hash the lowercase password with `printf 'your-password' | sha256sum` and replace `ACCESS_PASSWORD_HASH`.

## Run locally

Because this is a static site, open `index.html` directly or run:

```bash
npx serve .
```

## GitHub Pages

In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save. The included `.nojekyll` file keeps static assets working correctly.

> The password gate remains client-side, so it is suitable for a personal surprise but not for truly confidential information. A static GitHub Pages site cannot provide server-side authentication.
