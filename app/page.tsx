import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import HowIHelp from "@/components/sections/how-i-help";
import Projects from "@/components/sections/projects";
import HowIWork from "@/components/sections/how-i-work";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import BusinessNetwork from "@/components/hero/business-network";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070b12] text-white antialiased">
      {/* Absolute positioning lets the tech grid span the total depth of your scrolling canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <BusinessNetwork />
      </div>

      <div className="relative z-10">
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
