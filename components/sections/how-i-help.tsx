import { ArrowRight, Settings, Cpu, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Settings className="h-6 w-6 text-sky-400" />,
    title: "Optimize your workflows",
    description:
      "We look at how you operate every day and strip out the slow, frustrating manual tasks. Less friction means your business scales easily without the extra stress.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-sky-400" />,
    title: "Smart AI & Automation",
    description:
      "Stop repeating yourself. I connect your everyday tools together and build background automations that handle heavy data entry while you focus on growth.",
  },
  {
    icon: <Lock className="h-6 w-6 text-emerald-400" />,
    title: "Strict Data Security",
    description:
      "Your company data is completely isolated. Every workflow, API integration, and system is locked down safely using modern encryption standards.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-sky-400" />,
    title: "Reliable & Stable Tools",
    description:
      "Everything I launch is built simple and fully verified before launch day. No complex or fragile code blocks that break the second you walk away.",
  },
];

export default function HowIHelp() {
  return (
    <section
      id="how-i-help"
      className="relative isolate scroll-mt-24 border-t border-white/5 bg-[#070b12] text-white overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            01 · MISSION & VISION
          </p>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-100 md:text-5xl">
            Empowering your business with practical tech that saves time.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            I help businesses optimize the way they work through software, AI, and automation. My focus is on building clean systems that improve your workflow and support sustainable growth.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative z-10 rounded-3xl border border-white/5 bg-slate-950/40 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-slate-100 transition-colors group-hover:text-sky-300">
                {service.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* Left-Aligned, Two-Column Eye-Comfort Action Banner */}
        <div className="relative z-10 mt-24 rounded-3xl border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent p-8 md:p-12 text-left">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-100 md:text-3xl leading-snug">
                Want to see how we can secure and optimize your workflows?
              </h3>

              {/* Stabilized left-aligned sans-serif text block to eliminate reading fatigue */}
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
                Whether you are planning a fresh automation script, looking to inject smart AI into your operations, or need to verify your data systems are safe, I am happy to chat.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <a href="#contact">
                <Button className="rounded-full bg-white px-8 py-6 text-sm font-medium text-black transition-all hover:bg-slate-200 active:scale-95 flex items-center gap-2">
                  Let us map it out
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
