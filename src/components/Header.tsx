import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 flex items-center"
        >
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/pricing" className="hover:text-blue-600 transition">
            Pricing
          </Link>
          <Link to="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
        </nav>

        {/* Contact Us Button (Desktop Only) */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button
              className="text-white px-4 py-2 rounded-md transition"
              style={{ backgroundColor: "#875CF9" }}
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-3 bg-white shadow">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/services"
            className="block text-gray-700 hover:text-blue-600"
          >
            Services
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link
            to="/pricing"
            className="block text-gray-700 hover:text-blue-600"
          >
            Pricing
          </Link>
          <Link to="/blog" className="block text-gray-700 hover:text-blue-600">
            Blog
          </Link>
          <Link to="/contact">
            <button className="w-full bg-[#875CF9] text-white px-4 py-2 rounded-md hover:bg-[#6C4ED4] transition">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
