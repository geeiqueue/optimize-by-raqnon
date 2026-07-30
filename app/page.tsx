import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import HowIHelp from "@/components/sections/how-i-help";
import Projects from "@/components/sections/projects";
import HowIWork from "@/components/sections/how-i-work";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowIHelp />
      <Projects />
      <HowIWork />
      <About />
      <Contact />
      <Footer />
    </>
  );
}