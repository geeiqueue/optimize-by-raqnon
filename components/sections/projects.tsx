import { ExternalLink, FolderGit2 } from "lucide-react";
import ProjectMesh from "./project-mesh";

const projectList = [
  {
    number: "01",
    name: "LocalLeadHub",
    tagline: "SaaS Lead Generator",
    description:
      "A platform built to save business owners from boring manual sourcing. It automates finding local prospects, organizes the raw results cleanly, and lets teams export verified data lists instantly.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    number: "02",
    name: "ClubStack",
    tagline: "Private Poker Platform",
    description:
      "A mobile-friendly system built from scratch for private poker club owners. It simplifies how hosts track player balances, monitor active table layouts, and audit live chip counts on the fly.",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate scroll-mt-24 border-t border-white/5 bg-[#070b12] text-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            02 · SELECTED WORK
          </p>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-100 md:text-5xl leading-[1.2]">
            A few practical things I have built.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-400">
            Every project starts with a real problem. My goal is always to cut out the fluff, build the right functional flow, and keep the user experience as simple as possible.
          </p>
        </div>

        <div className="mt-20 space-y-12">
          {projectList.map((project, index) => (
            <article
              key={project.number}
              className="group relative grid gap-8 rounded-3xl border border-white/5 bg-slate-950/40 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02] lg:grid-cols-[1.2fr_1.8fr_1fr]"
            >
              {/* Column 1: Identity & Tags */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-slate-400 group-hover:text-sky-400 transition-colors">
                    <FolderGit2 className="h-6 w-6" />
                  </div>
                  <span className="mt-6 block text-xs font-bold tracking-widest text-slate-500">
                    PROJECT {project.number}
                  </span>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sky-400/80">
                    {project.tagline}
                  </p>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2 lg:mt-0">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 2: Deep Summary Content */}
              <div className="flex flex-col justify-between border-t border-white/5 pt-6 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-8">
                <p className="text-base leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex">
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-medium text-slate-300 transition-all hover:bg-white hover:text-black active:scale-95">
                    View Project
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Column 3: Custom 3D Mesh Preview Panel */}
              <div className="flex items-center justify-center border-t border-white/5 pt-6 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-6">
                <ProjectMesh index={index} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
