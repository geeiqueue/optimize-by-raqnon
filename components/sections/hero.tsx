import dynamic from "next/dynamic";

const BusinessNetwork = dynamic(() => import("@/components/hero/business-network"), {
  ssr: false,
});
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

const process = [
  "Tell me about your business",
  "I help you find the right solution",
  "I build it",
  "I test everything properly",
  "I help you launch with confidence",
];

const principles = [
  "Build what solves the problem.",
  "Leverage practical AI and automation.",
  "Keep your business data completely secure.",
  "Communicate clearly throughout the project.",
  "Think long term, not just launch day.",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-800 bg-[#070b12] text-white">
      <BusinessNetwork />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#070b12]/90 via-[#070b12]/50 to-[#070b12]/80" />

      <div className="relative z-20 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400 flex items-center gap-2">
            Independent Software Builder & Automation Consultant
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            I build digital systems
            <br />
            that help businesses
            <br />
            grow.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Hey, I&apos;m <strong>LJ</strong>.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            I help businesses optimize the way they work through software, AI, and automation. Whether it&apos;s a web app or an internal tool, my goal is simple: empower your business with practical technology that saves time and supports sustainable growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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
          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-300 shrink-0" />
              <span>Currently available for freelance projects.</span>
            </div>
            <div className="flex items-center gap-2 text-sky-300">
              <ShieldAlert className="h-5 w-5 shrink-0" />
              <span>Your business logic and client data are fully protected under strict confidentiality.</span>
            </div>
          </div>
        </div>

        {/* Transparent glass card with a dark backdrop mask to isolate the text */}
        <div className="relative rounded-3xl border border-white/10 bg-slate-950/40 p-6 shadow-2xl shadow-black/80 backdrop-blur-md lg:max-w-md lg:justify-self-end">
          {/* Inner vignette overlay that fades out the busy background shapes strictly behind this text */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-radial from-[#070b12]/10 via-[#070b12]/60 to-[#070b12]/95 opacity-90" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            What it&apos;s like to work with me
          </p>

          <div className="mt-5 space-y-3.5">
            {process.map((step) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                <p className="text-base font-medium text-slate-200">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              My Core Assurances
            </p>

            <ul className="mt-4 space-y-3">
              {principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                  <span className="text-sm text-slate-300 leading-normal">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
