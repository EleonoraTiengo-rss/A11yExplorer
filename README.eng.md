# Pokémon Explorer – RED Edition

An educational site about **web accessibility**, with a touch of Pokémon exploration.

The project aims to go beyond the usual approach of providing a list of rules and requirements. The focus shifts right from the start to the concept of empathy: accessibility is not a feature for a small group of users with disabilities, but the quality that allows *everyone* to use a website, including people who are tired, distracted, on a slow connection, who use a screen reader, the keyboard, a voice assistant, or who simply browse in a different way. Accessibility is also what lets my mother-in-law use the computer with the zoom at 150%, because she wants to buy a dishwasher while lounging on the sofa and without using her reading glasses.

> The interface text is in Italian. This README is in English.

---

## Index

- [Purpose](#purpose)
- [How the site should be approached](#how-the-site-should-be-approached)
- [What it contains](#what-it-contains)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Tech stack](#tech-stack)

---

## Purpose

- Teach web accessibility in a memorable and human way, not just as a checklist.
- Show *why* accessibility matters, with concrete "broken vs. correct" examples.
- Offer developers and designers a set of reusable patterns: semantic HTML, ARIA used correctly, keyboard support, focus management, logical CSS properties, accessible forms, and more.
- Provide a reference on WCAG principles, conformance levels, and the tools and documentation to verify them.

## How the site should be approached

The site is divided into two parts, designed to be used in order.

### 1. Accademia (Learning): theory first

`/learn` is the theoretical part. It explains the ideas, the reasoning and the most common pitfalls:

- what accessibility is and who it is for,
- the four WCAG principles (P.O.U.R.: Perceivable, Operable, Understandable, Robust),
- the WCAG conformance levels (A, AA, AAA),
- semantic HTML versus ARIA,
- logical CSS properties,
- common mistakes and testing tools.

It ends with a short quiz that checks the concepts.

### 2. Laboratorio (Demo): seeing the difference

`/demo` is a mock Pokémon "atlas" website with an **accessibility switch** at the top.

- **Accessible mode (on):** the site is built following the main accessibility rules.
- **Non-accessible mode (off):** the same site, built with the mistakes described in the Learning section (unlabelled controls, `div`s acting as buttons, meaning conveyed by colour alone, broken keyboard handling, popups without focus management, and so on).

The idea is to toggle back and forth between the two modes and notice what changes: first visually, then with the keyboard and, ideally, with a screen reader. The switch state is saved in the URL (`?accessible=true|false`), so a specific mode can be shared or bookmarked.

Suggested path:

1. Read the *Learning* section first.
2. Open *Laboratorio* in accessible mode and try to use it with the keyboard only (Tab, Shift+Tab, Enter, Space, Esc).
3. Switch to non-accessible mode and repeat the same steps. Note what breaks and why.
4. Repeat steps **2.** and **3.** with a screen reader (NVDA is suggested because it is free [download](https://www.nvaccess.org/download/))
5. Go back to the theory section and connect what you saw to the explanation.

## What it contains

### Learning section (`src/app/pages/learn/components/`)

| Component | Topic |
| --- | --- |
| `learn-hero` | Welcome and the central idea: accessibility is for everyone |
| `learn-challenges` | "The Trainers' Challenges": everyday accessibility problems |
| `wcag-principles` | The four WCAG principles (P.O.U.R.) |
| `wcag-levels` | Conformance levels A, AA and AAA, with links to the documentation |
| `html-vs-aria` | Why native HTML comes first, and how to use (and not use) ARIA |
| `css-logical-properties` | Logical CSS properties for layouts independent of reading direction |
| `team-rocket-errors` | "The Team Rocket Traps": common mistakes and how to avoid them |
| `learn-gym` | Practice area, with `ditto-challenge` as an interactive exercise |
| `accessibility-tools` | Tools for testing accessibility |
| `documentation-links` | Reference links (used inside `wcag-levels`) |
| `custom-select`, `native-select` | Custom select control compared with the native `<select>`, used in the `ditto-challenge` exercise |

The quiz (`src/app/components/quiz/quiz.component.ts`) is at the end of the Learning page.

### Demo section (`src/app/pages/demo/components/`)

The demo is a Pokémon atlas. Almost every part exists in two versions: **`demo-*`** (accessible) and **`broken-*`** (non-accessible). `demo.component.html` switches between the two versions with `@if (isAccessible())`.

| Area | Accessible (`demo-`) | Non-accessible (`broken-`) |
| --- | --- | --- |
| Hero | `demo-hero` | `broken-hero` |
| Hero button | `demo-hero-button` | `broken-hero-button` (a `div` with `role="button"` and incorrect keyboard behaviour) |
| Hero navigation | `demo-hero-nav` | `broken-hero-nav` |
| Habitat | `demo-habitat` | `broken-habitat` |
| Species | `demo-species` | `broken-species` |
| Pokédex | `demo-pokedex` | `broken-pokedex` |
| Language notes | `demo-language-notes` | `broken-language-notes` |
| Report form | `demo-report-form` | `broken-report-form` |
| Terminal | `demo-terminal` | `broken-terminal` |
| Popup / dialog | `demo-popup` | `broken-popup` |

`demo-header` contains the accessibility switch (`role="switch"`) and has no "broken" counterpart: it is the control that toggles between the two versions.

### Naming convention

- `learn-*`, `wcag-*`, `html-vs-aria`, etc. belong to the **theory** part.
- `demo-*` is the **accessible** version of a demo element.
- `broken-*` is the **non-accessible** version of the same element, kept "broken" on purpose so its difference can be inspected.

## Project structure

```
src/
├── app/
│   ├── app.ts / app.html            Main shell: header, router outlet, footer
│   ├── app.routes.ts                /learn, /demo, and a fallback to /learn
│   ├── components/
│   │   ├── header.component.*       Top bar and main navigation
│   │   └── quiz/quiz.component.*    Quiz shown at the end of the Learning page
│   └── pages/
│       ├── learn/                   Theory section (Accademia)
│       └── demo/                    Accessible vs non-accessible demo (Laboratorio)
├── assets/images/                   Pokémon images and backgrounds
├── color-scheme.scss                Light / dark theme handling
├── forced-colors.scss               Support for Windows High Contrast mode (forced-colors)
├── rendering.scss                   Scaling for 200% OS text size and touch target sizes
├── styles.css                       Global styles (Tailwind)
├── server.ts                        Express server for SSR
└── main.ts / main.server.ts         Browser and server bootstrap
```

The app also supports **dark mode** and **high contrast mode (forced-colors)**, which are part of the topics covered.

## Getting started

### Prerequisites

- **Node.js** – a recent LTS version (Angular 21 requires Node 20.19+ or 22.12+).
- **npm** (installed together with Node).

### 1. Install the dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

This runs `ng serve` and opens the app at `http://localhost:4200`. Changes reload automatically.


### Production build

```bash
npm run build
```

The output is generated in `dist/`. The build is configured for server output (`outputMode: "server"`) and produces a static browser bundle plus a server bundle for SSR.


## Tech stack

- **Angular 21** (standalone components, signals, `OnPush` change detection, the new `@if` control-flow syntax)
- **Angular Material** (icons)
- **Tailwind CSS 4** (via PostCSS)
- **Angular SSR** with Express 5
- **TypeScript 5.9**, **ESLint 9** with `angular-eslint`, **Vitest**

---

## A note on the approach

Accessibility is not a separate layer added at the end, and it does not only concern users with permanent disabilities. Temporary, situational and changing needs apply to everyone. This project tries to make that visible: the same page, built in two ways, so the cost of getting it wrong is easy to see and the cost of getting it right turns out to be small.
