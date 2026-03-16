import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import SEO from "../Components/Seo";

// ── ICONS ────────────────────────────────────────────────────────────────────
const Icon = ({ d, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
);

const GITHUB =
  "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z";

const EXTERNAL_LINK =
  "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3";
const ARROW = "M7 17L17 7M17 7H7M17 7v10";
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

// ── PROJECT DATA ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    name: "Association website",
    desc: "A website to to organize the association members and events and new members registerations .",
    longDesc:
      "A comprehensive online store platform featuring product management, shopping cart, secure payment processing with Stripe, order tracking, and a powerful admin dashboard for inventory and sales management.",
    image: "/rokay.png",
    tech: ["React.js", "MongoDB", "TypeScript" , "Express js", "Tailwind CSS"],
    category: "website",
    date: "february 2026",
    preview: "https://rokaichabab.vercel.app/",
    github: "https://github.com/Noufel-sf/Rokai_website",
  },
  {
    id: 2,
    name: "Library management system api",
    desc: "A RESTful API for managing a library's book inventory, user accounts, and borrowing transactions.",
    longDesc:
      "A robust API built with Node.js and Nest.js, featuring secure authentication jwt, database integration with PostgreSQL Neon prisma orm, and comprehensive endpoints for book management, user operations, and transaction handling.",
    image: "/b1.jpg",
    tech: ["Nest.js", "Node.js", "Rest api", "PostgreSQL", "Prisma"],
    category: "backend",
    date: "March 2026",
    preview: "https://github.com/Noufel-sf/nest_redis_library_system",
    github: "https://github.com/Noufel-sf/nest_redis_library_system",
  },
  {
    id: 3,
    name: "Portfolio Website",
    desc: "A personal portfolio website showcasing skills, and experience with a modern design and responsive layout.",
    longDesc:
      "A modern, responsive portfolio website built with React and Tailwind CSS, featuring a clean design and smooth animations to showcase my skills and experience.",
    image: "/p2.jpg",
    tech: ["React.js", "Gsap", "framer-motion", "Tailwind CSS"],
    category: "frontend",
    date: "2026",
    preview: "https://abdou-portfolio-tau.vercel.app/",
    github: "https://github.com/Noufel-sf/Abdou_portfolio",
  },
];

// ── VARIANTS ─────────────────────────────────────────────────────────────────
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const up = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── CARD ─────────────────────────────────────────────────────────────────────
function Card({ children, className = "", id }) {
  return (
    <div
      id={id}
      className={`bg-[#111] border cursor-pointer border-[#1e1e1e] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#2e2e2e] hover:bg-[#141414] ${className}`}
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

// ── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project, featured = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className={featured ? "sm:col-span-2" : ""}>
      <div
        className="group relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-neutral-700"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            </div>
          )}

          {/* Overlay with links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-3"
          >
            <motion.a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#7A93A8] text-white px-4 py-2 rounded-full font-mono text-[11px] tracking-wider hover:bg-[#7A93A8]/90 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d={EXTERNAL_LINK} />
              </svg>
              Preview
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <Icon d={GITHUB} size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge>{project.category}</Badge>
            <span className="font-mono text-[10px] text-neutral-700">
              {project.date}
            </span>
          </div>

          <h3 className="font-bold text-[15px] tracking-tight mb-2 group-hover:text-[#7A93A8] transition-colors duration-200">
            {project.name}
          </h3>

          <p className="text-[13px] text-neutral-600 leading-relaxed mb-3">
            {project.desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tech.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-2 bg-[#7A93A8]/10 border border-[#7A93A8]/25 rounded-lg px-3 py-1 font-mono text-[10px] tracking-wider text-[#7A93A8]">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#7A93A8] pulse inline-block" />
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-3 border-t border-[#1a1a1a]">
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-[11px] text-neutral-600 hover:text-[#7A93A8] transition-colors"
            >
              Live Site <ArrowSvg size={12} />
            </a>
            <span className="text-neutral-800">•</span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-[11px] text-neutral-600 hover:text-[#7A93A8] transition-colors"
            >
              Code <ArrowSvg size={12} />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <SEO
        title="Projects"
        description="Explore projects built by Nasri Noufel: full stack products, real-world platforms, and modern web solutions with preview and GitHub links."
        url="/projects"
      />
      <div
        className="min-h-screen bg-[#080808] text-white"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1300px] mx-auto px-4 pt-20 pb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <svg
              viewBox="0 0 22 24"
              fill="currentColor"
              className="w-5 h-5 m-4 text-white animate-[spin_10s_linear_infinite]"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
            </svg>
            <span className="font-mono text-[12px] tracking-[.16em] uppercase text-neutral-700">
              Projects
            </span>
          </div>

          <h1
            className="font-extrabold leading-none tracking-tight mb-4"
            style={{
              fontSize: "clamp(2.5rem,6vw,4rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Featured <span className="text-[#7A93A8]">Projects</span>
          </h1>

          <p className="text-neutral-500 leading-relaxed max-w-2xl mb-8">
            A collection of my recent work showcasing full-stack development,
            modern UI/UX design, and clean code practices. Each project includes
            live previews and source code.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setFilter(cat)}
                className={`px-4 cursor-pointer py-2 rounded-full font-mono text-[11px] tracking-wider transition-all duration-200 ${
                  filter === cat
                    ? "bg-[#7A93A8] text-white border border-[#7A93A8]"
                    : "bg-[#111] text-neutral-600 border border-[#2a2a2a] hover:border-[#7A93A8]/50"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-[1300px] mx-auto px-4 pb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={`${filter}-${project.id}`}
                  layout
                  variants={up}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-600 font-mono text-sm">
                No projects found in this category
              </p>
            </div>
          )}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-[1300px] mx-auto px-4 pb-20"
        >
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-[#131313] to-[#0f0f0f] border-[#202020]">
            <div className="text-center">
              <h2 className="font-extrabold text-2xl sm:text-3xl tracking-tight mb-3">
                Let's Build Something Together
              </h2>
              <p className="text-neutral-600 mb-6 max-w-lg mx-auto">
                Have a project in mind? I'm always open to discussing new
                opportunities and collaborations.
              </p>
              <motion.a
                href="https://www.linkedin.com/in/noufel-seif-el-islam-nasri/"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#7A93A8] hover:bg-[#7A93A8]/90 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                Get In Touch <ArrowSvg size={14} />
              </motion.a>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
