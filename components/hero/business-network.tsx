"use client";

import { useEffect, useState } from "react";

export default function BusinessNetwork() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x: xPercent, y: yPercent });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full bg-[#070b12] overflow-hidden pointer-events-none">
      {/* Premium Tech Blueprint Matrix Mesh lines */}
      <div 
        className="absolute inset-0 opacity-15 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: `translate(${(mousePos.x - 50) * 0.04}px, ${(mousePos.y - 50) * 0.04}px)`,
        }}
      />

      {/* Cyber Constellation Data Node Points Array */}
      <div 
        className="absolute inset-0 opacity-30 transition-transform duration-500 ease-out"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(34, 211, 238, 0.2) 1px, transparent 2px)",
          backgroundSize: "100px 100px",
          transform: `translate(${(mousePos.x - 50) * -0.06}px, ${(mousePos.y - 50) * -0.06}px)`,
        }}
      />
      {/* Floating High-Contrast Digital Node Orbs */}
      <div className="absolute inset-0">
        {/* Node 1: Left Upper Track */}
        <div className="absolute top-[25%] left-[18%] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] animate-pulse" />
        <div className="absolute top-[25%] left-[18%] h-[150px] w-[1px] bg-gradient-to-b from-sky-400/30 to-transparent rotate-[45deg] origin-top" />

        {/* Node 2: Center Content Track */}
        <div className="absolute top-[45%] left-[48%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
        <div className="absolute top-[45%] left-[48%] h-[120px] w-[1px] bg-gradient-to-b from-cyan-400/30 to-transparent rotate-[-30deg] origin-top" />

        {/* Node 3: Right Upper Track */}
        <div className="absolute top-[20%] left-[82%] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] animate-pulse" />
        
        {/* Node 4: Left Lower Track */}
        <div className="absolute top-[75%] left-[25%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
        <div className="absolute top-[75%] left-[25%] h-[100px] w-[1px] bg-gradient-to-r from-cyan-400/20 to-transparent" />

        {/* Node 5: Right Lower Track */}
        <div className="absolute top-[68%] left-[75%] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] animate-pulse" />
      </div>

      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div 
        className="absolute inset-0 mixed-blend-screen transition-all duration-200 ease-out hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(14, 165, 233, 0.08), transparent 80%)`
        }}
      />
    </div>
  );
}
