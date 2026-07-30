export default function HowIWork() {
  const steps = [
    {
      number: "01",
      title: "I listen first",
      description:
        "Before writing code, I want to understand your daily business workflow. The better I see the actual problem, the simpler and more effective the final tool will be.",
    },
    {
      number: "02",
      title: "I keep things simple",
      description:
        "I do not build extra features just because they sound flashy. I focus entirely on what saves you time and leave out all the heavy clutter.",
    },
    {
      number: "03",
      title: "I build it properly",
      description:
        "Clean logic, strict testing, and solid security are standard parts of my build process. You get a reliable asset that is easy to upgrade down the road.",
    },
    {
      number: "04",
      title: "I stay around post-launch",
      description:
        "Going live is not the finish line. If your processes scale, something needs a tweak, or you get fresh ideas later on, I am right here to help.",
    },
  ];

  return (
    <section
      id="how-i-work"
      className="relative isolate border-b border-white/5 bg-[#070b12] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            03 · MY METHOD
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Every project starts with a real conversation.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            I value keeping setups lean. We map out what you are looking to achieve, find the most direct route to get there, and build software that makes your business easier to run.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-3xl border border-white/5 bg-slate-950/40 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-sky-400 transition-colors">
                PHASE {step.number}
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
