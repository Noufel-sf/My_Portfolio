import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../Components/Seo";

// ── ICONS ────────────────────────────────────────────────────────────────────
const Icon = ({ d, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
);
const GITHUB =
  "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z";
const LINKEDIN =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
const INSTAGRAM =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

const ARROW = "M7 17L17 7M17 7H7M17 7v10";
const MENU = "M4 6h16M4 12h16M4 18h16";
const CLOSE = "M6 18L18 6M6 6l12 12";

const ArrowSvg = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d={ARROW} />
  </svg>
);
// ── DATA ─────────────────────────────────────────────────────────────────────
const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Rest APIs",
  "jest",
  "mysql",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "React Native",
  "Tailwind CSS",
  "GraphQL",
  "Docker",
  "Redis",
  "Prisma",
  "Git",
];
const PROJECTS = [
  {
    name: "Full stack Ecommerce project",
    desc: "A solution for stores to turn thier work online",
    date: "Oct 2026",
    tag: "B2B",
  },
  {
    name: "Mern stack Social media website",
    desc: "social media website to practise websocket and enhance my mern stack skills",
    date: "Sept 2025",
    tag: "Personal",
  },
  {
    name: "Association club website",
    desc: "A landing pages for a club website to facilate registerations and organizing human resources",
    date: "2024",
    tag: "Freelance",
  },
];
const EDUCATION = [
  {
    name: "Bachlor degree",
    school: "Abd el hamid mehri constantine 2",
    year: "present",
    primary: true,
  },

  {
    name: "Agile scrum Certificate",
    school: "simplilearn",
    year: "2025",
    primary: false,
  },
];
const EXPERIENCE = [
  {
    role: "Mern Stack Developer",
    company: "freelence",
    period: "2024 – Present",
    desc: "Building scalable APIs and responsive UIs with React.js & express JS.",
    current: true,
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2024 – 2026",
    desc: "Delivered 5+ client projects with React js, Next js TailwindCss, and modern tooling.",
    current: false,
  },
];
const SOCIALS = [
  { icon: GITHUB, label: "GitHub", href: "https://github.com/Noufel-sf" },
  {
    icon: LINKEDIN,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/noufel-seif-el-islam-nasri/",
  },
  {
    icon: INSTAGRAM,
    label: "Instagram",
    href: "https://www.instagram.com/noufel_sf?igsh=dGFpbGJyamVmbzky",
  },
];

// ── VARIANTS ─────────────────────────────────────────────────────────────────
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const up = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── MAGNETIC LINK ────────────────────────────────────────────────────────────
function Magnetic({ href, children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x: sx, y: sy }}
      onMouseMove={move}
      onMouseLeave={leave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

// ── CARD ─────────────────────────────────────────────────────────────────────
function Card({ children, className = "", id }) {
  return (
    <div
      id={id}
      className={`bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#2e2e2e] hover:bg-[#141414] ${className}`}
    >
      {children}
    </div>
  );
}

// ── BADGE ────────────────────────────────────────────────────────────────────
const Badge = ({ children, muted }) =>
  muted ? (
    <span className="inline-flex items-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-2 py-0.5 font-mono text-[10px] tracking-wider text-neutral-600">
      {children}
    </span>
  ) : (
    <span className="inline-flex items-center bg-[#7A93A8]/10 border border-[#7A93A8]/25 rounded-md px-2 py-0.5 font-mono text-[10px] tracking-wider text-[#7A93A8]">
      {children}
    </span>
  );

// ── PILL ─────────────────────────────────────────────────────────────────────
const Pill = ({ label }) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className="inline-flex items-center bg-trasparent border border-1 border-gray-800   rounded-full px-3 py-1 font-mono text-[11px] font-bold text-gray-700 whitespace-nowrap  transition-all duration-200 cursor-pointer"
  >
    {label}
  </motion.span>
);

// ── TECH STACKS DATA & ICONS ────────────────────────────────────────────────
const TECH_STACK_ROW_1 = [
  {
    name: "Next.js",
    category: "Fullstack",
    icon: (
      <svg viewBox="0 0 180 180" width="28" height="28" fill="none">
        <circle cx="90" cy="90" r="90" fill="#050505" />
        <path d="M149.508 157.438L69.147 54H54V125.97H66.0136V69.3831L139.999 164.845C143.333 162.614 146.509 160.134 149.508 157.438Z" fill="url(#next_grad)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#next_grad_2)" />
        <defs>
          <linearGradient id="next_grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="next_grad_2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="28" height="28">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: (
      <div className="w-6 h-6 rounded-md bg-[#3178C6] flex items-center justify-center font-bold text-white text-[12px] font-mono tracking-tight shadow-md">
        TS
      </div>
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 256 289" width="26" height="26">
        <path d="M128 0L256 73.9V215.1L128 289L0 215.1V73.9L128 0Z" fill="#539E43" fillOpacity="0.25" stroke="#539E43" strokeWidth="14" />
        <text x="128" y="168" fill="#539E43" fontSize="96" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">JS</text>
      </svg>
    ),
  },
  {
    name: "NestJS",
    category: "Architecture",
    icon: (
      <svg viewBox="0 0 256 256" width="26" height="26">
        <path d="M226.7 54.4c-9.8-15.6-26.2-26.6-45-30.2-18.8-3.6-38.2 1-53.1 12.6L44.2 98.7C33 107.5 25.8 120.3 24.2 134.4c-1.6 14.1 2.5 28.1 11.3 39.3l21.4 27.2c7.8 9.9 19.1 16.1 31.6 17.4 12.5 1.3 25-2.5 34.9-10.4l84.4-67.2c11.2-8.9 18.4-21.7 20-35.8 1.6-14.1-2.5-28.1-11.1-39.3v-1.2zm-97.9 31.5L62.7 139c-3.7 3-8.4 4.4-13.1 3.9-4.7-.5-8.9-2.8-11.8-6.6l-21.4-27.2c-3.3-4.2-4.9-9.5-4.3-14.8.6-5.3 3.3-10.1 7.5-13.4l84.4-67.2c5.6-4.4 12.9-6.1 19.9-4.8 7 1.3 13.2 5.5 16.8 11.3l8.1 13.9-12 7.8z" fill="#E0234E" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    category: "Styling",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#4169E1" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#47A248">
        <path d="M17.193 9.555c-1.292-4.339-4.39-6.702-4.715-7.555-.477 1.332-1.562 3.195-2.733 4.908-1.637 2.394-3.328 4.869-2.646 7.917.653 2.923 2.87 5.093 5.438 6.075-.121-.777-.245-1.554-.245-2.33 0-4.004 2.298-6.19 4.896-8.995.004-.007.004-.014.005-.02z" />
      </svg>
    ),
  },
  {
    name: "Flutter",
    category: "Mobile",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#40D0FD">
        <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zM14.314 11.229l-5.657 5.657 5.657 5.657h7.372L16 16.886l5.686-5.657h-7.372z" />
      </svg>
    ),
  },

];

const TECH_STACK_ROW_2 = [
  {
    name: "Express.js",
    category: "Backend",
    icon: (
      <div className="w-6 h-6 rounded-md bg-[#222] border border-[#333] flex items-center justify-center font-bold text-white text-[10px] font-mono">
        ex
      </div>
    ),
  },
  {
    name: "React Native",
    category: "Mobile",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#40D0FD">
        <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zM14.314 11.229l-5.657 5.657 5.657 5.657h7.372L16 16.886l5.686-5.657h-7.372z" />
      </svg>
    ),
  },
  {
    name: "Redis",
    category: "Caching",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#DC382D">
        <path d="M22.5 15.5l-10.5 6-10.5-6v-7l10.5-6 10.5 6v7zm-10.5 3.5l7-4-7-4-7 4 7 4z" />
      </svg>
    ),
  },
  {
    name:"java script",
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#f7df1e" stroke="#2D3748" strokeWidth="1.5">
        <path d="M12 2L2 20h20L12 2zm0 4.5l6.5 11.5h-13L12 6.5z" />
      </svg>
    ),
  },
  {
    name: "Prisma",
    category: "ORM",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#2D3748" stroke="#5A67D8" strokeWidth="1.5">
        <path d="M12 2L2 20h20L12 2zm0 4.5l6.5 11.5h-13L12 6.5z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185" />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    category: "API",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#E10098">
        <path d="M12 2l8.66 5v10L12 22 3.34 17V7L12 2zm0 2.31L5.34 8.16v7.68L12 19.69l6.66-3.85V8.16L12 4.31z" />
      </svg>
    ),
  },

  {
    name: "Dart",
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#0175C2">
        <path d="M4.1 4.1l11.7 11.7-4.1 4.1L0 8.2l4.1-4.1zm15.8 4.1L8.2 0 4.1 4.1l11.7 11.7 4.1-4.1v-.1z" />
      </svg>
    ),
  },

  {
    name: "Git",
    category: "VCS",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#F05032">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.9 4.5l2.7 2.7c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.6 2.6c.6-.2 1.3 0 1.8.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.6c.2.1.4.3.5.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.4-.4.6-.5V8.7c-.2-.1-.4-.3-.6-.5-.5-.5-.7-1.2-.5-1.8L8.1 3.7 2.4 9.4c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.5.6-1.5 0-2.1z" />
      </svg>
    ),
  },
  {
    name: "Jest",
    category: "Testing",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#C21325">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    ),
  },
];

// ── GITHUB CONTRIBUTION HEATMAP MATRIX ──────────────────────────────────────
const GITHUB_CONTRIBUTIONS = [
  [1, 0, 0, 3, 0, 0, 2, 2, 3, 1, 1, 0, 2, 0, 3, 2, 3, 1],
  [0, 2, 1, 1, 2, 3, 0, 2, 1, 2, 0, 1, 3, 2, 1, 0, 2, 3],
  [2, 2, 3, 3, 1, 2, 3, 0, 1, 1, 1, 3, 0, 1, 2, 3, 3, 2],
  [0, 1, 0, 0, 1, 2, 0, 3, 2, 2, 0, 2, 1, 0, 3, 2, 1, 4],
];

const GITHUB_LEVEL_COLORS = [
  "bg-[#151515] border-[#222222]",
  "bg-[#0e4429] border-[#15603b]",
  "bg-[#006d32] border-[#0c8c43]",
  "bg-[#26a641] border-[#39d353]/70",
  "bg-[#39d353] border-[#5ff378]",
];

// ── 3D EVOLVING SKILLS BOOKS DATA ───────────────────────────────────────────
const EVOLVING_SKILLS_BOOKS = [
  {
    title: "LEETCODE",
    badge: "DSA",
    gradient: "from-[#C94A4A] via-[#B83E3E] to-[#8E2828]",
    border: "border-[#E86C6C]/40",
    badgeStyle: "bg-white/15 border-white/30 text-white",
    desc: "Problem Solving, Data Structures & Algorithm Optimization",
  },
  {
    title: "FRONTEND",
    badge: "UI",
    gradient: "from-[#2E8B9E] via-[#247585] to-[#17525E]",
    border: "border-[#4AB8CE]/40",
    badgeStyle: "bg-white/15 border-white/30 text-white",
    desc: "React 19, Next.js 15, Tailwind, Framer Motion & Responsive Design",
  },
  {
    title: "BACKEND",
    badge: "API",
    gradient: "from-[#D49E35] via-[#BA8624] to-[#8C6314]",
    border: "border-[#E5B552]/40",
    badgeStyle: "bg-white/15 border-white/30 text-white",
    desc: "Node.js, Express, PostgreSQL, NestJS, REST APIs & Redis Caching",
  },
  {
    title: "AI / ML",
    badge: "AI",
    gradient: "from-[#5A9474] via-[#4A7F62] to-[#335B44]",
    border: "border-[#7CB997]/40",
    badgeStyle: "bg-white/15 border-white/30 text-white",
    desc: "RAG Pipelines, Gemini API Function Calling & Vector Store Embeddings",
  },
];

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <SEO
        title="Home"
        description="Nasri Noufel Seif El Islam portfolio: Full Stack Developer specializing in React, Next.js, Node.js, and scalable web applications."
        url="/"
      />
      <div
        className="min-h-screen py-18  md:py-22 bg-[#080808] text-white"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        {/* ── BENTO GRID ──────────────────────────────────────────────── */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-[1300px] mx-auto p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3"
        >
          {/* HERO ─ col-span-8 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-8">
            <Card className="relative p-7 sm:p-10 min-h-[300px] flex flex-col justify-between">
              {/* Deco rings */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-[#7A93A8]/10 pointer-events-none" />
              <div className="absolute top-4 right-28 w-28 h-28 rounded-full border border-[#7A93A8]/[0.05] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                  <span className="inline-flex items-center gap-2 bg-[#7A93A8]/10 border border-[#7A93A8]/25 rounded-full px-3 py-1 font-mono text-[10px] tracking-wider text-[#7A93A8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7A93A8] pulse inline-block" />
                    Available for work
                  </span>
                </div>

                <h1
                  className="font-extrabold leading-none tracking-tight mb-4"
                  style={{
                    fontSize: "clamp(2.1rem,6vw,3.6rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Hi, I'm{" "}
                  <span className=" text-white px-2 capitalize rounded">
                    Nasri noufel seif el islam
                  </span>
                </h1>

                <p
                  className="text-neutral-500 leading-relaxed mb-3 max-w-lg"
                  style={{ fontSize: "clamp(.9rem,1.8vw,1.05rem)" }}
                >
                  Software Engineer crafting seamless digital experiences with{" "}
                  <span className="text-neutral-200 font-semibold">
                    Next.js
                  </span>
                  ,{" "}
                  <span className="text-neutral-200 font-semibold">NestJS</span>{" "}
                  &amp; clean code.
                </p>
                <p className="text-neutral-700 text-sm leading-relaxed max-w-md">
                  Passionate about web performance &amp; clean architecture.
                  helping businesses grow online with scalable, maintainable
                  solutions.
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2.5 flex-wrap mt-8 pt-6 border-t border-[#1a1a1a]">
                {SOCIALS.map((s) => (
                  <Magnetic key={s.label} href={s.href}>
                    <span className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-neutral-600 hover:border-[#7A93A8] hover:text-[#7A93A8] hover:bg-[#7A93A8]/10 transition-all duration-200 cursor-pointer">
                      <Icon d={s.icon} size={16} />
                    </span>
                  </Magnetic>
                ))}
                <div className="w-px h-5 bg-[#1e1e1e] mx-1" />
                <a
                  href="/cv.pdf"
                  download="Noufelseifelislam_CV.pdf"
                  className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-700 hover:text-white transition-colors duration-200"
                >
                  Download CV <ArrowSvg />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* PHOTO ─ col-span-4 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-4">
            <Card className="relative overflow-hidden min-h-[400px] lg:h-full">
              <img
                src="/noufel1.jpg"
                alt="Noufel seif el islam"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                <p className="font-mono text-[10px] tracking-[.14em] uppercase text-neutral-300 mb-1">
                  Software Engineer
                </p>
                <p className="font-bold text-lg">Noufel seif el islam</p>
              </div>

              <svg
                viewBox="0 0 22 24"
                fill="currentColor"
                className="w-10 h-10 m-4 text-white animate-[spin_10s_linear_infinite]"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
              </svg>
            </Card>
          </motion.div>

          {/* MY TECH STACKS ─ col-span-6 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-6">
            <Card className="p-6 sm:p-7 flex flex-col justify-between h-full group hover:border-[#7A93A8]/40 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7A93A8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                  >
                    <path d="M15 4V2m0 16v-2m8-8h-2M4 10H2m15.071 7.071l-1.414-1.414M4.343 4.343L2.93 2.93m14.142 0l-1.414 1.414M4.343 15.657l-1.414 1.414M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                  <h2 className="font-extrabold text-[17px] tracking-tight text-white">
                    My tech stacks
                  </h2>
                </div>
                <p className="text-[12px] text-neutral-500 mb-5">
                  If you like using these tools too, we'll get along.
                </p>

                {/* Infinite Multi-Row Marquee */}
                <div className="space-y-3 overflow-hidden py-1">
                  {/* Row 1 - Left */}
                  <div className="marquee-mask relative w-full overflow-hidden">
                    <div className="marquee-track flex gap-3 w-max">
                      {[...TECH_STACK_ROW_1, ...TECH_STACK_ROW_1, ...TECH_STACK_ROW_1].map((item, idx) => (
                        <div
                          key={`r1-${item.name}-${idx}`}
                          className="group/item flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#7A93A8]/60 hover:bg-[#191919] hover:scale-105 shadow-md transition-all cursor-pointer shrink-0"
                        >
                          <div className="w-7 h-7 flex items-center justify-center shrink-0 drop-shadow-sm">
                            {item.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[12px] text-neutral-200 group-hover/item:text-white transition-colors whitespace-nowrap">
                              {item.name}
                            </span>
                            <span className="font-mono text-[8.5px] text-neutral-500 uppercase tracking-wider">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 2 - Right (Reverse) */}
                  <div className="marquee-mask relative w-full overflow-hidden">
                    <div className="marquee-track-reverse flex gap-3 w-max">
                      {[...TECH_STACK_ROW_2, ...TECH_STACK_ROW_2, ...TECH_STACK_ROW_2].map((item, idx) => (
                        <div
                          key={`r2-${item.name}-${idx}`}
                          className="group/item flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#7A93A8]/60 hover:bg-[#191919] hover:scale-105 shadow-md transition-all cursor-pointer shrink-0"
                        >
                          <div className="w-7 h-7 flex items-center justify-center shrink-0 drop-shadow-sm">
                            {item.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[12px] text-neutral-200 group-hover/item:text-white transition-colors whitespace-nowrap">
                              {item.name}
                            </span>
                            <span className="font-mono text-[8.5px] text-neutral-500 uppercase tracking-wider">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#1a1a1a] flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-600 tracking-wider">
                  MODERN ECOSYSTEM ({TECH_STACK_ROW_1.length + TECH_STACK_ROW_2.length}+ TOOLS)
                </span>
                <span className="font-mono text-[10px] text-[#7A93A8] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A93A8] pulse inline-block" />
                  Production-Ready
                </span>
              </div>
            </Card>
          </motion.div>

          {/* CONSISTENT BUILDER ─ col-span-6 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-6">
            <Card className="p-6 sm:p-7 flex flex-col justify-between h-full group hover:border-[#7A93A8]/40 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon d={GITHUB} size={20} />
                  <h2 className="font-extrabold text-[17px] tracking-tight text-white">
                    Consistent Builder
                  </h2>
                </div>
                <p className="text-[12px] text-neutral-500 mb-6">
                  I push code almost every day. Visit my GitHub:{" "}
                  <a
                    href="https://github.com/Noufel-sf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7A93A8] hover:underline font-mono font-medium inline-flex items-center gap-1"
                  >
                    github.com/Noufel-sf <ArrowSvg size={11} />
                  </a>
                </p>

                {/* GitHub Contribution Heatmap Grid */}
                <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-[#1b1b1b] overflow-x-auto">
                  <div className="flex flex-col gap-1.5 min-w-[280px]">
                    {GITHUB_CONTRIBUTIONS.map((row, rowIdx) => (
                      <div key={rowIdx} className="flex gap-1.5 justify-between">
                        {row.map((level, colIdx) => (
                          <motion.div
                            key={`${rowIdx}-${colIdx}`}
                            whileHover={{ scale: 1.35, zIndex: 10 }}
                            transition={{ duration: 0.15 }}
                            className={`w-full aspect-square rounded-[4px] border transition-all cursor-pointer shadow-sm ${GITHUB_LEVEL_COLORS[level]} hover:shadow-emerald-500/20`}
                            title={`${level > 0 ? `${level * 3} commits` : "No contributions"}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#181818] text-[10px] font-mono text-neutral-600">
                    <div className="flex items-center gap-1.5">
                      <span>Less</span>
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-[#151515] border border-[#222]" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429]" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32]" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641]" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353]" />
                      <span>More</span>
                    </div>
                    <span className="text-[#7A93A8] font-semibold">Active Streak 🔥</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-600 tracking-wider">
                  OPEN SOURCE &amp; COMMITS
                </span>
                <a
                  href="https://github.com/Noufel-sf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-[#7A93A8] hover:text-white transition-colors flex items-center gap-1"
                >
                  View Activity <ArrowSvg size={10} />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* I KEEP EVOLVING MY SKILLS ─ col-span-6 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-6">
            <Card className="p-6 sm:p-7 flex flex-col justify-between h-full group hover:border-[#7A93A8]/40 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-[#7A93A8]/20 flex items-center justify-center text-[#7A93A8]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                  <h2 className="font-extrabold text-[17px] tracking-tight text-white">
                    I Keep evolving my skills
                  </h2>
                </div>
                <p className="text-[12px] text-neutral-500 mb-5 leading-relaxed">
                  From enhancing my problem solving skills to keeping myself updated with new tech
                </p>

                {/* 3D Book Spines Stack */}
                <div className="flex flex-col gap-2.5">
                  {EVOLVING_SKILLS_BOOKS.map((book) => (
                    <motion.div
                      key={book.title}
                      whileHover={{ x: 6, scale: 1.01 }}
                      transition={{ duration: 0.18 }}
                      className={`relative group/book rounded-xl p-3 sm:p-3.5 bg-gradient-to-r ${book.gradient} border ${book.border} shadow-lg cursor-pointer transition-all overflow-hidden flex items-center justify-between before:absolute before:left-0 before:inset-y-0 before:w-3.5 before:bg-gradient-to-r before:from-black/45 before:to-transparent before:rounded-l-xl after:absolute after:-right-1.5 after:top-1.5 after:bottom-1.5 after:w-2 after:bg-[#f6eee0] after:rounded-r-[3px] after:shadow-sm after:border-y after:border-r after:border-[#dcd3c1]`}
                    >
                      <div className="relative z-10 pl-2.5">
                        <h3 className="font-black text-[14px] sm:text-[16px] tracking-[0.14em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] uppercase font-mono">
                          {book.title}
                        </h3>
                        <p className="text-[10.5px] text-white/85 font-medium leading-tight mt-0.5 max-w-[220px] sm:max-w-none truncate sm:whitespace-normal">
                          {book.desc}
                        </p>
                      </div>

                      <div className="relative z-10 pr-2">
                        <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] font-black tracking-wider uppercase shadow-md border backdrop-blur-sm ${book.badgeStyle}`}>
                          {book.badge}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-600 tracking-wider">
                  CONTINUOUS GROWTH
                </span>
                <span className="font-mono text-[10px] text-[#7A93A8]">
                  Daily Learning Loop
                </span>
              </div>
            </Card>
          </motion.div>

          {/* PROJECTS ─ col-span-6 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-6">
            <div className="p-6 rounded-2xl bg-[#d1d1d1] h-full flex flex-col justify-between" id="projects">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bold text-black text-[15px] tracking-tight">
                    Featured Projects
                  </h2>
                  <Link
                    to="/projects"
                    className="flex items-center gap-1 font-mono text-[11px] text-[#7A93A8] hover:opacity-70 transition-opacity"
                  >
                    View all <ArrowSvg size={12} />
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  {PROJECTS.map((p, i) => (
                    <motion.div
                      key={p.name}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.18 }}
                      className="group cursor-pointer"
                    >
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span className="font-semibold text-black text-sm text-b transition-colors duration-200">
                              {p.name}
                            </span>
                            <Badge>{p.tag}</Badge>
                          </div>
                          <p className="text-[12px] text-neutral-700 leading-relaxed">
                            {p.desc}
                          </p>
                          <p className="font-mono text-[10px] text-neutral-800 mt-1.5">
                            {p.date}
                          </p>
                        </div>
                        <span className="text-neutral-800 group-hover:text-[#7A93A8] transition-colors shrink-0 mt-0.5">
                          <ArrowSvg size={13} />
                        </span>
                      </div>
                      {i < PROJECTS.length - 1 && (
                        <div className="mt-4 h-px bg-[#b8b8b8]" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#b8b8b8] flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-600 tracking-wider">
                  CASE STUDIES
                </span>
                <Link
                  to="/projects"
                  className="font-mono text-[10px] text-black font-semibold hover:underline flex items-center gap-1"
                >
                  All Case Studies <ArrowSvg size={10} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* SOFT SKILLS ─ col-span-3 */}
          <motion.div variants={up} className="lg:col-span-3">
            <Card className="p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#7A93A8] pulse" />
                <span className="font-mono text-[10px] tracking-[.16em] uppercase text-neutral-700">
                  Soft Skills
                </span>
              </div>

              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#7A93A8]"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h3 className="font-semibold text-[13px] text-white">
                      Leadership
                    </h3>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    Team coordination & mentoring
                  </p>
                </div>

                <div className="h-px bg-[#1a1a1a]" />

                <div className="group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#7A93A8]"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <h3 className="font-semibold text-[13px] text-white">
                      Communication
                    </h3>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    Clear articulation & active listening
                  </p>
                </div>

                <div className="h-px bg-[#1a1a1a]" />

                <div className="group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#7A93A8]"
                    >
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <h3 className="font-semibold text-[13px] text-white">
                      Project Management
                    </h3>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    Agile methodologies & delivery
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* ENTJ MINDSET ─ col-span-3 */}
          <motion.div variants={up} className="lg:col-span-3">
            <Card className="p-6 h-full bg-gradient-to-br from-[#7A93A8]/10 to-[#111]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#7A93A8]/20 flex items-center justify-center">
                  <span className="font-black text-[14px] text-[#7A93A8]">
                    E
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[.16em] uppercase text-neutral-700">
                  Personality
                </span>
              </div>

              <h3 className="font-bold text-[16px] text-white mb-2">
                ENTJ Mindset
              </h3>

              <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">
                Strategic Commander • Natural Leader
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#7A93A8] mt-1.5 shrink-0" />
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    Strategic thinking & long-term vision
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#7A93A8] mt-1.5 shrink-0" />
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    Decisive problem-solving approach
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#7A93A8] mt-1.5 shrink-0" />
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    Goal-oriented & results-driven
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#1a1a1a]">
                <p className="font-mono text-[9px] tracking-wider uppercase text-neutral-700">
                  "Efficiency through strategy"
                </p>
              </div>
            </Card>
          </motion.div>

          {/* QUOTE ─ col-span-6 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-6">
            <Card className="p-7 flex flex-col justify-center bg-gradient-to-br from-[#111] to-[#161616] h-full">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#7A93A8">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <blockquote className="mt-4 text-2xl font-semibold text-neutral-300 leading-relaxed ">
                "There is nothing imposible to him who will try"
              </blockquote>
              <div className="mt-4 w-8 h-0.5 bg-[#7A93A8] rounded-full" />
              <p className="mt-4 text-sm text-neutral-500 font-mono tracking-wider uppercase">
                Alexander the great
              </p>
            </Card>
          </motion.div>

          {/* ABOUT + SKILLS ─ col-span-5 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-5">
            <div className="p-6 h-full bg-[#7A93A8] rounded-2xl  ">
              <h2 className="font-bold text-[15px] text-black mb-2.5">
                About Me
              </h2>
              <p className="text-sm text-neutral-700 font-bold leading-relaxed mb-5">
                I enjoy building software solutions that solve real-world
                problems. Always learning, always shipping. Exploring Testing
                &amp; React Native.
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <Pill key={s} label={s} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* STATS ─ col-span-3 */}
          <motion.div variants={up} className="lg:col-span-3">
            <div className="p-6 bg-[#d1d1e1] rounded-2xl flex flex-col h-full">
              <p className="font-mono text-[12px] tracking-[.16em] uppercase text-black mb-5">
                Stats
              </p>
              <div className="flex flex-col flex-1 justify-between gap-0">
                {[
                  { v: "12+", l: "Projects Built" },
                  { v: "2+", l: "Years Exp." },
                  { v: "5+", l: "Clients Served" },
                ].map((s, i, a) => (
                  <div key={s.l}>
                    <p
                      className="text-black font-extrabold leading-none"
                      style={{ fontSize: "clamp(2rem,5vw,2.4rem)" }}
                    >
                      {s.v}
                    </p>
                    <p
                      className="font-mono text-[11px] text-neutral-700 mt-1"
                      style={{ marginBottom: i < a.length - 1 ? 12 : 0 }}
                    >
                      {s.l}
                    </p>
                    {i < a.length - 1 && (
                      <div className="h-px bg-[#1a1a1a] mb-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* EDUCATION ─ col-span-4 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-4">
            <Card className="p-6 h-full">
              <h2 className="font-bold text-[15px] tracking-tight mb-5">
                Education &amp; Certs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                {EDUCATION.map((e) => (
                  <div key={e.name} className="flex items-start gap-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${e.primary ? "bg-[#7A93A8]" : "bg-[#2e2e2e]"}`}
                    />
                    <div>
                      <p className="font-semibold text-[13px]">{e.name}</p>
                      <p className="font-mono text-[10px] text-neutral-700 mt-0.5">
                        {e.school} · {e.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* EXPERIENCE ─ col-span-12 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-12">
            <Card className="p-6 h-full" id="experience">
              <h2 className="font-bold text-[15px] tracking-tight mb-5">
                Experience
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {EXPERIENCE.map((e) => (
                  <div
                    key={e.role}
                    className="pl-4 border-l-2 border-[#7A93A8]/30"
                  >
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <p className="font-semibold text-sm">{e.role}</p>
                      {e.current && <Badge>Current</Badge>}
                    </div>
                    <p className="font-mono text-[11px] mb-1">{e.company}</p>
                    <p className="font-mono text-[10px] text-neutral-700 mb-2.5">
                      {e.period}
                    </p>
                    <p className="text-[12px] text-neutral-600 leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* MARQUEE ─ full width */}
          <motion.div
            variants={up}
            className="col-span-1 sm:col-span-2 lg:col-span-12"
          >
            <div className="relative bg-[#7A93A8] rounded-2xl p-8 sm:p-12 overflow-hidden min-h-[350px]">
              {/* Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[.16em] uppercase text-black">
                  (STACK)
                </span>
                <span className="font-mono text-[10px] tracking-[.16em] uppercase text-black">
                  OVERVIEW
                </span>
              </div>

              {/* Core Systems Label */}

              {/* SVG Background - Orbital Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  viewBox="0 0 300 100"
                  className="w-full h-full text-neutral-800/30"
                >
                  <ellipse
                    cx="150"
                    cy="50"
                    rx="140"
                    ry="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  ></ellipse>
                  <ellipse
                    cx="150"
                    cy="50"
                    rx="140"
                    ry="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    transform="rotate(15 150 50)"
                  ></ellipse>
                </svg>
              </div>

              {/* Center Title */}
              <div className="relative z-10 py-5 flex flex-col items-center justify-center h-full">
                <h2 className="text-center mb-12">
                  <div className="font-black text-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-1">
                    TECHNICAL
                  </div>
                  <div className="   font-mono text-[10px] tracking-[.24em] uppercase text-neutral-700">
                    CORE SYSTEMS
                  </div>
                  <div
                    className="font-black text-black text-4xl sm:text-5xl md:text-6xl tracking-tight"
                    style={{
                      WebkitTextStroke: "2px black",
                      WebkitTextFillColor: "transparent",
                      textStroke: "1.5px white",
                      color: "transparent",
                    }}
                  >
                    STACK
                  </div>
                </h2>

                <div className="marquee-mask">
                  <div className="marquee-track">
                    {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map(
                      (s, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center font-bold border  border-[#232323] rounded-full px-3 py-1 font-mono text-[11px] text-neutral-800 whitespace-nowrap"
                        >
                          {s}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Star Icon - Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black animate-[spin_5s_linear_infinite]"
                >
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* CTA ─ full width */}
          <motion.div
            variants={up}
            className="col-span-1 sm:col-span-2 lg:col-span-12"
          >
            <Card
              className="p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-br from-[#131313] to-[#0f0f0f] border-[#202020]"
              id="contact"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[.16em] uppercase text-neutral-400 mb-2">
                  Let's work together
                </p>
                <h2
                  className="font-extrabold tracking-tight leading-tight"
                  style={{
                    fontSize: "clamp(1.5rem,4vw,2.2rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Got a project in mind?
                </h2>
                <p className="text-sm text-neutral-600 mt-2">
                  Currently available for freelance &amp; full-time roles.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.linkedin.com/in/noufel-seif-el-islam-nasri/"
                className="inline-flex items-center capitalize gap-2 bg-[#7A93A8] hover:bg-[#7A93A8]/90 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 shrink-0 no-underline"
              >
                get in touch <ArrowSvg size={14} />
              </motion.a>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
