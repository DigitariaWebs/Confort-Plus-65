import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import CognitiveSection from "@/components/sections/CognitiveSection";
import HeroSection from "@/components/sections/HeroSection";
import JobOpportunitySection from "@/components/sections/JobOpertunitySection";
// import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <JobOpportunitySection />
      <CognitiveSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
