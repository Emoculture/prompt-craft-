// Produces a single deployable HTML file, keeping source files easy to maintain.
const fs = require("node:fs");
const path = require("node:path");
const root = __dirname;
let html = fs.readFileSync(path.join(root, "source", "index.html"), "utf8");
html = html.replace(
  /<link\s+rel="stylesheet"\s+href="styles.css"\s*\/?>/,
  () =>
    "<style>\n" +
    fs.readFileSync(path.join(root, "styles.css"), "utf8") +
    "\n</style>",
);
html = html.replace(/\s*<script src="app.js" defer><\/script>/, "");
html = html.replace(
  "</body>",
  () =>
    "<script>\n" +
    fs.readFileSync(path.join(root, "app.js"), "utf8") +
    "\n</script>\n</body>",
);
fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "index.html"), html);
fs.writeFileSync(path.join(root, "index.html"), html);
console.log("Built dist/index.html");
