import { copyFile, mkdir, writeFile } from 'node:fs/promises';

// Pages serves real directories, so /app/ needs its own entry document.
// Vite emits absolute asset URLs under /reversa/ for both copies.
await mkdir(new URL('../dist/app/', import.meta.url), { recursive: true });
await copyFile(new URL('../dist/index.html', import.meta.url), new URL('../dist/app/index.html', import.meta.url));
await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');
console.log('GitHub Pages ready: /reversa/ and /reversa/app/');
