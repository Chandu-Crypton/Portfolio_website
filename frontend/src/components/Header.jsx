import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-orange-300 text-light sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-primary">Chandu Srikakulam</h1>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="lg:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block bg-orange-300 absolute lg:static top-full left-0 w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-center lg:text-left">
            <li className="py-2 lg:py-0">
              <a href="#about" className="hover:text-secondary">
                About
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a href="#projects" className="hover:text-secondary">
                Projects
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a href="#skills" className="hover:text-secondary">
                Skills
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a href="#contact" className="hover:text-secondary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
