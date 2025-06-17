import { Link } from "react-router-dom";

const ServicesBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white to-[#D1BCF9] p-30 mt-15">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          <Link
            to="/"
            className="text-black underline underline-offset-2 font-medium"
          >
            Home
          </Link>
          <span className="text-black mx-1">{">"}</span> Services
        </p>
      </div>
    </div>
  );
};

export default ServicesBanner;
