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
  const projectImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image, project.image, project.image, project.image, project.image];

  // Repeat images array to ensure smooth, infinite loop
  const marqueeImages = [
    ...projectImages,
    ...projectImages,
    ...projectImages,
    ...projectImages,
  ];

  return (
    <section className="relative overflow-hidden border-b border-[#1b1b1b]">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#7A93A8]/10 blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7A93A810,transparent_60%)]" />
      </div>

      <div className="relative max-w-[1450px] mx-auto px-6 lg:px-10 pt-32 pb-20">
        {/* Back Link */}
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

        {/* Centered Hero Text Content */}
        <div className="mt-10 flex flex-col items-center text-center max-w-4xl mx-auto">
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
            className="mt-6 text-4xl  sm:text-6xl md:text-7xl font-black tracking-[0em] leading-tight text-white"
          >
            {project.name}
          </motion.h1>

          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-neutral-400 text-base sm:text-lg leading-8 max-w-2xl"
          >
            {project.desc}
          </motion.p>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center gap-3 mt-8"
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
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-[#7A93A8] px-7 py-4 text-sm font-semibold hover:scale-[1.03] transition-all text-black"
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
              className="group flex items-center gap-3 rounded-full border border-[#2a2a2a] bg-[#111] px-7 py-4 text-sm hover:border-[#7A93A8]/40 transition-all text-white"
            >
              <Github size={18} />
              Source Code
            </a>
          </motion.div>
        </div>

        {/* 5 Images Infinite Marquee */}
        <motion.div
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 w-full"
        >
          <div className="marquee-mask relative w-full overflow-hidden py-4">
            <div className="marquee-track flex gap-6 w-max hover:[animation-play-state:paused]">
              {marqueeImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative shrink-0 w-[300px] sm:w-[420px] md:w-[500px] aspect-[16/10] overflow-hidden rounded-[24px] border border-[#252525] bg-[#111] group shadow-2xl"
                >
                  <img
                    src={imgSrc}
                    alt={`${project.name} preview ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}