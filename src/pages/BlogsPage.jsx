import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import SEO from "../Components/Seo";

// ── ICONS ────────────────────────────────────────────────────────────────────
const Icon = ({ d, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
);

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
const Blogs = [
  {
    id: 1,
    name: "React js Blog Notion page",
    desc: "A notion page for React js consepts.",
    longDesc:
      "A notion page where I share my notes and insights on React js, covering everything from hooks and state management to performance optimization and best practices. It's a resource for developers of all levels looking to deepen their understanding of React.",
    image: "/r.png",
    tech: ["React", "hooks", "React Query", "Redux", "Tailwind CSS"],
    category: "frontend",
    date: "december 2025",
    preview:
      "https://same-sunfish-30e.notion.site/react-notes-noufel-seif-el-islam",
  },
   {
    id: 2,
    name: "Git Essentials Blog Notion page",
    desc: "A notion page for Git essentials consepts.",
    longDesc:
      "A notion page where I share my notes and insights on Git, covering everything from basic commands and branching to advanced workflows and best practices. It's a resource for developers of all levels looking to deepen their understanding of Git.",
    image: "/git.png",
    tech: ["Git", "GitHub", "Version Control", "Branching", "Merging"],
    category: "version control",
    date: "march 2026",
    preview:
      "https://same-sunfish-30e.notion.site/git-and-github-1ca094dafe0e807ab1bcc0c4fcc414d5#327094dafe0e8072959cfc8b6dc1e4a2",
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
function BlogCard({ blog }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card>
      <div
        className="group relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.name}
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
              href={blog.preview}
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
          </motion.div>
        </div>
        {/* Tech Stack */}
        <div className="flex flex-wrap p-4 gap-1.5 ">
          {blog.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 bg-[#7A93A8]/10 border border-[#7A93A8]/25 rounded-lg px-3 py-1 font-mono text-[10px] tracking-wider text-[#7A93A8]"
            >
              <span className="w-1.5 h-1.5 rounded-sm bg-[#7A93A8] pulse inline-block" />
              {tech}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge>{blog.category}</Badge>
            <span className="font-mono text-[10px] text-neutral-700">
              {blog.date}
            </span>
          </div>

          <h3 className="font-bold text-[15px] tracking-tight mb-2 group-hover:text-[#7A93A8] transition-colors duration-200">
            {blog.name}
          </h3>

          <p className="text-[13px] text-neutral-600 leading-relaxed mb-3">
            {blog.desc}
          </p>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-3 border-t border-[#1a1a1a]">
            <a
              href={blog.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-[11px] text-neutral-600 hover:text-[#7A93A8] transition-colors"
            >
              Live blog <ArrowSvg size={12} />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function BlogsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(Blogs.map((b) => b.category))];
  const filteredBlogs =
    filter === "All" ? Blogs : Blogs.filter((b) => b.category === filter);

  return (
    <>
      <SEO
        title="Blogs"
        description="Explore blog posts written by Nasri Noufel: full stack development, modern UI/UX design, and clean code practices."
        url="/blogs"
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
              Blogs
            </span>
          </div>

          <h1
            className="font-extrabold leading-none tracking-tight mb-4"
            style={{
              fontSize: "clamp(2.5rem,6vw,4rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Featured <span className="text-[#7A93A8]">Blogs</span>
          </h1>

          <p className="text-neutral-500 leading-relaxed max-w-2xl mb-8">
            A collection of my recent work showcasing full-stack development,
            modern UI/UX design, and clean code practices. Each blog post
            includes live previews and source code.
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

        {/* Blog Grid */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-[1300px] mx-auto px-4 pb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog) => (
                <motion.div
                  key={`${filter}-${blog.id}`}
                  layout
                  variants={up}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-600 font-mono text-sm">
                No blogs found in this category
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
