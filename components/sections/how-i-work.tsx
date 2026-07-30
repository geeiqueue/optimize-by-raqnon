export default function HowIWork() {
  const steps = [
    {
      number: "01",
      title: "I listen first.",
      description:
        "Before writing a single line of code, I want to understand your business. The better I understand the problem, the better the solution will be.",
    },
    {
      number: "02",
      title: "I keep things simple.",
      description:
        "I don't build features just because they're possible. I build what actually helps your business and leave out the things that don't.",
    },
    {
      number: "03",
      title: "I build it properly.",
      description:
        "Clean code, testing, and security are part of every project. I want you to have something that's reliable today and easy to improve tomorrow.",
    },
    {
      number: "04",
      title: "I don't disappear after launch.",
      description:
        "Launching isn't the finish line. If something needs improving or you have new ideas later on, I'm here to help.",
    },
  ];

  return (
    <section
      id="how-i-work"
      className="border-b bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            HOW I WORK
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-black md:text-5xl">
            Every project starts with a conversation.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I like keeping things simple. We'll talk about what you're trying to
            achieve, figure out the best way to get there, and build something
            that makes your work easier.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border bg-white p-8"
            >
              <p className="text-sm font-semibold text-gray-400">
                {step.number}
              </p>

              <h3 className="mt-4 text-2xl font-bold text-black">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}