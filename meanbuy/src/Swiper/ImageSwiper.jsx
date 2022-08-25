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

export default function ImageSwiper() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/watch-banner4.webp" alt="4" /></SwiperSlide>
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/bluetooth2022.webp" alt="3" /></SwiperSlide>
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/womenswatches2022.webp" alt="2" /></SwiperSlide>
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/nordic2022.webp" alt="1" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}
