import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const monthlyPlans = [
  {
    title: "Starter",
    price: "$5.00",
    period: "Per Month",
    features: [
      "10 Social Media Account",
      "Free Platform Access",
      "Report analytics",
      "Keyword research",
      "Premium consulting",
      "24/7 Customer Support",
    ],
  },
  {
    title: "Premium",
    price: "$25.00",
    period: "Per Month",
    features: [
      "10 Social Media Account",
      "Free Platform Access",
      "Report analytics",
      "Keyword research",
      "Premium consulting",
      "24/7 Customer Support",
    ],
  },
  {
    title: "Premium Plan",
    price: "$40.00",
    period: "Per Month",
    features: [
      "10 Social Media Account",
      "Free Platform Access",
      "Report analytics",
      "Keyword research",
      "Premium consulting",
      "24/7 Customer Support",
    ],
  },
];

const yearlyPlans = [
  {
    title: "Starter",
    price: "$50.00",
    period: "Per Year",
    features: monthlyPlans[0].features,
  },
  {
    title: "Premium",
    price: "$250.00",
    period: "Per Year",
    features: monthlyPlans[1].features,
  },
  {
    title: "Premium Plan",
    price: "$400.00",
    period: "Per Year",
    features: monthlyPlans[2].features,
  },
];

const GrowthPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plansToDisplay = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Choose a Pricing Plan that works for you
        </h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mt-4 mb-10 flex-wrap">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 ${
              !isYearly
                ? "bg-[#875CF9] text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 ${
              isYearly
                ? "bg-[#1E2939] text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plansToDisplay.map((plan, index) => {
            const isMiddle = index === 1;

            return (
              <motion.div
                key={index}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`border rounded-lg shadow-md p-5 sm:p-6 text-left flex flex-col justify-between h-full transition-all ${
                    isMiddle
                      ? "bg-[#08001C] text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-2xl sm:text-3xl font-bold mb-1">
                      {plan.price}
                    </p>
                    <p
                      className={`text-sm ${
                        isMiddle ? "text-gray-400" : "text-gray-500"
                      } mb-4`}
                    >
                      {plan.period}
                    </p>
                    <p className="text-sm mb-4">Features Description</p>

                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheck
                            className={`mt-1 text-sm ${
                              isMiddle ? "text-[#7748F1]" : "text-green-500"
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full mt-6 py-2 rounded-md font-semibold bg-[#7748F1] text-white">
                    Get Started
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthPlans;
