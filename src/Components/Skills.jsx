import React, { memo, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Languages,
  Users,
  MessageCircle,
} from "lucide-react";
import { cn } from "../lib/utils";
// Add image imports at the top
import HTMLLogo from '../Assets/html.png';
import CSSLogo from '../Assets/cssssss.png';
import JSLogo from '../Assets/javascript.png';
import ReactLogo from '../Assets/React.png';
import TailwindLogo from '../Assets/tailwindcss.png';
import FigmaLogo from '../Assets/figma.png';
import NodeLogo from '../Assets/nodejs_original_logo_icon_146411.png';
import MySQLLogo from '../Assets/mysql_original_wordmark_logo_icon_146417.png';
import MongoLogo from '../Assets/mongodb_original_logo_icon_146424.png';
import SupabaseLogo from '../Assets/supabase-removebg-preview.png';

/* -------------------- Skill Meter -------------------- */

const SkillMeter = memo(
  ({ percentage, color }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
      const controls = animate(count, percentage, {
        duration: 1.5,
        ease: "circOut",
      });
      return controls.stop;
    }, [percentage, count]);

    return (
      <div className="w-full mt-auto pt-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[11px] font-bold text-gray-500 tracking-widest uppercase">
            Proficiency
          </span>

          <div className="flex items-baseline">
            <motion.span className="text-2xl font-black text-white">
              {rounded}
            </motion.span>
            <span className="text-sm font-bold text-gray-500 ml-0.5">%</span>
          </div>
        </div>

        <div className="flex gap-[3px] h-3 w-full">
          {Array.from({ length: 20 }).map((_, i) => {
            const isActive = (i + 1) * 5 <= percentage;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.03 + 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "flex-1 rounded-[1.5px] origin-bottom",
                  isActive ? color : "bg-white/10"
                )}
              />
            );
          })}
        </div>
      </div>
    );
  }
);

SkillMeter.displayName = "SkillMeter";

/* -------------------- Card -------------------- */

const Card = memo(
  ({
    children,
    className,
    index = 0,
  }
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  )
);

Card.displayName = "Card";

/* -------------------- Skills Component -------------------- */

const Skills = memo(() => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-white">
            My Skills
          </h2>
          <p className="text-gray-400 mt-3">
            The technologies and strengths that power my work.
          </p>
        </motion.div>

        {/* Hard Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Frontend */}
          <Card index={0} className="justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                  <Code size={24} />
                </div>
                <span className="text-xs font-bold text-blue-400 uppercase">
                  UI / UX
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Frontend Development
              </h3>
              <p className="text-sm text-gray-400">
                Building performant, animated and responsive interfaces using
                modern technologies.
              </p>
              <div className="flex flex-wrap gap-3 mt-4 mb-2 justify-center">
                {[HTMLLogo, CSSLogo, JSLogo, ReactLogo, TailwindLogo, FigmaLogo].map((img, idx) => (
                  <img key={idx} src={img} alt="frontend tech" className="w-8 h-8 object-contain" />
                ))}
              </div>
            </div>
            <SkillMeter percentage={95} color="bg-blue-500" />
          </Card>

          {/* Backend */}
          <Card index={1} className="justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                  <Server size={24} />
                </div>
                <span className="text-xs font-bold text-emerald-400 uppercase">
                  API
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Backend Development
              </h3>
              <p className="text-sm text-gray-400">
                Designing scalable APIs, authentication systems and optimized
                server architecture.
              </p>
              <div className="flex flex-wrap gap-3 mt-4 mb-2 justify-center">
                {[NodeLogo, MySQLLogo, MongoLogo, SupabaseLogo].map((img, idx) => (
                  <img key={idx} src={img} alt="backend tech" className="w-8 h-8 object-contain" />
                ))}
              </div>
            </div>
            <SkillMeter percentage={90} color="bg-emerald-500" />
          </Card>

          {/* Databases */}
          <Card index={2} className="justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-yellow-500/20 rounded-xl text-yellow-400">
                  <Database size={24} />
                </div>
                <span className="text-xs font-bold text-yellow-400 uppercase">
                  Data
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Databases
              </h3>
              <p className="text-sm text-gray-400">
                Structuring, optimizing and managing data using relational and
                NoSQL systems.
              </p>
              <div className="flex flex-wrap gap-3 mt-4 mb-2 justify-center">
                {[MySQLLogo, MongoLogo].map((img, idx) => (
                  <img key={idx} src={img} alt="database tech" className="w-8 h-8 object-contain" />
                ))}
              </div>
            </div>
            <SkillMeter percentage={92} color="bg-yellow-500" />
          </Card>
        </div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl capitalize font-bold text-white">
            soft Skills
          </h2>
          <p className="text-gray-400 mt-3">
            The technologies and strengths that power my work.
          </p>
        </motion.div>

        {/* Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Leadership */}
          <Card>
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-amber-500/20 rounded-xl text-amber-400">
                <Users size={24} />
              </div>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-xl"
              >
                👑
              </motion.div>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">Leadership</h4>
            <p className="text-sm text-gray-400">
              Guiding teams with clarity, mentoring developers and delivering
              projects successfully.
            </p>
             <div className="mt-4 flex gap-2">
              {["Team Building", "Mentoring", "Strategy"].map((skill) => (
                <span key={skill} className="text-[10px] font-medium text-amber-400/80 bg-amber-500/10 px-2 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-amber-500/20 rounded-xl text-amber-400">
                <Users size={24} />
              </div>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-xl"
              >
                👑
              </motion.div>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">Project management</h4>
            <p className="text-sm text-gray-400">
              Guiding teams with clarity, mentoring developers and delivering
              projects successfully.
            </p>
             <div className="mt-4 flex gap-2">
              {["Team management", "Mentoring", "Strategy"].map((skill) => (
                <span key={skill} className="text-[10px] font-medium text-amber-400/80 bg-amber-500/10 px-2 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Communication */}
          <Card>
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-violet-500/20 rounded-xl text-violet-400">
                <MessageCircle size={24} />
              </div>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">
              Communication
            </h4>
            <p className="text-sm text-gray-400">
              Clear articulation of ideas, active listening and strong
              collaboration across teams.
            </p>
              <div className="mt-4 flex gap-2">
              {["Presenting", "Listening", "Feedback"].map((skill) => (
                <span key={skill} className="text-[10px] font-medium text-violet-400/80 bg-violet-500/10 px-2 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
