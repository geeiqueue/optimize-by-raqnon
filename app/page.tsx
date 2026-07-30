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
    if (e) e.preventDefault();
    setIsFunnelOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070b12] text-white antialiased">
      {/* Global Ingestion Funnel Overlay Card */}
      <FunnelModal isOpen={isFunnelOpen} onClose={() => setIsFunnelOpen(false)} />

      {/* Comprehensive multi-phrase click hook catcher */}
      <div 
        className="relative z-10" 
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const buttonText = target.innerText?.toLowerCase().trim() || "";
          const linkHref = target.closest("a")?.getAttribute("href") || "";

          // Explicit target arrays mapping to every active CTA copy configuration on your page
          const targetPhrases = [
            "hire me", 
            "let us talk", 
            "let us map it out", 
            "start a project", 
            "send an email", 
            "view project"
          ];

          // If a user clicks an explicit layout link wrapper or any matched CTA phrase text block
          if (
            linkHref === "#contact" || 
            linkHref.startsWith("mailto:") ||
            targetPhrases.some(phrase => buttonText.includes(phrase))
          ) {
            openFunnel(e as unknown as React.MouseEvent);
          }
        }}
      >
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
