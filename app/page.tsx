"use client";

import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import HowIHelp from "@/components/sections/how-i-help";
import Projects from "@/components/sections/projects";
import HowIWork from "@/components/sections/how-i-work";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import FunnelModal from "@/components/ui/funnel-modal";

export default function Home() {
  const [isFunnelOpen, setIsFunnelOpen] = useState(false);

  const openFunnel = (e?: React.MouseEvent) => {
    // Intercepts dead click events or page jumps and fires the funnel logic instead
    if (e) e.preventDefault();
    setIsFunnelOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070b12] text-white antialiased">
      {/* Interactive Value-Exchange Funnel Modal Guard Layer */}
      <FunnelModal isOpen={isFunnelOpen} onClose={() => setIsFunnelOpen(false)} />

      {/* Pass the funnel controller down into all sections as interactive parameters */}
      <div className="relative z-10" onClick={(e) => {
        const target = e.target as HTMLElement;
        // Automatically captures clicks on any native CTA anchor or button element pointing to contact tracks
        if (target.closest('a[href="#contact"]') || target.innerText.toLowerCase() === "hire me" || target.innerText.toLowerCase() === "let us map it out") {
          openFunnel(e as unknown as React.MouseEvent);
        }
      }}>
        <Navbar />
        <main className="relative w-full">
          <Hero />
          <HowIHelp />
          <Projects />
          <HowIWork />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
