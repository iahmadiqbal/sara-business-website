import { FaChartLine, FaTachometerAlt, FaDatabase } from "react-icons/fa";

const QuickStats = () => {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side – Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/totalrevenue.webp"
            alt="totalrevenue"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Right Side – Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            We offer Real-time <br />
            <span className="text-[#0062FF]">Business Grow</span> Solutions
          </h2>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-6">
            <div className="flex flex-col min-w-[120px]">
              <span className="text-3xl font-bold text-black">$7bil+</span>
              <span className="text-gray-600 text-sm">Project Handover</span>
            </div>
            <div className="flex flex-col min-w-[120px]">
              <span className="text-3xl font-bold text-black">1.9mil+</span>
              <span className="text-gray-600 text-sm">Happy Customers</span>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <FaChartLine className="text-indigo-600 text-xl mt-1" />
              <p className="text-gray-800 font-medium">
                Various analysis options.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaTachometerAlt className="text-indigo-600 text-xl mt-1" />
              <p className="text-gray-800 font-medium">
                Page Load (time, size, number of requests).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaDatabase className="text-indigo-600 text-xl mt-1" />
              <p className="text-gray-800 font-medium">Big data analysis.</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-white border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 transition">
            Explore all
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
