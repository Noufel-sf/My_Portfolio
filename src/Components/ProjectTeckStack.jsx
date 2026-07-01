
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function TechStack({tech}) {
  const sections = Array.isArray(tech)
    ? tech
    : tech && typeof tech === "object"
      ? Object.entries(tech)
          .map(([title, items]) => ({
            title: title.charAt(0).toUpperCase() + title.slice(1),
            items: Array.isArray(items) ? items : [],
          }))
          .filter((category) => category.items.length > 0)
      : [];

  return (
    <section className="py-28 border-t border-[#181818]">
      <div className="max-w-[1450px] mx-auto px-6 lg:px-10">

        <SectionTitle
          eyebrow="Technology"
          title="Built With Modern Technologies"
          description="A carefully selected stack focused on performance, scalability and maintainability."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {sections.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#202020] bg-[#111] p-8 hover:border-[#7A93A8]/30 transition-all"
            >

              <h3 className="text-2xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    className="flex items-center gap-3 rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 py-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#7A93A8]" />

                    <span className="font-mono text-[12px] tracking-wide text-neutral-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}