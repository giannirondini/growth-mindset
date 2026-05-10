# Growth Mindset Card Site

An interactive static card gallery inspired by the Growth Mindset leaflet photos in `assets`.

The deployed version is accessible at this URL:
- https://giannirondini.github.io/growth-mindset/

## Run Locally

Install Node.js, then run:

```sh
npm install
npm run dev
```

Build the static site with:

```sh
npm run build
```

The app has no backend. The rendered cards are recreated with HTML, CSS, TypeScript, and PNG icons; the leaflet photos remain in `assets` as source/reference material.

## Deployment

The site is deployed via the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds and uploads the `dist/` artifact to GitHub Pages.

> **Important:** The repository's GitHub Pages source must be set to **GitHub Actions** (not "Deploy from a branch"). If it is set to "legacy" branch mode, GitHub Pages will serve the raw `index.html` from `main` (which references `/src/main.ts`) and the page will appear empty. Change this in **Settings → Pages → Source → GitHub Actions**, or via the API:
>
> ```sh
> gh api --method PUT repos/<owner>/growth-mindset/pages -f build_type=workflow
> ```
