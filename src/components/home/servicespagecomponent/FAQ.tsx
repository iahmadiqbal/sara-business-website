import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including e-commerce, healthcare, education, IT, and professional services. Our flexible solutions are designed to adapt to various business needs.",
  },
  {
    question: "What is your experience in the industry?",
    answer:
      "Our team has years of experience in providing services like web development, VPS hosting, WordPress customization, SEO, and digital marketing to both local and international clients.",
  },
  {
    question: "How do I get the services?",
    answer:
      "You can reach out to us through our contact form, live chat, or email. Once we receive your request, our team will get in touch with you to understand your needs and propose a suitable solution.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md transition duration-300"
              style={{ backgroundColor: "#FFFFFF" }} // ✅ Custom hex color
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 px-4 text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
