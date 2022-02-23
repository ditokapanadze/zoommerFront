import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "./slider.css";
import "swiper/css/pagination";

function Slider() {
  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Scrollbar]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="slide1"></SwiperSlide>
      <SwiperSlide className="slide2"></SwiperSlide>
      <SwiperSlide className="slide3"></SwiperSlide>
      <SwiperSlide className="slide4"></SwiperSlide>
    </Swiper>
  );
}

export default Slider;
