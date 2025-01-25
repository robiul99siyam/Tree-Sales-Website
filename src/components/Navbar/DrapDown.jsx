import React, { useState } from "react";
import { HiViewList } from "react-icons/hi";
export default function DrapDown() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShow(!show)}
          className=" flex  items-center text-gray-700 hover:text-gray-900 focus:outline-none"
          type="button"
        >
          <HiViewList className="text-xl " />
        </button>
        {show && (
          <ul className="absolute mt-2 w-40 bg-white border border-gray-400 p-1 shadow-lg rounded-lg text-sm text-gray-700">
            <li>
              <a
                id="login"
                className="block px-4 py-2 text-gray-700 hover:text-[#81AC42] hover:bg-gray-100"
                href="./login.html"
              >
                Login
              </a>
            </li>
            <li>
              <a
                id="register"
                className="block text-gray-700 hover:text-[#81AC42] px-4 py-2 hover:bg-gray-100"
                href="./register.html"
              >
                Registration
              </a>
            </li>
            <li>
              <button
                id="logout"
                className="block text-gray-700 hover:text-[#81AC42] w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
        type="button"
      >
        <HiViewList />
      </button>
    </>
  );
}
