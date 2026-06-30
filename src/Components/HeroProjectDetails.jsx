"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Github,
  ArrowLeft,
  Calendar,
  Layers3,
} from "lucide-react";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroProjectDetails({ project }) {
  return (
    <section className="relative overflow-hidden border-b border-[#1b1b1b]">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#7A93A8]/10 blur-[170px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7A93A810,transparent_60%)]" />

      </div>

      <div className="relative max-w-[1450px] mx-auto px-6 lg:px-10 pt-32 pb-24">

        {/* Back */}

        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500 hover:text-[#7A93A8] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">

          {/* LEFT */}

          <div>

            <motion.div
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7A93A8]/20 bg-[#7A93A8]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#7A93A8]">
                <Layers3 size={13} />
                {project.category}
              </span>
            </motion.div>

            <motion.h1
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 text-5xl md:text-7xl font-black tracking-[-0.05em] leading-none"
            >
              {project.name}
            </motion.h1>

            <motion.p
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 text-neutral-400 text-lg leading-8 max-w-xl"
            >
              {project.desc}
            </motion.p>

            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3 mt-10"
            >
              <div className="flex items-center gap-2 rounded-full border border-[#202020] bg-[#111] px-4 py-2">
                <Calendar size={14} className="text-[#7A93A8]" />

                <span className="font-mono text-xs text-neutral-400">
                  {project.date}
                </span>
              </div>
            </motion.div>

            <motion.div
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4 mt-12"
            >
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-[#7A93A8] px-7 py-4 text-sm font-semibold hover:scale-[1.03] transition-all"
              >
                Live Demo

                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full border border-[#2a2a2a] bg-[#111] px-7 py-4 text-sm hover:border-[#7A93A8]/40 transition-all"
              >
                <Github size={18} />

                Source Code
              </a>
            </motion.div>
          </div>

          {/* IMAGE */}

          <motion.div
            custom={0.6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="absolute inset-0 rounded-[32px] bg-[#7A93A8]/20 blur-3xl scale-95" />

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              transition={{
                duration: .35,
              }}
              className="relative overflow-hidden rounded-[32px] border border-[#252525] bg-[#111]"
            >
              <img
                src={project.image}
                alt={project.name}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-70" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}