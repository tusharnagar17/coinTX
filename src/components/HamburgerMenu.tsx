import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden">
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full -left-14 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          {/* Your menu items here */}
          <a
            href="#home-section"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#about-section"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#services-section"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
          >
            Services
          </a>
          <a
            href="#projects-section"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
          >
            Projects
          </a>
          <a
            href="#contact-section"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
