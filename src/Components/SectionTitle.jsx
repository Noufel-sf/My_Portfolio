
import { motion } from "framer-motion";


export default function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="mb-12"
    >
      {eyebrow && (
        <p className="font-mono uppercase tracking-[0.25em] text-[11px] text-[#7A93A8] mb-3">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-black tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-neutral-400 leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
}