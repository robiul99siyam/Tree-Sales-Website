import { motion } from "motion/react";
import React from "react";
export default function ProductDetails({ product }) {
  return (
    <>
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="p-12 font-serif"
      >
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              className="mx-auto lg:ml-12 h-[500px] rounded-md object-cover"
              src={product?.image}
              alt="Product"
            />
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <h2 className="text-2xl font-bold text-green-600 mt-4">
              {product?.price} ৳
            </h2>

            <div className="mt-6">
              <p className="text-gray-500">
                Product Code:{" "}
                <span className="text-gray-300">{product?.product_code}</span>
              </p>
              <p className="text-gray-500">
                Quantity:{" "}
                <span className="text-gray-300">{product?.quentity}</span>
              </p>
              <p className="text-gray-500">
                Shipping tax:{" "}
                <span className="text-gray-300">{product?.Shopping_text}</span>
              </p>
            </div>

            <a
              href="./cart.html"
              className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Shop Now
            </a>

            <div className="mt-6">
              <p className="text-gray-500">
                Tags:{" "}
                <span className="text-gray-300">{product?.product_tag[0]}</span>
              </p>
            </div>
            <div className="mt-6">
              <p className="text-gray-500">
                Categories:{" "}
                <span className="text-gray-300">
                  {" "}
                  Butter & Eggs, Fruits, Milk & Cream, Vegetables
                </span>
              </p>
            </div>
            <div className="mt-6">
              <p className="text-gray-500">
                Brand: <span className="text-gray-300"> KFC</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
