import { ArrowRight, CheckCircle2 } from "lucide-react";
import BusinessNetwork from "@/components/hero/business-network";

const process = [
  "Tell me about your business",
  "I help you find the right solution",
  "I build it",
  "I test everything properly",
  "I help you launch with confidence",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-800 bg-[#070b12] text-white">
      <BusinessNetwork />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070b12]/95 via-[#070b12]/84 to-[#070b12]/60" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Independent Software Engineer & Technology Consultant
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            I build software
            <br />
            that helps businesses
            <br />
            work smarter.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Hey, I&apos;m <strong>LJ</strong>.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            I work with business owners who want to save time, improve their
            workflow, or build something from scratch. Whether it&apos;s a web
            app, automation, or an internal tool, my goal is simple. Build
            something that makes your business easier to run.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-slate-200"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white px-8 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="h-5 w-5 text-emerald-300" />
            Currently available for freelance projects.
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-slate-950/45 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            What it&apos;s like to work with me
          </p>

          <div className="mt-8 space-y-5">
            {process.map((step) => (
              <div key={step} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <p className="text-lg font-medium text-slate-100">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Engineering Principles
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span className="text-slate-200">
                  Keep solutions simple
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span className="text-slate-200">
                  Write maintainable code
                </span>
              </li>

                            <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span className="text-slate-200">
                  Test before shipping
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span className="text-slate-200">
                  Communicate clearly
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span className="text-slate-200">
                  Build for the long term
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}