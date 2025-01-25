import React from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assests/logo/hbdr.png";
import { useProduct } from "../../hooks/useProducts";
export default function DealyProduct() {
  const { cards } = useProduct();
  const navigate = useNavigate();

  const handleDetails = (card) => {
    if (!card) return;
    navigate("/details", { state: { card } });
  };
  return (
    <section className="p-10">
      <h1 className="text-center">Daily Deal</h1>
      <img className="w-80 mx-auto" src={logoImage} alt="" />
      <p className="text-center">
        we pride ourselves on offering the finest selection of trees to enhance{" "}
        <br /> your living spaces and contribute to a greener environment.
      </p>

      <div className="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-dark slider-nav-outside-expand">
        <ul className="slider-container py-4" id="slider2">
          {cards?.results?.map((card) => (
            <div key={card.id}>
              <li onClick={() => handleDetails(card)}>
                <div className="card shadow h-100">
                  <div className="ratio ratio-1x1">
                    <img
                      src={card.image}
                      className="card-img-top w-full"
                      loading="lazy"
                      alt="..."
                    />
                  </div>
                  <div className="card-body d-flex flex-column flex-md-row">
                    <div className="flex-grow-1">
                      <strong>{card.name}</strong>
                      <p className="card-text">price : {card.price} ৳</p>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>

        <button
          type="button"
          className="slider-nav"
          aria-label="Go to previous"
        ></button>
        <button
          type="button"
          className="slider-nav slider-nav-next"
          aria-label="Go to next"
        ></button>
      </div>
    </section>
  );
}
