import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SITE_URL = "https://solicht.com";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "build");
const ssrDir = path.join(root, "build-ssr");

const { render, routes } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const replaceOnce = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`prerender: ${pattern} not found in index.html`);
  }
  return html.replace(pattern, () => replacement);
};

for (const { path: route, title, description } of routes) {
  let html = template;
  html = replaceOnce(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(title)}</title>`,
  );
  html = replaceOnce(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  );
  html = replaceOnce(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${SITE_URL}${route}" />`,
  );
  html = replaceOnce(
    html,
    /<div id="root"><\/div>/,
    `<div id="root">${render(route)}</div>`,
  );

  const file = path.join(outDir, route, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`prerendered ${route}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(({ path: route }) => `  <url><loc>${SITE_URL}${route}</loc></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
fs.rmSync(ssrDir, { recursive: true, force: true });
