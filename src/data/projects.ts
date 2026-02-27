export type TechItem = {
  name: string;
  type: "language" | "framework" | "service" | "tool" | "database" | "styling";
};

export type Project = {
  id: string;
  title: string;
  url: string;
  year: number;
  type: "website" | "platform" | "app" | "tool";
  role: string;
  overview: string;
  challenge: string;
  highlights: string[];
  tech_stack: TechItem[];
  color: string; // accent colour for the card
};

export const projects: Project[] = [
  {
    id: "osun-tech-festival",
    title: "Osun Tech Festival",
    url: "osuntechfestival.com",
    year: 2026,
    type: "website",
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
    color: "#f97316", // warm orange
  },
  {
    id: "spark-africa",
    title: "Spark Africa",
    url: "sparkafrica.co",
    year: 2026,
    type: "platform",
    role: "Full-Stack Developer",
    overview:
      "Production platforms for Africa Startup Festival and Africa Technology Expo — including attendee dashboards, matchmaking tools, and event management systems serving 10,000+ attendees.",
    challenge:
      "Build and iterate on a multi-tenant system that handles ticketing, exhibitor management, attendee networking, and live check-ins across multiple simultaneous events in different regions.",
    highlights: [
      "Served 10,000+ attendees across Lagos and Kenya events",
      "Built Spark Portal — a real-time founder-investor matchmaking platform",
      "Designed scalable multi-tenant data models for tickets, booths, and CMS",
      "Integrated AWS for media, auth, and background job processing",
    ],
    tech_stack: [
      { name: "Next.js", type: "framework" },
      { name: "Node.js", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "AWS", type: "service" },
      { name: "TypeScript", type: "language" },
    ],
    color: "#10b981", // emerald green
  },
  {
    id: "straqa",
    title: "Straqa",
    url: "straqa.com",
    year: 2026,
    type: "platform",
    role: "Frontend Lead / Full-Stack Developer",
    overview:
      "Enterprise software suite covering ticketing, e-commerce, payments, and transportation — with scalable admin tools and internal dashboards used daily by business teams.",
    challenge:
      "Lead frontend architecture across a multi-module platform with multiple engineering teams, enforcing shared abstractions and performance standards while shipping new features rapidly.",
    highlights: [
      "Led frontend architecture and delivery across multiple product modules",
      "Built internal admin dashboards and operational tools with TypeScript + Hono",
      "Enforced cross-team component patterns and performance standards",
      "Integrated with AWS services via SST framework",
    ],
    tech_stack: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Hono", type: "framework" },
      { name: "AWS / SST", type: "service" },
    ],
    color: "#6366f1", // indigo
  },
  {
    id: "tket-nation",
    title: "Tket Nation",
    url: "tketnation.com",
    year: 2025,
    type: "platform",
    role: "Full-Stack Developer",
    overview:
      "Production-grade ticketing platform supporting event creation, payments, and attendee management — built to handle real users under live high-traffic conditions.",
    challenge:
      "Design and ship a reliable ticketing platform from scratch that stays stable during high-traffic event launches with concurrent payment processing.",
    highlights: [
      "Achieved ~97% uptime across all events including peak sale periods",
      "Optimised checkout flows to reduce drop-off under load",
      "Handles event creation, QR check-in, and Stripe payment processing",
      "Deployed on Railway with automated CI/CD",
    ],
    tech_stack: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Node.js", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "Stripe", type: "service" },
    ],
    color: "#8b5cf6", // violet
  },
  {
    id: "bole-festival",
    title: "Bole Festival",
    url: "bolefestival.com",
    year: 2025,
    type: "website",
    role: "Full-Stack Developer",
    overview:
      "Official festival website and volunteer management system for a 20,000+ attendee cultural event, integrating Tket Nation infrastructure and real-time check-ins.",
    challenge:
      "Build a festival site that also functions as an operational tool for organisers — managing volunteer coordination, logistics, and live check-in at scale.",
    highlights: [
      "Supported 20,000+ attendees with real-time check-in infrastructure",
      "Integrated volunteer management and role-assignment workflows",
      "Leveraged Tket Nation ticketing for unified payment + attendance tracking",
      "Built with performance and offline resilience in mind for venue use",
    ],
    tech_stack: [
      { name: "Next.js", type: "framework" },
      { name: "TypeScript", type: "language" },
      { name: "PostgreSQL", type: "database" },
      { name: "Tket Nation API", type: "service" },
    ],
    color: "#f59e0b", // amber
  },
];
