import React, { memo } from "react";
import { motion } from "framer-motion";
import Github from '../Assets/github.png'
import Linkedin from '../Assets/linkedin.png'
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

const Contact = memo(() => {
  return (
    <div className="w-full mt-20 min-h-full md:h-full flex flex-col items-center  p-6 md:p-12 overflow-visible">
      <div className="w-full max-w-5xl flex flex-col items-center mt-4 md:mt-0 px-4 md:px-12">
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
                  Contact
                </span>
              </div>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg text-gray-400 mb-6 md:mb-6"
          >
            <div className="flex items-center gap-12">
              <a href="https://www.linkedin.com/in/noufel-seif-el-islam-nasri/">
                <img src={Linkedin} alt="" className="w-[60px]" />
              </a>
              <a href="https://github.com/Noufel-sf">
                <img src={Github} alt="" className="w-[60px]" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 md:pt-6  w-full"
          >
            
           <h2 className='lg:text-2xl tracking-[1px]'>noufel_seif_el_islam.nasri@univ-constantine2.dz</h2>

            <h2 className='text-xl'>+213 796 52 88 94</h2>
            <h3 className='text-xl capitalize '>algeria (mila)</h3>
           

           
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
