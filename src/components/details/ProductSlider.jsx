import React from "react";
import { useNavigate } from "react-router-dom";
import "swiffy-slider/css";
import { useProduct } from "../../hooks/useProducts";
export default function ProductSlider() {
  const { cards } = useProduct();

  const navigate = useNavigate();
  const handleDetails = (card) => {
    if (!card) return;
    navigate("/details", { state: { card } });
  };
  return (
    <section className="mx-24 flex">
      <div
        className="swiffy-slider slider-item-show4 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-500x10   py-3 py-lg-4"
        data-slider-nav-autoplay-interval="2000"
      >
        <div className="slider-container">
          {cards?.results?.map((card) => (
            <div key={card.id}>
              <img
                onClick={() => handleDetails(card)}
                src={card?.image}
                alt="..."
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="slider-nav"
          aria-label="Go left"
        ></button>
        <button
          type="button"
          className="slider-nav slider-nav-next"
          aria-label="Go left"
        ></button>
      </div>
    </section>
  );
}
