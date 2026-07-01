
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";


export default function Overview({
  overview,
}) {
  return (
    <section className="py-28">

      <div className="max-w-[1450px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-[1fr_350px] gap-24">

          {/* LEFT */}

          <div>

            <SectionTitle
              eyebrow="Overview"
              title="The Story Behind the Project"
              description="Understanding the problem, the vision and the technical direction."
            />

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              className="text-lg text-neutral-400 leading-9"
            >
              {overview}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: .3 }}
              className="grid md:grid-cols-3 gap-6 mt-16"
            >
              {[
                {
                  title: "Performance",
                  value: "Optimized",
                },
                {
                  title: "Architecture",
                  value: "Scalable",
                },
                {
                  title: "Responsive",
                  value: "100%",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#202020] bg-[#111] p-6"
                >
                  <p className="font-mono uppercase text-[11px] tracking-[0.2em] text-neutral-500">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {item.value}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>

       
        </div>
      </div>
    </section>
  );
}