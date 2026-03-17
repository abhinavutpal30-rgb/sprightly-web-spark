import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import PartnersSection from "@/components/home/PartnersSection";
import PropertiesSection from "@/components/home/PropertiesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <PartnersSection />
      <PropertiesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
};

export default Home;
