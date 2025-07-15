import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import ServicesSection from "./components/Services";
import PortfolioSection from "./components/PortfolioSection";
import TeamSection from "./components/ModelsSection";
import AboutUs from "./components/Aboutus";
import AboutDeveloper from "./components/AboutDeveloper";
import ContactUs from "./components/Contactus";
import { Footer } from "./components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Gallery />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutUs />
      <AboutDeveloper />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
