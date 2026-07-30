export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              OPTIMIZE
            </h2>

            <p className="text-lg text-gray-300">
              by Raqnon
            </p>

            <p className="mt-6 max-w-md leading-7 text-gray-400">
              I build software that helps businesses save time,
              improve their workflow, and grow with confidence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">Navigation</h3>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li><a href="#how-i-help">How I Help</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Let's Talk</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold">Connect</h3>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>Email</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-sm text-gray-500">
          © 2026 Optimize by Raqnon. Designed and built by LJ.
        </div>
      </div>
    </footer>
  );
}