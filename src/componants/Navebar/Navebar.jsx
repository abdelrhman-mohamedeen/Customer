import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-sky-600 py-5">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              to="/"
              className="block cursor-pointer font-bold text-white transition hover:text-white/75 text-3xl"
            >
              Abdelrhman App
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`md:flex md:items-center md:gap-12 ${
              isMenuOpen ? "block" : "hidden"
            } sm:hidden`}
          >
            <nav aria-label="Global" className="md:block">
              <ul className="flex flex-col md:flex-row items-center gap-6 text-2xl">
                <li>
                  <NavLink
                    className="text-white text-base font-bold transition hover:text-white/75"
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Customers List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white text-base font-bold transition hover:text-white/75"
                    to="/portfolio"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Customers Graph
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white text-base font-bold transition hover:text-white/75"
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
