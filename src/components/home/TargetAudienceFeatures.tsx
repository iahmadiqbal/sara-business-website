import { FaChartLine, FaClock, FaDatabase } from "react-icons/fa";

const TargetAudienceFeatures = () => {
  return (
    <section className="relative bg-white py-12 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Black Circular Dotted Pattern - Bottom Right Behind Image */}
      <div
        className="absolute bottom-[-40px] right-[-40px] w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 
        rounded-full z-0 pointer-events-none
        bg-[radial-gradient(circle,#000_2px,transparent_1px)] 
        bg-[length:16px_16px]"
      ></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
            Target Audience for your <br />
            <span className="text-[#8936FB]">Business Solution</span>
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
          <button className="mt-4 inline-block border-2 border-black text-black px-6 py-2 rounded-lg hover:text-[#8936FB] transition duration-300">
            Explore All
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/businessgrowth.webp"
            alt="Growth Illustration"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceFeatures;
