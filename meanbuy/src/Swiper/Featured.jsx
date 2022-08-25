import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles.css";
import { Feature } from "../Api.js";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Featured() {
  const navigat = useNavigate();
  const handleData = (id) => {
    navigat("/singlePage/" + id);
  };

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        slidesPerView={3}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {Feature?.map((i) => (
          <SwiperSlide backgroundColor="rgb(239,239,239)">
            <Box onClick={() => handleData(i.id)} key={i.id} margin="8px">
              <Box width="120px" height="120px" margin="auto">
                <img src={i.image} width="50px" height="50px" alt={i.id} />
              </Box>
              <Box>
                <Text fontSize="xl">{i.name}</Text>

                <Text color="rgb(250,183,103)" fontSize="md">
              
                  <b>{i.description}</b>
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
