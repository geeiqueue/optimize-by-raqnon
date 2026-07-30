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

      {/* Upgraded click interceptor: Only fires on true button and anchor actions */}
      <div 
        className="relative z-10" 
        onClick={(e) => {
          const target = e.target as HTMLElement;
          
          // Locate the nearest clickable interactive button or link wrapper container
          const interactiveElement = target.closest("button, a");
          if (!interactiveElement) return;

          const buttonText = (interactiveElement as HTMLElement).innerText?.toLowerCase().trim() || "";
          const linkHref = interactiveElement.getAttribute("href") || "";

          // Strict phrase array matching explicit layout text tokens exactly
          const targetPhrases = [
            "hire me", 
            "let us talk", 
            "let us map it out", 
            "start a project", 
            "send an email"
          ];

          // Fires the pop-up panel ONLY if a true interactive control element matches the strict logic
          if (
            linkHref === "#contact" || 
            linkHref.startsWith("mailto:") ||
            targetPhrases.includes(buttonText)
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
