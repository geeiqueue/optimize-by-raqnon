export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate border-t border-white/5 bg-[#070b12] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand Panel */}
          <div>
            <h2 className="text-2xl font-black tracking-wider text-white">
              OPTIMIZE
            </h2>

            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mt-1">
              by Raqnon
            </p>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400">
              I build software that helps businesses save time, improve their workflow, and grow with confidence.
            </p>
          </div>

          {/* Navigation Directory */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3 text-sm font-medium text-slate-400">
              <li>
                <a href="#how-i-help" className="transition-colors hover:text-white">
                  How I Help
                </a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Let us Talk
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Action Directory */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Connect
            </h3>

            <ul className="mt-5 space-y-3 text-sm font-medium text-slate-400">
              <li>
                <a href="mailto:your-email@example.com" className="transition-colors hover:text-white">
                  Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Attribution Details */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Optimize by Raqnon. All rights reserved.</p>
          <p>Designed and built by LJ.</p>
        </div>
      </div>
    </footer>
  );
}
