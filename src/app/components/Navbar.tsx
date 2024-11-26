// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo and Startup Name */}
        <div className="flex items-center">
          <img src="bluefeather/static/logo.png" alt="Startup Logo" className="h-10 w-10 mr-2" />
          <span className="text-indigo-dye font-bold text-xl">
            Blue Feather 
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-indigo-dye font-medium">
          <li>
            <a href="#home" className="hover:text-pacific-cyan">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pacific-cyan">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-pacific-cyan">
              Services
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle (Hidden on large screens) */}
        <div className="md:hidden">
          <button className="text-indigo-dye focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
