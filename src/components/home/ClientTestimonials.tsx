import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, ABC Corp",
    feedback:
      "The team at Sara exceeded all expectations. Their AI solutions transformed our workflow and results.",
    image: "/images/kathrynmurpy.png",
  },
  {
    id: 2,
    name: "Aisha Khan",
    role: "CTO, NextGen AI",
    feedback:
      "Their attention to detail and professionalism was outstanding. We saw instant improvements.",
    image: "/images/onamsarkar.png",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Founder, DataDive",
    feedback:
      "Sara’s AI services gave us powerful insights. Highly recommend their expertise.",
    image: "/images/estherhoward.png",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Don’t Trust Us, Trust our Clients
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {testimonials.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-lg px-6 py-6 w-full max-w-[360px] min-h-[220px] shadow-md hover:bg-gray-100 transition duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Client Image on Left */}
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover mt-1"
                />

                {/* Client Content */}
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">{client.name}</p>
                  <div className="flex gap-1 mt-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className="text-yellow-400 text-sm hover:scale-110 transition-transform duration-200"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">{client.feedback}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-12 text-center">
          <button className="underline text-[#08001C] font-medium">
            See all Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
