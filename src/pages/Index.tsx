import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import CaseStudies from "@/components/CaseStudies";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Statistics />
      <Skills />
      <Experience />
      <Timeline />
      <CaseStudies />
      <Certifications />
      <Contact />
      <ScrollToTop />
      <footer className="py-8 text-center text-muted-foreground border-t border-border no-print">
        <p>© 2024 Anubhaw Kumar Singh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
