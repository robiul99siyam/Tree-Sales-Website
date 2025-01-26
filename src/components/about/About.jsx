import React, { useState } from "react";
import AboutImage from "../../assests/static/img80.jpg";
import AboutImage1 from "../../assests/static/img81.png";
import Global from "../../global/Global";
import AboutReview from "./AboutReview";

import { AboutData } from "../../utils/data";
import ProductDescription from "../details/ProductDescription";

export default function About() {
  const [activeId, setActiveId] = useState(false);
  const handleToggle = (id) => {
    setActiveId(id);
  };
  console.log(activeId);

  return (
    <>
      <Global text="ABOUT HERE">
        <div className="grid grid-cols-12 justify-center items-center gap-10  mx-10 py-20">
          <div className="col-span-6 ">
            <h1 className="font-blod text-3xl leading-10 mb-1">
              A Minimal Team <br /> For a Better World
            </h1>
            <hr className="w-28" />
            <p className="text-[12px] leading-6 mt-5">
              The team should have a well-defined vision and specific goals
              related to making a positive impact on the world. This could
              involve addressing social, environmental, or humanitarian
              issues.Members of the team should possess diverse skills and
              expertise that complement each other. This might include
              individuals with backgrounds in technology, design, marketing,
              project management, and community outreach.
            </p>
          </div>
          <div className="col-span-6">
            <img src={AboutImage} alt="" />
          </div>
        </div>

        <AboutReview />

        <div className="grid grid-cols-12 justify-center items-start gap-10   mx-10 py-20">
          <div className="col-span-6 ">
            <img src={AboutImage1} alt="" />
          </div>
          <div className="col-span-6">
            <div className="w-full">
              {AboutData.map((about) => (
                <div
                  key={about.id}
                  className=" border shadow-lg rounded-md p-4 hover:shadow-xl transition-shadow duration-300 my-2"
                >
                  <h3
                    onClick={() => handleToggle(about.id)}
                    className="text-xl font-serif font-bold text-gray-600 mb-2 cursor-pointer"
                  >
                    {about.title}
                  </h3>
                  {activeId === about.id && (
                    <p className="text-gray-600 font-serif">{about.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ProductDescription />
      </Global>
    </>
  );
}
