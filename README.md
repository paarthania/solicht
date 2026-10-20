# Solicht Energie

Website for [solicht.com](https://solicht.com), built with React and Vite.

## Development

```sh
npm install
npm run dev
```

## Build & deploy

```sh
npm run build
```

This creates the `build/` folder. Every page is pre-rendered into its own HTML file
(`build/projekte/index.html`, …) so search engines see the full content, and
`build/sitemap.xml` is generated from `src/routes.js`.

Upload the **contents** of `build/` to the web root on GoDaddy, including the hidden
`.htaccess` file (enables compression and caching).

## Adding a page

Add an entry to `src/routes.js` (path, component, title, description) and a link in
`src/components/Header.jsx`. The page, its meta tags and the sitemap entry are
generated on the next build.

## Images

All images live in `src/images/` as WebP. Keep new photos at most ~1600px wide and
convert them before adding, e.g. `cwebp -q 78 photo.jpg -o photo.webp`.
