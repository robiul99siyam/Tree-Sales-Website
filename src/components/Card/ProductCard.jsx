import React from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProducts";

export default function ProductCard({ id }) {
  const navigate = useNavigate();
  const { cards, loading } = useProduct();

  const handleDetails = (card) => {
    if (!card) return;
    navigate("/details", { state: { card } });
  };
  const productValue = cards.results || [];
  const filterProductValue = id
    ? cards?.results?.filter((prev) => prev.id === id)
    : productValue;

  return (
    <div className="flex justify-center items-center flex-wrap gap-5">
      {" "}
      {loading ? (
        <h1>loading</h1>
      ) : (
        filterProductValue.map((card) => (
          <div
            key={card.id}
            onClick={() => handleDetails(card)}
            className="max-w-[280px] hvr-shrink  rounded overflow-hidden  shadow-lg border boder-[#797575]"
          >
            <img
              className="w-full "
              src={card?.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-[#797575] mb-2">
                {card?.name}
              </div>
              <p className="text-[#797575] text-base">
                price : {card?.price} ৳
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
