import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section
      id="about"
      className="border-b bg-white py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[420px_1fr] lg:px-8">
        {/* Photo */}
        <div>
          <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gray-100">
            <div className="px-8 text-center">
              <p className="font-semibold text-gray-700">
                Professional Photo
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Replace this placeholder with a professional headshot before
                launching the website.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            ABOUT
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-black md:text-5xl">
            Hey, I'm LJ.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
            <p>
              I enjoy building software that solves real business problems.
              Sometimes that's a web application. Sometimes it's automation.
              Sometimes it's improving a process that's slowing a team down.
            </p>

            <p>
              My goal is always the same. Build something that's simple to use,
              reliable, and worth the investment. I care just as much about the
              experience as I do the code behind it.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
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