import HowWeWorkAI from "../home/HowWeWorkAI";
import LatestPosts from "../home/LatestPosts";

const SeoBoost = () => {
  return (
    <>
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
              For Next Renewable <br />
              <span className="text-[#0062FF]">SEO Ranking Revolution</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Your Comprehensive Solution for Optimizing Website SEO Performance
              and Achieving Tangible Search Engine Ranking Results.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-800">
                    Trusted Professionals
                  </span>
                  <span className="text-sm font-medium text-gray-800">90%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-[#0062FF] h-2 rounded-full w-[90%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-800">
                    Innovative Solutions
                  </span>
                  <span className="text-sm font-medium text-gray-800">80%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-[#0062FF] h-2 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-800">
                    Security Advices
                  </span>
                  <span className="text-sm font-medium text-gray-800">85%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-[#0062FF] h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/SEM.webp"
                alt="SEM"
                className="w-full sm:w-60 h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/SEMTWO.webp"
                alt="SEMTWO"
                className="w-full sm:w-60 h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <HowWeWorkAI />
      <LatestPosts />
    </>
  );
};

export default SeoBoost;
