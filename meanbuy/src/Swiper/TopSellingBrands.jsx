import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function TopSellingBrands() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        loop={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/brandbanner1.webp" alt="4" /></SwiperSlide>
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/brandbanner2.webp" alt="3" /></SwiperSlide>
       
       
      </Swiper>
    </>
  );
}
