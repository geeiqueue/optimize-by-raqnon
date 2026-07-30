import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export default function About() {
  const stack = ["Next.js / React", "TypeScript", "Node.js", "Tailwind CSS", "REST / GraphQL", "PostgreSQL / Prisma"];

  return (
    <section
      id="about"
      className="relative isolate border-b border-white/5 bg-[#070b12] py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[400px_1fr] lg:px-8">
        
        {/* Interactive Tech Stack Terminal Card */}
        <div className="relative group">
          <div className="flex aspect-[4/5] flex-col rounded-3xl border border-white/5 bg-slate-950/60 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/10 overflow-hidden font-mono text-left">
            {/* Terminal Top Window Title Bar Controls */}
            <div className="flex items-center justify-between border-b border-white/5 bg-slate-900/50 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-[10px] tracking-wider text-slate-500 uppercase flex items-center gap-1.5 font-bold">
                <Terminal className="h-3 w-3 text-sky-400" /> stack.config
              </span>
            </div>

            {/* Simulated Live Console Log Lines */}
            <div className="p-5 text-xs space-y-4 flex-1 overflow-y-auto leading-relaxed">
              <div>
                <span className="text-emerald-400">optimize@raqnon:~$</span> <span className="text-slate-200">init --core-stack</span>
              </div>
              
              <div className="text-slate-400 border-l border-white/5 pl-3 py-1 space-y-2">
                <div className="text-sky-400 font-bold">// primary variables loaded:</div>
                {stack.map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <span className="text-sky-500/70">▶</span>
                    <span className="text-slate-300 font-medium">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 animate-pulse flex items-center gap-1">
                <span className="text-emerald-400">optimize@raqnon:~$</span>
                <div className="h-3 w-1.5 bg-sky-400" />
              </div>
            </div>
          </div>
        </div>
        {/* Biography Content Panel */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            04 · ABOUT ME
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-100 md:text-5xl">
            Hey, I am LJ.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-400">
            <p>
              I build custom software designed to clear up actual business headaches. Sometimes that means setting up a fresh web application from scratch, putting together automated scripts, or repairing an old internal process that is slowing your team down.
            </p>

            <p>
              My focus is straightforward. I create digital assets that remain lightweight to use, reliable under load, and highly practical for your daily operations. I look out for the clean user experience just as much as the layout architecture behind it.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact">
              <Button 
                size="lg" 
                className="rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:bg-slate-200 active:scale-95"
              >
                Hire Me
              </Button>
            </a>

            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/10 bg-white/5 px-8 text-sm font-medium text-slate-300 transition-all hover:bg-white hover:text-black active:scale-95"
              >
                Let us talk
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
