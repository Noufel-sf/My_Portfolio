import React, { memo } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Education = memo(() => {
  return (
    <div className="w-full mt-20 min-h-full md:h-full flex flex-col items-center  p-6 md:p-12 overflow-visible">
      <div className="w-full max-w-3xl flex flex-col items-center mt-4 md:mt-0 px-4 md:px-12">
        <motion.div
          className="flex flex-col items-center text-center z-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-4 relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight">
              My
              <div className="relative inline-block ml-3">
                <span className="font-designer font-normal relative z-10">
                  Education
                </span>
              </div>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg text-gray-400 mb-6 md:mb-6"
          >
            <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-200 mb-4 md:mb-4">
              A journey of{" "}
              <span className="bg-purple-500/20 px-1 rounded-md text-purple-300">
                continuous learning
              </span>{" "}
              and
              <span className="bg-cyan-500/20 px-1 rounded-md text-cyan-300 ml-1">
                growth
              </span>{" "}
              that shaped my expertise in design and sales.
            </p>
            <p className="leading-relaxed text-base md:text-lg text-gray-400">
              I am a computer science student at the University of Abdelhamid
              Mehri - Constantine 2, Algeria with a strong, hands-on background
              across multiple industries
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 md:pt-6  w-full"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-full text-purple-400">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Degree
                </p>
                <p className="font-bold text-white text-sm">Bachelor's</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-full text-cyan-400">
                <Award size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Certifications
                </p>
                <p className="font-bold text-white text-sm">5+ Courses</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/20 rounded-full text-yellow-400">
                <BookOpen size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Learning
                </p>
                <p className="font-bold text-white text-sm">Always</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

Education.displayName = "Education";

export default Education;
