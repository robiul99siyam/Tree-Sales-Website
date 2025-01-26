import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { FaRegMoon } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { IoSunnyOutline } from "react-icons/io5";
import logoImage from "../../assests/logo/logo.png";
import { ThemeContext } from "../../context";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const user_id = sessionStorage.getItem("user_id");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-5 px-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-10" src={logoImage} alt="Logo" />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-sm">
            <Link to="/" className="hvr-underline-from-center px-2 py-2">
              HOME
            </Link>
            <Link to="/store" className="hvr-underline-from-center px-2 py-2">
              STORE
            </Link>
            <Link to="/about" className="hvr-underline-from-center px-2 py-2">
              ABOUT
            </Link>
          </ul>

          <ul className="flex items-center space-x-6">
            {user_id ? (
              <Link
                onClick={() => {
                  sessionStorage.clear();
                }}
                className="hvr-underline-from-center px-3 py-2"
                to="/login"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hvr-underline-from-center px-3 py-2"
                >
                  LOGIN
                </Link>
                <Link
                  to="/register"
                  className="hvr-underline-from-center px-3 py-2"
                >
                  REGISTER
                </Link>
              </>
            )}
            <li
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer px-3 py-2"
            >
              {darkMode ? <IoSunnyOutline /> : <FaRegMoon />}
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <ul className="flex flex-col items-start space-y-4">
            <Link to="/" className="hvr-underline-from-center px-2 py-2">
              HOME
            </Link>
            <Link to="/store" className="hvr-underline-from-center px-2 py-2">
              STORE
            </Link>
            <Link to="/about" className="hvr-underline-from-center px-2 py-2">
              ABOUT
            </Link>
          </ul>

          <ul className="flex flex-col items-start space-y-4">
            {user_id ? (
              <Link
                onClick={() => {
                  sessionStorage.clear();
                }}
                className="hvr-underline-from-center px-3 py-2"
                to="/login"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hvr-underline-from-center px-3 py-2"
                >
                  LOGIN
                </Link>
                <Link
                  to="/register"
                  className="hvr-underline-from-center px-3 py-2"
                >
                  REGISTER
                </Link>
              </>
            )}
          </ul>

          <div
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer px-3 py-2 flex items-center"
          >
            {darkMode ? <IoSunnyOutline /> : <FaRegMoon />}
          </div>
        </div>
      )}
    </nav>
  );
}
