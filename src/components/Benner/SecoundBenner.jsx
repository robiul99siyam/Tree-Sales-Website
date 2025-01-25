import { AnimatePresence, motion } from "framer-motion"; // Import motion and AnimatePresence
import React from "react";
import imageBenner from "../../assests/static/img01 (1).png";
import { SectionData } from "../../utils/data";

export default function SecoundBenner() {
  return (
    <section className="py-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src={imageBenner} alt="" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 px-4 lg:px-8">
          <h1 className="font-bold text-3xl lg:text-4xl text-gray-800">
            Why choose us?
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our vast collection of trees, ranging from majestic oaks to
            delicate cherry blossoms. We offer a diverse range of species
            suitable for every landscape and preference.
          </p>
          <div className="mt-8 space-y-8">
            {SectionData.map((section) => (
              <AnimatePresence>
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-1/4">
                    <img src={section.image} alt="" className="w-full h-auto" />
                  </div>
                  <div key={section.id} className="w-3/4">
                    <h3 className="font-bold text-xl">{section.title}</h3>
                    <p className="opacity-60 text-sm">{section.description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
