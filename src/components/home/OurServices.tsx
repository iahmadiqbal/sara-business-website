import { FaDigitalOcean, FaBrain, FaShieldAlt } from "react-icons/fa";
import { MdAnalytics, MdLock, MdUpdate } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const services = [
  {
    icon: <FaDigitalOcean className="service-icon" />,
    title: "Digital Transformation",
    description:
      "Convert data noise to intelligent insights for competitive differentiation quality check. Competitive differentiation and quality assurance.",
  },
  {
    icon: <FaBrain className="service-icon" />,
    title: "Business Intelligence",
    description:
      "Convert data noise to intelligent insights for competitive differentiation quality check. Competitive differentiation and quality assurance.",
  },
  {
    icon: <FaShieldAlt className="service-icon" />,
    title: "Cybersecurity Awareness",
    description:
      "Convert data noise to intelligent insights for competitive differentiation quality check. Competitive differentiation and quality assurance.",
  },
  {
    icon: <MdAnalytics className="service-icon" />,
    title: "Digital Transformation",
    description:
      "Convert data noise to intelligent insights for competitive differentiation quality check. Competitive differentiation and quality assurance.",
  },
  {
    icon: <MdLock className="service-icon" />,
    title: "Business Intelligence",
    description:
      "Convert data noise to intelligent insights for competitive differentiation quality check. Competitive differentiation and quality assurance.",
  },
  {
    icon: <MdUpdate className="service-icon" />,
    title: "Cybersecurity Awareness",
    description:
      "Convert data noise to intelligent insights for competitive differentiation quality check. Competitive differentiation and quality assurance.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Services We Provide with{" "}
          <span className="text-[#8936FB]">Get Benefited.</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          This list encompasses a broad range of services that can help
          businesses manage and optimize their IT infrastructure, enhance their
          security posture, support their digital transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <div className="transition-transform duration-500 group-hover:rotate-y-180">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-black hover:text-[#8936FB] transition-colors"
            >
              Read More <FaArrowRight className="text-xs" />
            </a>
          </div>
        ))}
      </div>

      {/* ✅ HR line inside the section */}
      <hr className="mt-12 border-t border-gray-300 w-full" />

      {/* Icon animation style */}
      <style>{`
        .service-icon {
          font-size: 2.5rem;
          color: #8936FB;
          margin-bottom: 1rem;
          transition: transform 0.5s;
        }

        .group:hover .service-icon {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default OurServices;
