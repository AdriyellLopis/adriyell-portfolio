import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, CareerFocus } from "@/components/AboutFocus";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { Education, Certifications } from "@/components/EduCerts";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <Background />
      <Nav />
      <main>
        <Hero /><About /><CareerFocus /><Experience /><Skills /><Projects /><Education /><Certifications /><CV /><Contact />
      </main>
      <Footer />
    </>
  );
}
