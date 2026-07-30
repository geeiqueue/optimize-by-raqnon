import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    title: "Improve Business Processes",
    description:
      "I work with businesses to identify operational bottlenecks, simplify workflows, and align technology with business goals.",
  },
  {
    number: "02",
    title: "Build Custom Software",
    description:
      "From internal dashboards to customer portals, I build software designed specifically around the way your business works.",
  },
  {
    number: "03",
    title: "Automate Repetitive Work",
    description:
      "Reduce manual work through automation, AI-assisted workflows, and system integrations that save time and improve efficiency.",
  },
  {
    number: "04",
    title: "Build Secure & Reliable Systems",
    description:
      "Every solution is built with security, testing, and maintainability in mind, so your business can grow with confidence.",
  },
];

export default function HowIHelp() {
  return (
    <section
      id="how-i-help"
      className="scroll-mt-24 border-t border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            01 · HOW I HELP
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-5xl">
            Technology should make your business simpler, not more
            complicated.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every business has unique challenges. I take time to understand
            your goals, identify opportunities for improvement, and build
            practical technology solutions that create measurable value.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
            >
              <span className="text-5xl font-bold text-gray-200 transition-colors duration-300 group-hover:text-black">
                {service.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold text-black">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-24 rounded-3xl border border-gray-200 bg-gray-50 px-8 py-14 text-center">
          <h3 className="text-3xl font-bold text-black">
            Not sure where to start?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you're planning a new application, looking to automate
            repetitive work, or improve an existing process, I'd be happy to
            discuss your goals and recommend the right approach.
          </p>

          <Button size="lg" className="mt-8 rounded-full px-8">
            Hire Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}