import React from "react";

const Footer = () => {
  return (
    <footer className="md:bg-black md:text-white md:px-8 md:py-10 md:mt-10 bg-black text-white px-16 py-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold">CS — Ticket System</h2>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            Your reliable solution for managing tickets and resolving issues
            quickly and efficiently.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Mission</li>
            <li className="hover:text-white cursor-pointer">Contact Sales</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Products & Services</li>
            <li className="hover:text-white cursor-pointer">Customer Stories</li>
            <li className="hover:text-white cursor-pointer">Download Apps</li>
          </ul>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Information</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Join Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
