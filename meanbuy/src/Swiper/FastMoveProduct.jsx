import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles.css";
import { new_arrival } from "../Api.js";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export default function FastMoveProduct() {
 const navigat = useNavigate()    
const handleData=(id)=>{
   navigat("/singlePage/"+id)
}

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        slidesPerView={4}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {new_arrival.map((i) => (
          <SwiperSlide >
            <Box onClick={()=>handleData(i.id)} key={i.id}>
              <img src={i.image} width="290" height="290" alt="4" />
              <h3>{i.name}</h3>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
