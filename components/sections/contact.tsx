import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate border-b border-white/5 bg-[#070b12] py-32 text-white"
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-sky-400">
          <Mail className="h-5 w-5" />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          05 · CONTACT
        </p>

        {/* Swapped over to an eye-comfort geometric layout sans-serif heading profile */}
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-100 md:text-6xl leading-[1.2]">
          Let us build something useful.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
          Whether you are ready to kick off a brand new project, want to automate a repetitive spreadsheet problem, or just want to bounce an idea around, I am always happy to chat.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="inline-block">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 py-6 text-sm font-medium text-black transition-all hover:bg-slate-200 active:scale-95"
            >
              Start a Project
            </Button>
          </a>
          <a href="#contact" className="inline-block">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/10 bg-white/5 px-8 py-6 text-sm font-medium text-white transition-all hover:bg-white hover:text-black active:scale-95 flex items-center gap-2"
            >
              Send an Email
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
