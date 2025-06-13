import { FaChartLine, FaClock, FaDatabase } from "react-icons/fa";

const GrowthSolutions = () => {
  return (
    <section className="relative bg-white py-12 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Animated Dot Pattern Behind Image */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 z-0 animate-[dotMove_6s_ease-in-out_infinite] bg-[radial-gradient(black_2px,transparent_1px)] bg-[length:20px_20px]"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/businessgrowth.webp"
            alt="Growth Illustration"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
            We offer Real-time <br />
            <span className="text-[#8936FB]">Business Grow</span> Solutions
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            This list encompasses a broad range of services that can help
            businesses manage and optimize their IT infrastructure, enhance
            their security posture, and support their digital transformation.
          </p>

          {/* Features List */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaChartLine className="text-[#8936FB] text-2xl" />
              <span className="text-gray-800 font-medium">
                Various analysis options
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="text-[#8936FB] text-2xl" />
              <span className="text-gray-800 font-medium">
                Page Load (time, size, number of requests)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FaDatabase className="text-[#8936FB] text-2xl" />
              <span className="text-gray-800 font-medium">
                Big data analysis
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 inline-block border border-black text-black px-6 py-2 rounded-lg hover:text-[#8936FB] transition duration-300">
            Explore All
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrowthSolutions;
