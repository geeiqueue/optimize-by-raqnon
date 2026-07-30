"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "How I Help", href: "#how-i-help" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "border-b border-white/5 bg-[#070b12]/80 backdrop-blur-md shadow-lg shadow-black/20" 
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group leading-none flex flex-col">
          <span className="text-xl font-black tracking-wider text-white transition-colors group-hover:text-slate-200 md:text-2xl">
            OPTIMIZE
          </span>
          <span className="ml-[2px] mt-0.5 text-[0.6rem] uppercase tracking-[0.4em] text-slate-400 transition-colors group-hover:text-slate-300">
            by Raqnon
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-2 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-white md:inline-block py-2"
          >
            Let&apos;s Talk
          </a>
          
          <a href="#contact">
            <Button 
              className="rounded-full bg-white px-6 text-sm font-medium text-black transition-all hover:bg-slate-200 active:scale-95"
            >
              Hire Me
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
