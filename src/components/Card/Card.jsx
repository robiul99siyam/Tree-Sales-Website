import React from "react";
import LogoImg from "../../assests/logo/hbdr.png";
import ProductCard from "./ProductCard";
export default function Card() {
  return (
    <>
      <section>
        <div className="my-10">
          <h1 className="text-center">Featured Product</h1>
          <img className="w-80 mx-auto" src={LogoImg} alt="" />
          <p className="text-center">
            we pride ourselves on offering the finest selection of trees to
            enhance <br /> your living spaces and contribute to a greener
            environment.
          </p>
        </div>
        <ProductCard />
      </section>
    </>
  );
}
