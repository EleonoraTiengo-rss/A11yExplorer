# Pokémon Explorer – RED Edition

Un sito didattico sull'**accessibilità web**, con un tocco di esplorazione Pokémon.

Il progetto si propone di andare oltre il tipico approccio volto a fornire un elenco di regole e requisiti. Il focus si sposta fin da subito sul concetto di empatia: l'accessibilità non è una funzione per un piccolo gruppo di utenti con disabilità, ma la qualità che permette a *tutti* di usare un sito web, comprese le persone stanche, distratte, con una connessione lenta, che usano uno screen reader, la tastiera, un assistente vocale, o semplicemente un modo diverso di navigare. L'accessibilità è anche quella che permette a mia suocera di usare il pc con lo zoom al 150%, perchè vuole comprarsi la lavastoviglie spaparanzata sul divano e senza usare gli occhiali da lettura.

Clicca [qui](https://eleonoratiengo-rss.github.io/A11yExplorer/) per accedere al sito live!

> Il testo dell'interfaccia è in italiano. Questo README è in italiano.

---

## Indice

- [Scopo](#scopo)
- [Come va affrontato il sito](#come-va-affrontato-il-sito)
- [Cosa contiene](#cosa-contiene)
- [Struttura del progetto](#struttura-del-progetto)
- [Avvio del progetto](#avvio-del-progetto)
- [Pubblicazione su GitHub Pages](#pubblicazione-su-github-pages)
- [Stack tecnologico](#stack-tecnologico)
- [Contributori](#contributori)

---

## Scopo

- Insegnare l'accessibilità web in modo memorabile e umano, non solo come checklist.
- Mostrare *perché* l'accessibilità conta, con esempi concreti "rotto vs. corretto".
- Offrire a sviluppatori e designer una serie di pattern riutilizzabili: HTML semantico, ARIA usato correttamente, supporto da tastiera, gestione del focus, proprietà CSS logiche, form accessibili e altro.
- Fornire un riferimento sui principi WCAG, sui livelli di conformità e sugli strumenti e la documentazione per verificarli.

## Come va affrontato il sito

Il sito è diviso in due parti, pensate per essere usate in ordine.

### 1. Accademia (Apprendimento): prima la teoria

`/learn` è la parte teorica. Spiega le idee, il ragionamento e le trappole più comuni:

- che cos'è l'accessibilità e per chi è,
- i quattro principi WCAG (P.O.U.R.: Percepibile, Utilizzabile, Comprensibile, Robusto),
- i livelli di conformità WCAG (A, AA, AAA),
- HTML semantico contro ARIA,
- le proprietà CSS logiche,
- errori comuni e strumenti per i test.

Si conclude con un breve quiz che verifica i concetti.

### 2. Laboratorio (Demo): vedere la differenza

`/demo` è un finto sito "atlante" Pokémon con un **interruttore di accessibilità** in alto.

- **Modalità accessibile (attiva):** il sito è costruito seguendo le regole principali di accessibilità.
- **Modalità non accessibile (disattiva):** lo stesso sito, costruito con gli errori descritti nella sezione Accademia (controlli senza etichetta, `div` che fanno da pulsanti, significato veicolato solo dal colore, gestione della tastiera non funzionante, popup senza gestione del focus, e così via).

L'idea è passare avanti e indietro tra le due modalità e notare cosa cambia: prima visivamente, poi con la tastiera e, idealmente, con uno screen reader. Lo stato dell'interruttore è salvato nell'URL (`?accessible=true|false`), quindi una specifica modalità può essere condivisa o salvata nei preferiti.

Percorso suggerito:

1. Leggi prima la sezione *Accademia*.
2. Apri *Laboratorio* in modalità accessibile e prova a usarlo solo con la tastiera (Tab, Shift+Tab, Invio, Spazio, Esc). 
3. Passa alla modalità non accessibile e ripeti le stesse operazioni. Annota cosa si rompe e perché.
4. Ripeti step **2.** e step **3.** con uno screen reader (suggerito NVDA in quanto gratuito [download](https://www.nvaccess.org/download/))
5. Torna alla sezione di teoria e collega ciò che hai visto alla spiegazione.

## Cosa contiene

### Sezione Accademia (`src/app/pages/learn/components/`)

| Componente | Argomento |
| --- | --- |
| `learn-hero` | Benvenuto e idea centrale: l'accessibilità è per tutti |
| `learn-challenges` | "Le sfide degli Allenatori": problemi di accessibilità quotidiani |
| `wcag-principles` | I quattro principi WCAG (P.O.U.R.) |
| `wcag-levels` | Livelli di conformità A, AA e AAA, con link alla documentazione |
| `html-vs-aria` | Perché l'HTML nativo viene prima e come usare (e non usare) ARIA |
| `css-logical-properties` | Proprietà CSS logiche per layout indipendenti dalla direzione di lettura |
| `team-rocket-errors` | "Le trappole del Team Rocket": errori comuni e come evitarli |
| `learn-gym` | Area di pratica, con `ditto-challenge` come esercizio interattivo |
| `accessibility-tools` | Strumenti per testare l'accessibilità |
| `documentation-links` | Link di riferimento (usato dentro `wcag-levels`) |
| `custom-select`, `native-select` | Controllo select personalizzato rispetto al `<select>` nativo, usati nell'esercizio `ditto-challenge` |

Il quiz (`src/app/components/quiz/quiz.component.ts`) si trova alla fine della pagina di Apprendimento.

### Sezione Laboratorio (`src/app/pages/demo/components/`)

La demo è un atlante Pokémon. Quasi ogni parte esiste in due versioni: **`demo-*`** (accessibile) e **`broken-*`** (non accessibile). `demo.component.html` alterna le due versioni con `@if (isAccessible())`.

| Area | Accessibile (`demo-`) | Non accessibile (`broken-`) |
| --- | --- | --- |
| Hero | `demo-hero` | `broken-hero` |
| Pulsante dell'hero | `demo-hero-button` | `broken-hero-button` (un `div` con `role="button"` e comportamento errato da tastiera) |
| Navigazione dell'hero | `demo-hero-nav` | `broken-hero-nav` |
| Habitat | `demo-habitat` | `broken-habitat` |
| Specie | `demo-species` | `broken-species` |
| Pokédex | `demo-pokedex` | `broken-pokedex` |
| Note sulle lingue | `demo-language-notes` | `broken-language-notes` |
| Modulo di segnalazione | `demo-report-form` | `broken-report-form` |
| Terminale | `demo-terminal` | `broken-terminal` |
| Popup / dialog | `demo-popup` | `broken-popup` |

`demo-header` contiene l'interruttore di accessibilità (`role="switch"`) e non ha una controparte "broken": è il controllo che alterna le due versioni.

### Convenzione di naming

- `learn-*`, `wcag-*`, `html-vs-aria`, ecc. appartengono alla parte **teorica**.
- `demo-*` è la versione **accessibile** di un elemento della demo.
- `broken-*` è la versione **non accessibile** dello stesso elemento, mantenuta di proposito "rotta" per poterne ispezionare la differenza.

## Struttura del progetto

```
src/
├── app/
│   ├── app.ts / app.html            Shell principale: header, router outlet, footer
│   ├── app.routes.ts                /learn, /demo, e un fallback su /learn
│   ├── components/
│   │   ├── header.component.*       Barra superiore e navigazione principale
│   │   └── quiz/quiz.component.*    Quiz mostrato alla fine della pagina di Apprendimento
│   └── pages/
│       ├── learn/                   Sezione teorica (Accademia)
│       └── demo/                    Demo accessibile vs non accessibile (Laboratorio)
├── assets/images/                   Immagini Pokémon e sfondi
├── color-scheme.scss                Gestione di tema chiaro / scuro
├── forced-colors.scss               Supporto alla modalità contrasto elevato di Windows (forced-colors)
├── rendering.scss                   Scala per il testo del sistema al 200% e dimensioni dei target touch
├── styles.css                       Stili globali (Tailwind)
├── server.ts                        Server Express per l'SSR
└── main.ts / main.server.ts         Bootstrap per browser e server
```

L'app supporta anche la **modalità scura**, la **modalità contrasto elevato (forced-colors)**, che fanno parte dei temi trattati.

## Avvio del progetto

### Prerequisiti

- **Node.js** – una versione LTS recente (Angular 21 richiede Node 20.19+ o 22.12+).
- **npm** (installato insieme a Node).

### 1. Installa le dipendenze

```bash
npm install
```

### 2. Avvia il server di sviluppo

```bash
npm start
```

Esegue `ng serve` e apre l'app su `http://localhost:4200`. Le modifiche vengono ricaricate automaticamente.


### Build di produzione

```bash
npm run build
```

L'output viene generato in `dist/`. La build è configurata per l'output server (`outputMode: "server"`) e produce un bundle statico per il browser più un bundle server per l'SSR.

### Pubblicazione su GitHub Pages

Il sito è pubblicato su GitHub Pages dal branch `gh-pages`, all'indirizzo `https://eleonoratiengo-rss.github.io/A11yExplorer/`. Il branch `main` non viene pubblicato direttamente.

**Pubblicazione con un solo comando**

```bash
npm run deploy
```

Lo script `deploy` in `package.json` esegue in sequenza la build, la preparazione dei file e il push su `gh-pages`.

**Pubblicazione a mano, passo per passo**

1. Assicurati di avere tutte le modifiche salvate e di essere nella cartella del progetto.
2. Genera la build con il percorso base del sito:
   ```bash
   npm run build -- --configuration production --base-href /A11yExplorer/
   ```
   In Windows, se usi Git Bash, premetti `MSYS_NO_PATHCONV=1` al comando: altrimenti `/A11yExplorer/` viene riscritto in un percorso di sistema e la build sbaglia.
3. Copia `index.csr.html` in `index.html` e in `404.html`, dentro `dist/app/browser/`. GitHub Pages cerca `index.html`, e `404.html` serve per le rotte che non sono pre-renderizzate. Lo script `scripts/prepare-pages.mjs` fa esattamente questo:
   ```bash
   node scripts/prepare-pages.mjs
   ```
4. Pubblica il contenuto di `dist/app/browser/` sul branch `gh-pages`:
   ```bash
   npx gh-pages -d dist/app/browser
   ```
5. Attendi uno o due minuti e controlla il sito. Il deploy aggiorna il branch `gh-pages`, non `main`.

**Nota:** `gh-pages` non rimuove dal branch i file il cui nome inizia con il punto (`.gitignore`, `.env.example` e simili) se erano già presenti. Se li noti, rimuovili dal branch a mano.


## Stack tecnologico

- **Angular 21** (componenti standalone, signal, change detection `OnPush`, nuova sintassi di controllo `@if`)
- **Angular Material** (icone)
- **Tailwind CSS 4** (tramite PostCSS)
- **Angular SSR** con Express 5
- **TypeScript 5.9**, **ESLint 9** con `angular-eslint`, **Vitest**

## Contributori

- [DanielaOrtenzi](https://github.com/DanielaOrtenzi)
- [EleonoraTiengo-rss](https://github.com/EleonoraTiengo-rss)


---

## Una nota sull'approccio

L'accessibilità non è un livello separato aggiunto alla fine, e non riguarda solo gli utenti con disabilità permanenti. Si applicano bisogni temporanei, situazionali e mutevoli, che riguardano tutti. Questo progetto cerca di renderlo visibile: la stessa pagina, costruita in due modi, così il costo di sbagliare è facile da vedere e il costo di farla bene risulta piccolo.
