import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  ShieldCheck,
  LayoutDashboard,
  Users,
  Calendar,
  Bell,
  Database,
} from "lucide-react";

export default function ProjectFeatures({ features }) {
  return (
    <section className="py-28 border-t border-[#181818]">
      <div className="max-w-[1450px] mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Features"
          title="Designed Around Real User Needs"
          description="Every feature was built to solve a practical problem while keeping the experience simple and intuitive."
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-[#202020] bg-[#111] p-8 hover:border-[#7A93A8]/40 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#7A93A8]/10 border border-[#7A93A8]/20 flex items-center justify-center mb-8 group-hover:bg-[#7A93A8]/20 transition-all">
                  <Icon className="text-[#7A93A8]" size={26} />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#7A93A8] transition-colors">
                  {feature.title}
                </h3>

                <p className="leading-8 text-neutral-400">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
