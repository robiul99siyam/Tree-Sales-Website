import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import logoImage from "../../assests/logo/logo.png";
import { ThemeContext } from "../../context";
export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="py-5 mx-auto">
      <div className="flex items-center justify-start gap-5">
        {/* Navbar Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-sm gap-5">
            <Link
              to="/"
              className="text-sm  hvr-underline-from-center px-2 py-2"
            >
              HOME
            </Link>
            <Link
              to="/store"
              className="text-sm  hvr-underline-from-center px-2 py-2"
            >
              STORE
            </Link>
            <Link
              to="/about"
              className="text-sm  hvr-underline-from-center px-2 py-2"
            >
              ABOUT
            </Link>
          </ul>

          {/* Logo */}
          <img className="px-4 mb-10" src={logoImage} alt="Logo" />

          <ul className="flex items-center space-x-6 gap-5">
            <Link
              to="/login"
              className="text-sm  hvr-underline-from-center px-3 py-2"
            >
              LOGIN
            </Link>
            <li className="text-sm  hvr-underline-from-center px-3 py-2">
              REGISTER
            </li>
            <li>
              <a
                href="./cart.html"
                className="text-gray-700 hover:text-gray-900"
              >
                <i className="bi bi-cart4 text-xl"></i>
              </a>
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm px-3 py-2"
            >
              {darkMode ? <IoSunnyOutline /> : <FaRegMoon />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
