import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-20 text-white"
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
          LET&apos;S TALK
        </p>

        <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          Let&apos;s build something useful.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-300">
          Whether you're ready to start a project or just want to bounce around
          an idea, I'd love to hear from you.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full bg-white px-8 text-black hover:bg-gray-200"
          >
            Hire Me
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full !border-white !bg-transparent !text-white hover:!bg-white hover:!text-black"
          >
            Let&apos;s Talk
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}