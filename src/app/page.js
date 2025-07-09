import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import ServicesSection from "./components/Services";
import PortfolioSection from "./components/PortfolioSection";
import ModelsSection from "./components/ModelsSection";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Gallery />
      <ServicesSection />
      <PortfolioSection />
      <ModelsSection />
    </div>
  );
};

export default page;
