import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import FastMoveProduct from '../Swiper/FastMoveProduct'
import ImageSwiper from '../Swiper/ImageSwiper'
// import {new_arrival} from "../Api.js"
const Home = () => {
  return (
    <Box width="86%" margin="auto">
     <br /><br />
      <Box>
      <ImageSwiper/>
      </Box>

      <br /><br />
      <Text fontSize='2xl'> <b>Fast moving products</b> </Text> <hr />
       <br />
       <FastMoveProduct/>
        <br /><br />
    </Box>
  )
}

export default Home



// {
//   new_arrival.map((i)=>(
//     <Box>
//       <img src={i.image} width="295" height="295" alt={i.name} />

//     </Box>
//   ))
// }