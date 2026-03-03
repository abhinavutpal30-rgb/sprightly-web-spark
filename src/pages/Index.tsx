import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConfigurationSection from "@/components/ConfigurationSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GreenFeaturesSection from "@/components/GreenFeaturesSection";
import LocationSection from "@/components/LocationSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <FeaturesSection />
      <ConfigurationSection />
      <AmenitiesSection />
      <GreenFeaturesSection />
      <LocationSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
