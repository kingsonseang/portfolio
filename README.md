# Solomon Momoh — Portfolio

> [kingsonseng.space](https://kingsonseang.space) · Full-Stack Software Engineer

A modern portfolio built with **Astro**, **React**, **Tailwind CSS v4**, **Framer Motion**, and **GSAP** — featuring a hand-drawn SVG logo loader, animated project cards, a project detail dialog, and Calendly scheduling integration.

## ✨ Highlights

- **GSAP SVG loader** — draws the logo signature stroke-by-stroke then wipes off the screen
- **Project cards & dialog** — Framer Motion animated modal with full project details
- **Scroll entrance animations** — sections fade + slide in on scroll post-loader
- **Calendly contact page** — inline booking widget
- **Fully responsive** — mobile-first layout

## 🛠 Stack

| Layer      | Technology                                                                 |
| ---------- | -------------------------------------------------------------------------- |
| Framework  | [Astro](https://astro.build)                                               |
| UI Library | [React](https://react.dev)                                                 |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com)                                 |
| Animations | [GSAP](https://gsap.com) + [Framer Motion](https://www.framer.com/motion/) |
| Icons      | [Lucide React](https://lucide.dev)                                         |
| Scheduling | [Calendly](https://calendly.com)                                           |

## 🚀 Getting Started

```bash
git clone https://github.com/kingsonseang/portfolio.git
cd portfolio
pnpm install
pnpm dev        # → http://localhost:4321
pnpm build      # production build
pnpm preview    # preview production build
```

## 📁 Structure

```
src/
├── components/
│   ├── Home/          # Hero, Header, RecentProjects, Clients
│   ├── ui/            # PageLoader, AnimatedButton, etc.
│   ├── AnimatedSection.tsx
│   └── ProjectDialog.tsx
├── data/
│   └── projects.ts    # Single source of truth for all projects
├── pages/
│   ├── index.astro
│   ├── projects.astro
│   ├── about.astro
│   └── contact.astro
└── providers/
    └── loading.tsx    # Orchestrates the GSAP loader lifecycle
```

## 📬 Connect

[![Portfolio](https://img.shields.io/badge/Portfolio-kingsonseang.space-242424?style=flat-square)](https://kingsonseang.space)
[![Email](https://img.shields.io/badge/Email-kingsonseang%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:kingsonseang@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-solomon--momoh-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/solomon-momoh)

---

MIT License © Solomon Momoh
