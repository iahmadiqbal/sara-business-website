import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

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
    const existingData = JSON.parse(
      localStorage.getItem("contactMessages") || "[]"
    );
    localStorage.setItem(
      "contactMessages",
      JSON.stringify([...existingData, data])
    );
    alert("Message saved locally!");
    reset();
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20">
      {/* Top Row: Contact Info */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6 mb-12">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Contact Info
          </h3>
          <p className="text-sm text-gray-600">
            Open a chat or give us a call at
          </p>
          <p className="text-purple-700 font-bold mt-1">+1 707 797 0462</p>
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-800">Our Address</h4>
          <p className="text-sm text-gray-600">
            3517 W. Gray St. Utica,
            <br />
            Pennsylvania 57867
          </p>
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-800">Live Support</h4>
          <p className="text-sm text-gray-600">Live Chat Service</p>
          <a
            href="https://www.sara.com/livechat"
            className="text-purple-600 underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>

      {/* Bottom Row: Map + Form */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Map */}
        <div className="w-full h-72 sm:h-96 rounded overflow-hidden border border-gray-300">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2689099822885!2d-76.87756668460705!3d41.23453267927995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b51c8e1cf4b1%3A0x7a3b19c61fcb37ce!2s3517%20W%20Gray%20St%2C%20Utica%2C%20PA%2016450%2C%20USA!5e0!3m2!1sen!2s!4v1718374395863!5m2!1sen!2s"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>

        {/* Right: Form */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Send Us Message
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Collaboratively engineer prospective imperatives with transparent
            technology.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Enter Name"
              {...register("name")}
              className="w-full border border-gray-300 px-4 py-2 rounded text-sm focus:ring-2 focus:ring-purple-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full border border-gray-300 px-4 py-2 rounded text-sm focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <textarea
              rows={4}
              placeholder="Write Message"
              {...register("message")}
              className="w-full border border-gray-300 px-4 py-2 rounded text-sm focus:ring-2 focus:ring-purple-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}

            <button
              type="submit"
              className="bg-purple-700 text-white font-medium px-6 py-2 rounded hover:bg-purple-800 transition"
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
