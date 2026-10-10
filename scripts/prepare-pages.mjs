import { copyFileSync } from 'node:fs';

const dir = 'dist/app/browser/';
// GitHub Pages cerca index.html: prendo la shell dell'app come index
copyFileSync(dir + 'index.csr.html', dir + 'index.html');
// Le rotte non pre-renderizzate tornano alla shell tramite 404.html
copyFileSync(dir + 'index.html', dir + '404.html');
