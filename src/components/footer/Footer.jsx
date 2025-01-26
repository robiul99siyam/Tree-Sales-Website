import React from "react";
import LogoImage from "../../assests/logo/logo.png";
export default function Footer() {
  return (
    <footer className=" text-gray-200 text-center text-lg-start">
      {/* Section: Social media */}
      <section className="flex justify-center lg:justify-between p-4 border-b border-gray-300">
        {/* Left */}
        <div className="hidden lg:block mr-5 text-gray-600">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Right */}
        {/* Add social icons here if needed */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="mt-5">
        <div className="container mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-3">
            {/* Company Info */}
            <div>
              <h6 className="text-lg font-bold mb-4">
                <img src={LogoImage} alt="Logo" className="inline-block" />
              </h6>
              <p className="text-gray-600">
                Heaven fruitful doesn't cover lesser days appear creeping
                seasons so behold.
              </p>
            </div>

            {/* Popular Tags */}
            <div>
              <h5 className="text-[#223a66] text-lg font-bold mb-4">
                Popular Tags
              </h5>
              <ul className="text-gray-600">
                <li>Plant</li>
                <li>Floor</li>
                <li>Radiology</li>
                <li>Indoor</li>
                <li>Green</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="text-[#223a66] text-lg font-bold mb-4">Support</h5>
              <ul className="text-gray-600">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Company Support</li>
                <li>FAQs</li>
                <li>Company License</li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h5 className="dark:text-[#223a66] text-[#223a66] text-lg font-bold mb-4">
                Get In Touch
              </h5>
              <ul className="text-gray-600">
                <li className="flex items-center">
                  <i className="bi bi-envelope mr-3"></i>
                  siyamrobiul@gmail.com
                </li>
                <li className="flex items-center">
                  <i className="bi bi-telephone-forward-fill mr-3"></i>+ 01 988
                  8647 54
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4 text-gray-800">
        © 2025 Copyright:
        <a href="#" className=" font-bold ml-1">
          Tree Shop Mart
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}
