import { motion } from "motion/react";
import React from "react";
import logoImage from "../../assests/logo/hbdr.png";
export default function ProductDescription() {
  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="p-10 shadow-sm"
      style={{ lineHeight: "40px" }}
    >
      <h1 className="text-center font-blod">Subscribe Our Newsletter</h1>
      <img className="w-80 mx-auto" src={logoImage} alt="" />
      <p className="text-center">
        we pride ourselves on offering the finest selection of trees to enhance{" "}
        <br /> your living spaces and contribute to a greener environment.
      </p>
    </motion.section>
  );
}
