import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#08001C] text-white px-6 py-12 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo + Description */}
        <div>
          <img src="/images/logo.png" alt="Logo" className="h-10 mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Our beautiful designs open the door to a realm of limitless
            possibilities, imagination bounds. Craft effortlessly while enjoying
            real-time customer support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Link</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>

        {/* Products & Support */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Products</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/item-support">Item Support</Link>
            </li>
            <li>
              <Link to="/forum">Forum</Link>
            </li>
            <li>
              <Link to="/report-abuse">Report Abuse</Link>
            </li>
            <li>
              <Link to="/tour">Take the tour</Link>
            </li>
            <li>
              <Link to="/live-chat">Live chat</Link>
            </li>
            <li>
              <Link to="/self-service">Self-service</Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Social</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/reviews">Jano Reviews</Link>
            </li>
          </ul>
          <div className="mt-6 text-gray-300 text-sm">
            <p>11910 Clyde Rapid Suite 210, United States</p>
            <p className="mt-2">hello@saramail.com</p>
            <p>+1 707 797 0462</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>2024 © All rights reserved by Sara.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
