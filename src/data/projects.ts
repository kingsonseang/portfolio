// data/projects.ts
export type TechItem = {
  name: string;
  type: "language" | "framework" | "service" | "tool" | "database" | "styling";
};

export type Project = {
  id: string;
  title: string;
  url?: string;              // optional now, personal projects may not be live
  year: number;
  category: "client" | "personal";
  status: "shipped" | "in-progress";
  featured: boolean;         // has a cover image, eligible for home page
  image?: string;            // /images/projects/xxx.png
  role: string;
  overview: string;
  challenge: string;
  highlights: string[];
  tech_stack: TechItem[];
};

export const projects: Project[] = [
  {
    id: "osun-tech-festival",
    title: "Osun Tech Festival",
    url: "osuntechfestival.com",
    year: 2025,
    category: "client",
    status: "shipped",
    featured: true,
    image: "/images/projects/osun-tech-festival.png",
    role: "Frontend Developer",
    overview:
      "Official landing page for Osun Tech Festival 2026, built with a focus on performance, SEO, and mobile responsiveness.",
    challenge:
      "Deliver a high-converting, fast-loading event site that clearly communicates value to attendees and sponsors across all devices.",
    highlights: [
      "Optimised Core Web Vitals for near-perfect Lighthouse scores",
      "Implemented structured data for event rich results in Google Search",
      "Fully responsive layout built mobile-first",
    ],
    tech_stack: [
      { name: "Next.js", type: "framework" },
      { name: "TypeScript", type: "language" },
      { name: "Tailwind CSS", type: "styling" },
      { name: "Vercel", type: "service" },
    ],
  },
  {
    id: "tket-nation",
    title: "Tket Nation",
    url: "tketnation.com",
    year: 2025,
    category: "client",
    status: "shipped",
    featured: false,
    role: "Full-Stack Developer",
    overview:
      "Production-grade ticketing platform supporting event creation, payments, and attendee management.",
    challenge:
      "Design and ship a reliable ticketing platform from scratch that stays stable during high-traffic event launches with concurrent payment processing.",
    highlights: [
      "Achieved ~97% uptime across all events including peak sale periods",
      "Optimised checkout flows to reduce drop-off under load",
      "Handles event creation, QR check-in, and Stripe payment processing",
    ],
    tech_stack: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Node.js", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "Stripe", type: "service" },
    ],
  },
  {
    id: "bole-festival",
    title: "Bole Festival",
    url: "bolefestival.com",
    year: 2025,
    category: "client",
    status: "shipped",
    featured: false,
    image: "/images/projects/bole-festival.png",
    role: "Full-Stack Developer",
    overview:
      "Official festival website and volunteer management system for a 20,000+ attendee cultural event.",
    challenge:
      "Build a festival site that also functions as an operational tool, managing volunteer coordination and live check-in at scale.",
    highlights: [
      "Supported 20,000+ attendees with real-time check-in infrastructure",
      "Integrated volunteer management and role-assignment workflows",
      "Leveraged Tket Nation ticketing for unified payment + attendance tracking",
    ],
    tech_stack: [
      { name: "Next.js", type: "framework" },
      { name: "TypeScript", type: "language" },
      { name: "PostgreSQL", type: "database" },
    ],
  },
  {
    id: "nexacore-financial",
    title: "NexaCore Financial",
    year: 2026,
    category: "personal",
    status: "in-progress",
    featured: false, // flip true once you have a screenshot
    role: "Solo Developer",
    overview:
      "A neobank simulation built as a polyglot monorepo, learning-first over speed.",
    challenge:
      "Go deep on Effect.ts and service boundaries across TypeScript and Go microservices, not just ship a demo.",
    highlights: [
      "Identity, accounts, payments, and ledger services on ConnectRPC",
      "Full Effect.ts commitment across TypeScript services",
      "Drizzle ORM for TS services, sqlc for Go",
    ],
    tech_stack: [
      { name: "TypeScript", type: "language" },
      { name: "Go", type: "language" },
      { name: "Effect.ts", type: "framework" },
      { name: "ConnectRPC", type: "tool" },
    ],
  },
  {
    id: "porkploy",
    title: "porkploy",
    url: "github.com/kingsonseang/porkploy",
    year: 2026,
    category: "personal",
    status: "in-progress",
    featured: false, // flip true once you have a screenshot of the dashboard
    role: "Solo Developer",
    overview:
      "A lightweight self-hosted deployment platform inspired by Render, Dokploy, Railway, and Coolify, built for low-end hardware like t2.micro-class servers.",
    challenge:
      "Give small teams and solo devs a self-hosted Render/Railway alternative that doesn't assume beefy infrastructure, drawing on production orchestration patterns from Spark Africa's Docker/Traefik stack.",
    highlights: [
      "Turborepo monorepo with apps/ and packages/ separation",
      "Biome for linting, lefthook for git hooks, commitlint for conventional commits",
      "Designed for resource-constrained, low-end hardware deployments",
    ],
    tech_stack: [
      { name: "TypeScript", type: "language" },
      { name: "Effect.ts", type: "framework" },
      { name: "Bun", type: "tool" },
      { name: "Turborepo", type: "tool" },
      { name: "Nomad", type: "tool" },
      { name: "Nixpack", type: "tool" },
    ],
  },
  {
    id: "africa-startup-festival",
    title: "Africa Startup Festival",
    url: "sparkafrica.co",
    year: 2026,
    category: "client",
    status: "shipped",
    featured: true,
    image: "/images/projects/africa-startup-festival.png",
    role: "Website, Analytics & Lead Ops",
    overview:
      "Website, analytics, and lead operations for Africa Startup Festival, a high-traffic event connecting founders, investors, and partners.",
    challenge:
      "Own the site end to end while keeping lead capture and CRM sync reliable during a live event, so the ops team could respond to interest as it came in.",
    highlights: [
      "Built and maintained the event website on Next.js and PayloadCMS",
      "Tracked registration, traffic sources, and conversion drop-off across the funnel",
      "Integrated lead capture with CRM workflows for sales and partnerships follow-up",
      "Supported live event ops by monitoring uptime and data flow in real time",
    ],
    tech_stack: [
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "styling" },
      { name: "PayloadCMS", type: "tool" },
      { name: "Django", type: "framework" },
    ],
  },
  {
    id: "africa-technology-expo",
    title: "Africa Technology Expo",
    url: "sparkafrica.co",
    year: 2026,
    category: "client",
    status: "shipped",
    featured: true,
    image: "/images/projects/africa-technology-expo.png",
    role: "Website, Analytics & Lead Ops",
    overview:
      "Website, analytics, and lead operations for Africa Technology Expo, a CMS-driven event platform built for thousands of attendees, exhibitors, and partners.",
    challenge:
      "Keep the marketing site fast and up to date before the expo while ensuring lead data moved cleanly into CRM tools through the live show.",
    highlights: [
      "Built and maintained the event website on Next.js and PayloadCMS",
      "Instrumented analytics across registration and exhibitor journeys",
      "Wired lead capture into CRM integrations for post-event follow-up",
      "Provided ops coverage throughout the live expo to avoid data gaps",
    ],
    tech_stack: [
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "styling" },
      { name: "PayloadCMS", type: "tool" },
      { name: "Django", type: "framework" },
    ],
  },
];
