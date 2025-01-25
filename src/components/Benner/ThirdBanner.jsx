import React from "react";
import imageBenner1 from "../../assests/benner/ad1.jpg";
import imageBenner2 from "../../assests/benner/ad2.jpg";
export default function ThirdBanner() {
  return (
    <>
      {" "}
      <br />
      <section className="p-10">
        <div class="flex justify-center items-center gap-5 flex-wrap">
          <div>
            <img src={imageBenner1} alt="" />
          </div>
          <div>
            <img src={imageBenner2} alt="" />
          </div>
        </div>
      </section>
      <br />
    </>
  );
}
