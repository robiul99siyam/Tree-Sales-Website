import React, { useEffect, useState } from "react";
import { api } from "../../api";

export default function ProductTag({ handleFilter }) {
  const [productTag, setProductTage] = useState([]);
  useEffect(() => {
    const achiveFunction = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/product/productTag/`
        );
        if (response.status === 200) {
          setProductTage(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    achiveFunction();
  }, []);
  return (
    <div>
      <h1 className="font-sumibold text-2xl m-2">Product Tag </h1>

      <div className="flex justify-center items-center gap-2 flex-wrap">
        {productTag.map((tag) => (
          <button
            key={tag.id}
            onClick={() => handleFilter(tag.id)}
            className="px-5 py-2 rounded-full  border"
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}
