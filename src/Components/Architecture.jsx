
import { motion } from "framer-motion";
import {
  Layers3,
  MonitorSmartphone,
  Server,
  Database,
  Shield,
  Cloud,
  ArrowDown,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const architecture = [
  {
    icon: MonitorSmartphone,
    title: "Frontend",
    description:
      "Responsive user interface built with modern React architecture, reusable components and smooth animations.",
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "REST API responsible for authentication, business logic and communication with external services.",
    tech: ["Express", "Node.js", "JWT"],
  },
  {
    icon: Database,
    title: "Database",
    description:
      "Stores users, products, events and application data with optimized schemas.",
    tech: ["MongoDB", "Redis"],
  },
  {
    icon: Cloud,
    title: "Deployment",
    description:
      "Production deployment with CDN, image optimization and cloud storage.",
    tech: ["Vercel", "Cloudinary"],
  },
];

export default function Architecture() {
  return (
    <section className="py-32 border-t border-[#181818]">
      <div className="max-w-[1450px] mx-auto px-6 lg:px-10">

        <SectionTitle
          eyebrow="Architecture"
          title="How Everything Works Together"
          description="A high-level overview of how the application is structured from the client to the database."
        />

        {/* FLOW */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] border border-[#202020] bg-[#101010] p-8 lg:p-12"
        >

          <div className="hidden lg:flex justify-between items-center">

            <FlowCard
              icon={<MonitorSmartphone size={30} />}
              title="Client"
            />

            <ArrowDown className="rotate-[-90deg] text-[#7A93A8]" />

            <FlowCard
              icon={<Server size={30} />}
              title="API"
            />

            <ArrowDown className="rotate-[-90deg] text-[#7A93A8]" />

            <FlowCard
              icon={<Shield size={30} />}
              title="Auth"
            />

            <ArrowDown className="rotate-[-90deg] text-[#7A93A8]" />

            <FlowCard
              icon={<Database size={30} />}
              title="Database"
            />

          </div>

          {/* MOBILE */}

          <div className="lg:hidden space-y-6">

            <FlowCard
              icon={<MonitorSmartphone size={28} />}
              title="Client"
            />

            <div className="flex justify-center">
              <ArrowDown className="text-[#7A93A8]" />
            </div>

            <FlowCard
              icon={<Server size={28} />}
              title="Backend"
            />

            <div className="flex justify-center">
              <ArrowDown className="text-[#7A93A8]" />
            </div>

            <FlowCard
              icon={<Shield size={28} />}
              title="Authentication"
            />

            <div className="flex justify-center">
              <ArrowDown className="text-[#7A93A8]" />
            </div>

            <FlowCard
              icon={<Database size={28} />}
              title="Database"
            />

          </div>

        </motion.div>

        {/* DETAILS */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {architecture.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .55,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-[#202020] bg-[#111] p-8"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#7A93A8]/10 border border-[#7A93A8]/20 flex items-center justify-center mb-6">

                  <Icon
                    size={28}
                    className="text-[#7A93A8]"
                  />

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="leading-8 text-neutral-400 mb-8">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {item.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-3 py-2 rounded-lg bg-[#171717] border border-[#272727] text-sm text-neutral-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </motion.div>

            );
          })}
        </div>

        {/* SUMMARY */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] border border-[#202020] bg-gradient-to-br from-[#111] to-[#0d0d0d] p-10"
        >

          <div className="flex items-center gap-3 mb-6">

            <Layers3
              className="text-[#7A93A8]"
              size={26}
            />

            <h3 className="text-2xl font-bold">
              Architectural Goals
            </h3>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Scalable structure",
              "Reusable components",
              "Secure authentication",
              "High performance",
            ].map((goal) => (

              <div
                key={goal}
                className="rounded-2xl bg-[#171717] border border-[#262626] p-6"
              >
                <p className="text-neutral-300 leading-7">
                  {goal}
                </p>
              </div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

function FlowCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center">

      <div className="w-24 h-24 rounded-3xl bg-[#161616] border border-[#282828] flex items-center justify-center text-[#7A93A8]">

        {icon}

      </div>

      <h4 className="mt-4 font-semibold text-lg">
        {title}
      </h4>

    </div>
  );
}