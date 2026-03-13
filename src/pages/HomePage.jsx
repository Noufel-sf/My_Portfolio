import { useState, useEffect, useRef } from "react";
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
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "GraphQL",
  "Docker",
  "Redis",
  "Prisma",
  "Git",
  "Figma",
];
const PROJECTS = [
  {
    name: "Full stack Ecommerce project",
    desc: "A solution for stores to turn thier work online",
    date: "Oct 2026",
    tag: "SaaS",
  },
  {
    name: "Mern stack Social media website",
    desc: "social media website to practise websocket and enhance my mern stack skills",
    date: "Sept 2025",
    tag: "B2B",
  },
  {
    name: "Association club website",
    desc: "A landing pages for a club website to facilate registerations and organizing human resources",
    date: "2024",
    tag: "Content",
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
    name: "ReactJS Certificate",
    school: "Udemy",
    year: "2022",
    primary: false,
  },
  {
    name: "Agile scrum Certificate",
    school: "simp learn",
    year: "2025",
    primary: false,
  },
 
];
const EXPERIENCE = [
  {
    role: "Mern Stack Developer",
    company: "freelence",
    period: "2025 – Present",
    desc: "Building scalable APIs and responsive UIs with React.js & express JS.",
    current: true,
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2022 – 2024",
    desc: "Delivered 10+ client projects with React js, Next js TailwindCss, and modern tooling.",
    current: false,
  },
];
const SOCIALS = [
  { icon: GITHUB, label: "GitHub", href: "https://github.com/Noufel-sf" },
  { icon: LINKEDIN, label: "LinkedIn", href: "https://www.linkedin.com/in/noufel-seif-el-islam-nasri/" },
  { icon: INSTAGRAM, label: "Instagram", href: "https://www.instagram.com/noufel_sf?igsh=dGFpbGJyamVmbzky" },
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

// ── LIVE CLOCK ───────────────────────────────────────────────────────────────
function Clock({ tz, label, dotClass }) {
  const [t, setT] = useState("");
  const [d, setD] = useState("");
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setT(
        new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(n),
      );
      setD(
        new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          weekday: "short",
          month: "short",
          day: "numeric",
        }).format(n),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tz]);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-2 h-2 rounded-full pulse shrink-0 ${dotClass}`} />
        <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-neutral-600">
          {label}
        </span>
      </div>
      <p className="font-mono text-[11px] text-neutral-700">{d}</p>
      <p
        className="font-mono font-bold text-white tracking-tight"
        style={{ fontSize: "clamp(1.5rem,4vw,1.9rem)", lineHeight: 1 }}
      >
        {t}
      </p>
      <p className="font-mono text-[10px] text-neutral-800 mt-1">{tz}</p>
    </div>
  );
}

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
        className="min-h-screen py-5 bg-[#080808] text-white"
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
                  helping businesses grow online with scalable, maintainable solutions.
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
                  href="/cv.pdf" download="Noufelseifelislam_CV.pdf"
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
                src="p.jpg"
                alt="Noufel seif el islam"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                <p className="font-mono text-[10px] tracking-[.14em] uppercase text-neutral-700 mb-1">
                  Software Engineer
                </p>
                <p className="font-bold text-lg">Noufel seif el islam</p>
              </div>

              <svg
                viewBox="0 0 22 24"
                fill="currentColor"
                class="w-10 h-10 m-4 text-white animate-[spin_10s_linear_infinite]"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
              </svg>
            </Card>
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#7A93A8]">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h3 className="font-semibold text-[13px] text-white">Leadership</h3>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    Team coordination & mentoring
                  </p>
                </div>

                <div className="h-px bg-[#1a1a1a]" />

                <div className="group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#7A93A8]">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <h3 className="font-semibold text-[13px] text-white">Communication</h3>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    Clear articulation & active listening
                  </p>
                </div>

                <div className="h-px bg-[#1a1a1a]" />

                <div className="group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#7A93A8]">
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <h3 className="font-semibold text-[13px] text-white">Project Management</h3>
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
                  <span className="font-black text-[14px] text-[#7A93A8]">E</span>
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
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#7A93A8" >
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <blockquote className="mt-4 text-2xl font-semibold text-neutral-300 leading-relaxed ">
                "There is nothing imposible to him who will try"
              </blockquote>
              <div className="mt-4 w-8 h-0.5 bg-[#7A93A8] rounded-full" />
            </Card>
          </motion.div>

          {/* PROJECTS ─ col-span-4 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-4">
            <div className="p-6 rounded-2xl bg-[#d1d1d1]" id="projects">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold  text-black text-[15px] tracking-tight">
                  Projects
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
                      <div className="mt-4 h-px bg-[#1a1a1a]" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
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
                  { v: "1.5+", l: "Years Exp." },
                  { v: "3+", l: "Contributions" },
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

          {/* EXPERIENCE ─ col-span-8 */}
          <motion.div variants={up} className="sm:col-span-2 lg:col-span-8">
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
            <Card className="relative p-8 sm:p-12 overflow-hidden min-h-[350px]">
              {/* Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[.16em] uppercase text-neutral-700">
                  (STACK)
                </span>
                <span className="font-mono text-[10px] tracking-[.16em] uppercase text-neutral-700">
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
                  <div className="font-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-1">
                    TECHNICAL
                  </div>
                   <div className="   font-mono text-[10px] tracking-[.24em] uppercase text-neutral-700">
                     CORE SYSTEMS
                  </div>
                  <div
                    className="font-black text-4xl sm:text-5xl md:text-6xl tracking-tight"
                    style={{
                      WebkitTextStroke: "1.5px white",
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
                    {[...SKILLS, ...SKILLS, ...SKILLS , ...SKILLS].map((s, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center bg-[#161616] border border-[#232323] rounded-full px-3 py-1 font-mono text-[11px] text-neutral-700 whitespace-nowrap"
                      >
                        {s}
                      </span>
                    ))}
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
                  className="text-white animate-[spin_5s_linear_infinite]"
                >
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                </svg>
              </div>
            </Card>
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
                <p className="font-mono text-[10px] tracking-[.16em] uppercase text-neutral-700 mb-2">
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
                href="mailto:you@email.com"
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
