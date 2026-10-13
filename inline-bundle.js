import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distIndexHtml = path.join(__dirname, 'dist', 'index.html');
let html = fs.readFileSync(distIndexHtml, 'utf8');

const distAssetsDir = path.join(__dirname, 'dist', 'assets');
const files = fs.readdirSync(distAssetsDir);
const jsFile = files.find(f => f.endsWith('.js'));

if (!jsFile) {
  console.error('No JS file found in dist/assets!');
  process.exit(1);
}

const jsContent = fs.readFileSync(path.join(distAssetsDir, jsFile), 'utf8');

// Replace external script tag with inline module script tag
const scriptTagRegex = /<script type="module" crossorigin src="\.\/assets\/[^"]+"><\/script>/;
const inlineScript = `<script type="module">\n${jsContent}\n</script>`;

if (scriptTagRegex.test(html)) {
  html = html.replace(scriptTagRegex, inlineScript);
} else {
  html = html.replace('</body>', `${inlineScript}\n</body>`);
}

// Write to root index.html
const outPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Successfully generated standalone root index.html! Byte size:', html.length);
