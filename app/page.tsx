import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Languages from "@/components/sections/Languages";
import References from "@/components/sections/References";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Experience />
      <Education />
      <Languages />
      <References />
      <Contact />
      <Footer />
    </main>
  );
}
