import React, { useState } from "react";
import Global from "../../global/Global";
import ProductDescription from "../details/ProductDescription";
import ProductStore from "./ProductStore";
import ProductTag from "./ProductTag";
export default function Store() {
  const [name, setName] = useState(null);
  const handleFilter = (tag) => {
    console.log(tag);
    setName(tag.name);
  };
  return (
    <>
      <Global text="STORE HERE">
        {/* PRODUCT HERE NOW FILTER ADD */}
        <section className="grid grid-cols-12 justify-center items-start gap-10 mx-10 py-10">
          <div className="col-span-3">
            <ProductTag handleFilter={handleFilter} />
          </div>
          <div className="col-span-9">
            <ProductStore id={name} />
          </div>
        </section>
        <ProductDescription />
      </Global>
    </>
  );
}
