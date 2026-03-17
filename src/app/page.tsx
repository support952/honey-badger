import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GridLines from "@/components/GridLines";
import SectionDivider from "@/components/SectionDivider";

// Dynamic imports for below-fold sections — reduces initial JS bundle
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Process = dynamic(() => import("@/components/Process"));
const PathSection = dynamic(() => import("@/components/PathSection"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative">
      <GridLines />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <PathSection />
      <SectionDivider />
      <CTA />
      <Footer />
    </main>
  );
}
