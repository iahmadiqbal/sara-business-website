import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#08001C] text-white px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Logo and Description */}
        <div>
          <img
            src="/images/logo.png"
            alt="Sara Logo"
            className="mx-auto w-24 h-auto sm:w-32"
          />
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base px-2">
            Our beautiful designs open the door to a realm of limitless
            possibilities, imagination bounds. Craft effortlessly while enjoying
            real-time customer support.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-[#1DA1F2] text-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-[#0A66C2] text-lg"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-[#1877F2] text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-[#E1306C] text-lg"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Horizontal Line */}
        <hr className="w-full border-t border-gray-700" />

        {/* Copyright */}
        <p className="text-sm sm:text-base">
          2024 © All rights reserved by{" "}
          <span className="font-semibold">Sara</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
