import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white to-[#D1BCF9] pt-[80px] pb-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {" "}
        {/* Changed from text-left to text-center */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          About
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          <Link
            to="/"
            className="text-black underline underline-offset-2 font-medium"
          >
            Home
          </Link>
          <span className="text-black mx-1">{">"}</span> About
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
