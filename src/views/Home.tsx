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
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to right, #F9F8FF 0%, #F9F8FF 55%, #C0A9F2 100%)",
        }}
      >
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center px-4">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-[#323232]">Transform Your</span>
              <span className="text-[#8861EA] ml-4">Grow Business</span>
              <span className="text-[#323232] block">
                with Strategic IT Solutions
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-2xl">
              Leverage cutting-edge IT solutions tailored to your business
              needs. Embrace a future where technology fuels your success.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="bg-[#875CF9] text-white px-6 py-3 rounded-md hover:bg-[#6C4ED4] transition font-medium">
                  Get in Touch
                </button>
              </Link>
              <Link to="/learn-more">
                <button className="bg-gray-800 text-white px-6 py-3 rounded-md border border-gray-800 hover:bg-gray-700 transition font-medium">
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
