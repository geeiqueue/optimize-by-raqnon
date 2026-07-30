import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    number: "01",
    name: "LocalLeadHub",
    description:
      "A SaaS platform that helps businesses find local leads faster. Built to automate lead generation, organize results, and export clean data without the usual manual work.",
  },
  {
    number: "02",
    name: "ClubStack",
    description:
      "A private poker club management platform built from the ground up. Designed for club owners to manage players, tables, chip balances, and games through a simple, mobile-friendly interface.",
  },
  {
    number: "03",
    name: "KSM Seat Map",
    description:
      "A Chrome extension that makes Ticketmaster seat maps easier to understand by grouping sections visually. It helps teams make pricing decisions faster while reducing manual work.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            PROJECTS
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-black md:text-5xl">
            A few things I've built.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every project starts with a problem. My job is to understand it,
            build the right solution, and keep things as simple as possible.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {projects.map((project) => (
            <div
              key={project.number}
              className="grid gap-8 border-t pt-12 lg:grid-cols-[120px_1fr_auto]"
            >
              <div className="text-4xl font-bold text-gray-300">
                {project.number}
              </div>

              <div>
                <h3 className="text-3xl font-bold text-black">
                  {project.name}
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                  {project.description}
                </p>
              </div>

              <div className="flex items-start">
                <Button variant="ghost" className="gap-2 text-base">
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-3xl bg-gray-100 p-10">
          <h3 className="text-3xl font-bold text-black">
            Have something in mind?
          </h3>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you're planning a new project, improving an existing
            system, or you're not sure where to start, let's talk. I'd be
            happy to hear what you're working on.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8">
              Hire Me
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}