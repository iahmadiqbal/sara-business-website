import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../components/home/Gallery";
import OurServices from "../components/home/OurServices";
import GrowthSolutions from "../components/home/GrowthSolutions";
import TargetAudienceFeatures from "../components/home/TargetAudienceFeatures";
import HowWeWorkAI from "../components/home/HowWeWorkAI";
import ClientTestimonials from "../components/home/ClientTestimonials";
import GrowthPlans from "../components/home/GrowthPlans";
import LatestPosts from "../components/home/LatestPosts";

const Home: React.FC = () => {
  return (
    <>
      <section
        className="min-h-screen flex items-center px-4 py-10 font-sans"
        style={{
          background:
            "linear-gradient(to right, #F9F8FF 0%, #F9F8FF 55%, #C0A9F2 100%)",
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-[#323232] block">Transform Your</span>
              <span className="text-[#8861EA] block">Grow Business</span>
              <span className="text-[#323232] block">
                with Strategic IT Solutions
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-8">
              Leverage cutting-edge IT solutions tailored to your business
              needs. Embrace a future where technology fuels your success.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <button className="bg-[#875CF9] text-white px-6 py-3 rounded-md hover:bg-[#6C4ED4] transition font-medium">
                  Get in Touch
                </button>
              </Link>
              <Link to="/learn-more">
                <button className="bg-white text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 transition font-medium">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <OurServices />
      <GrowthSolutions />
      <TargetAudienceFeatures />
      <HowWeWorkAI />
      <ClientTestimonials />
      <GrowthPlans />
      <LatestPosts />
    </>
  );
};

export default Home;
