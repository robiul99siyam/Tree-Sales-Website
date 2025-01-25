import React, { useEffect, useState } from "react";
import { api } from "../../api";

export default function Achive() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const achiveFunction = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/achive/`
        );
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    achiveFunction();
  }, []);
  return (
    <>
      <div
        className="swiffy-slider slider-item-show4 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x9  py-3 py-lg-4"
        data-slider-nav-autoplay-interval="2000"
      >
        <div className="slider-container">
          {data.map((card) => (
            <div key={card.id}>
              <img src={card.image} alt="..." />
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
    </>
  );
}
