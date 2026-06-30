import { motion } from "framer-motion";
import {
  TriangleAlert,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "./SectionTitle";



export default function Challenges({ challenges, lessons }) {
  return (
    <section className="py-32 border-t border-[#181818]">
      <div className="max-w-[1450px] mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Engineering Journey"
          title="Challenges & Lessons Learned"
          description="Every project comes with obstacles. Solving them is where the real engineering experience happens."
        />

        {/* Timeline */}

        <div className="relative mt-20">

          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#252525] hidden md:block" />

          <div className="space-y-10">

            {challenges.map((item, index) => (
              <motion.div
                key={item.challenge}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}

                <div className="hidden md:flex absolute left-0 top-4 w-10 h-10 rounded-full bg-[#7A93A8]/10 border border-[#7A93A8]/30 items-center justify-center">

                  <TriangleAlert
                    size={18}
                    className="text-[#7A93A8]"
                  />

                </div>

                <div className="rounded-3xl border border-[#202020] bg-[#111] p-8">

                  <div className="flex items-center gap-3 mb-6">

                    <TriangleAlert
                      size={20}
                      className="text-[#7A93A8] md:hidden"
                    />

                    <h3 className="text-2xl font-bold">
                      {item.challenge}
                    </h3>

                  </div>

                  <div className="flex items-start gap-4">

                    <CheckCircle2
                      className="text-green-500 mt-1 shrink-0"
                      size={22}
                    />

                    <p className="text-neutral-400 leading-8">
                      {item.solution}
                    </p>

                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Lessons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] border border-[#202020] bg-gradient-to-br from-[#111] to-[#0d0d0d] p-10"
        >

          <div className="flex items-center gap-3 mb-10">

            <Lightbulb
              className="text-[#7A93A8]"
              size={28}
            />

            <h3 className="text-3xl font-bold">
              Key Takeaways
            </h3>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {lessons.map((lesson) => (
              <motion.div
                key={lesson}
                whileHover={{
                  x: 8,
                }}
                className="rounded-2xl border border-[#262626] bg-[#161616] p-6 flex gap-4"
              >

                <ArrowRight
                  className="text-[#7A93A8] shrink-0 mt-1"
                  size={18}
                />

                <p className="leading-8 text-neutral-300">
                  {lesson}
                </p>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* Final Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >

          <p className="max-w-4xl mx-auto text-2xl leading-relaxed font-light text-neutral-300 italic">
            "Great software isn't just about shipping features.
            It's about solving real problems while building systems
            that remain maintainable, scalable and enjoyable to use."
          </p>

        </motion.div>

      </div>
    </section>
  );
}