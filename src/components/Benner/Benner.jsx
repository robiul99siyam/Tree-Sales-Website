import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderData } from "../../utils/data";

export default function Benner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {SliderData?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
              <div className="text-center lg:text-left">
                <div className="container img77-text">
                  <h3 className="tracking-wide font-bold text-2xl my-5 text-[#797575]">
                    {slide.heading}
                  </h3>
                  <h1 className="tracking-wide text-4xl lg:text-7xl font-bold text-[#585656]">
                    {slide.subheading}
                  </h1>
                  <br />
                  <p className=" text-[10px] text-[#797575] lg:text-base">
                    {slide.title}
                  </p>
                  <br />
                  <a
                    href="#"
                    className="mx-auto px-10 py-3 text-[#797575] hover:text-black bg-[#81AC42] rounded-md"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={slide.image}
                  className="w-[560px] h-auto object-cover"
                  alt="Banner"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
