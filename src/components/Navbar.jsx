import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Brands", path: "/brands" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors cursor-pointer ${
      isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Shop Name */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-xl font-bold text-gray-800 cursor-pointer"
            >
              Sri Hari <span className="text-red-600">Electricals</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/918825486940"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left font-medium cursor-pointer ${
                  isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="https://wa.me/918825486940"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-600 text-white text-center px-4 py-2 rounded-lg font-medium"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;