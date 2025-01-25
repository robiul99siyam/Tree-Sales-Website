import React from "react";
import { useLocation } from "react-router-dom";
import Global from "../../global/Global";
import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import ProductSlider from "./ProductSlider";
export default function Details() {
  const location = useLocation();
  const card = location.state?.card || null;

  return (
    <>
      {" "}
      <Global text="DETAILS HERE">
        <ProductDetails product={card} />
        <ProductSlider />
        <ProductDescription />
      </Global>
    </>
  );
}
