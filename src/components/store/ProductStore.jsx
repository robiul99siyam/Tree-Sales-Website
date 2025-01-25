import React from "react";
import ProductCard from "../Card/ProductCard";

export default function ProductStore({ id }) {
  return (
    <div>
      <ProductCard id={id} />
    </div>
  );
}
