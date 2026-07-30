import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "How I Help", href: "#how-i-help" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Let's Talk", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="leading-none">
          <div className="text-[2.2rem] font-black tracking-tight text-slate-900">
            OPTIMIZE
          </div>
          <div className="ml-[3px] text-[0.7rem] uppercase tracking-[0.35em] text-gray-600">
            by Raqnon
          </div>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-gray-700 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="rounded-full px-6">
          Hire Me
        </Button>
      </div>
    </header>
  );
}