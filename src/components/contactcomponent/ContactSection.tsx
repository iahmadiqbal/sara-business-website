import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Zod Schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

// ✅ Infer Type from Schema
type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const stored = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    localStorage.setItem("contactMessages", JSON.stringify([...stored, data]));
    alert("Message saved locally!");
    reset();
  };

  return (
    <section className="w-full bg-white py-14 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Open a chat or give us a call at
            </p>
            <p className="text-lg sm:text-xl font-semibold text-purple-700 mt-2">
              +1 707 797 0462
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-700">
              Our Address
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              3517 W. Gray St. Utica, Pennsylvania 57867
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-700">
              Live Support
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Live Chat Service
            </p>
            <a
              href="https://www.sara.com/livechat"
              className="text-purple-600 underline text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.sara.com/livechat
            </a>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-700">
              Map Thumbnail
            </h3>
            <div className="w-full h-40 sm:h-56 bg-gray-300 flex items-center justify-center text-gray-500 text-sm sm:text-base">
              Map Thumbnail
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Send Us Message
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Collaboratively engineer prospective imperatives with transparent
            technology.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  {...register("name")}
                  className="w-full border border-gray-300 px-4 py-2 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full border border-gray-300 px-4 py-2 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Write Message"
                {...register("message")}
                className="w-full border border-gray-300 px-4 py-2 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-purple-700 text-white font-medium px-6 py-2 rounded hover:bg-purple-800 transition text-sm sm:text-base"
            >
              Contact Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
