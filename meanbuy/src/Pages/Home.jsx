import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ActionFigures from '../Swiper/ActionFigures'
import BluetoothEarphone from '../Swiper/BluetoothEarphone'
import FastMoveProduct from '../Swiper/FastMoveProduct'
import Gardening from '../Swiper/Gardening'
import HomeDecor from '../Swiper/HomeDecor'
import ImageSwiper from '../Swiper/ImageSwiper'
import KeyboardsMouse from '../Swiper/KeyboardsMouse'
import KitchenWares from '../Swiper/KitchenWares'
import MakeupAccessories from '../Swiper/MakeupAccessories'
import MenEssentials from '../Swiper/MenEssentials'
import MobilesAccessories from '../Swiper/MobilesAccessories'
import NordicCeilingLights from '../Swiper/NordicCeilingLights'
import SmallAppliances from '../Swiper/SmallAppliances'
import TopSellingBrands from '../Swiper/TopSellingBrands'
import Toys from '../Swiper/Toy'
import Watches from '../Swiper/Watches'
import WomenEssentials from '../Swiper/WomenEssentials'

import sasta from '../Image/new1pic.png'
import NewARRIVALS from '../Swiper/NewARRIVALS'
import Featured from '../Swiper/Featured'
const Home = () => {
  return (
    <Box width="86%" margin="auto">
     <br /><br />
      <Box>
      <ImageSwiper/>
      </Box>

      <br /><br />
       <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Fast moving products</b> </Text></Box> 
       <br />
       <FastMoveProduct/>
        <br />
       <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Home Decor</b> </Text></Box> 
       <br />
       <HomeDecor/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Mobiles Accessories</b> </Text></Box> 
       <br />
       <MobilesAccessories/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Small Appliances</b> </Text></Box> 
       <br />
       <SmallAppliances/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Toys</b> </Text></Box> 
       <br />
       <Toys/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Watches</b> </Text></Box> 
       <br />
       <Watches/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Nordic Ceiling Lights</b> </Text></Box> 
       <br />
       <NordicCeilingLights/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Keyboards & Mouse</b> </Text></Box> 
       <br />
       <KeyboardsMouse/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Bluetooth Earphone</b> </Text></Box> 
       <br />
       <BluetoothEarphone/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Top Selling Brands</b> </Text></Box> 
       <br />
       <TopSellingBrands/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Makeup Accessories</b> </Text></Box> 
       <br />
       <MakeupAccessories/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Kitchen Wares</b> </Text></Box> 
       <br />
       <KitchenWares/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Gardening</b> </Text></Box> 
       <br />
       <Gardening/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Action Figures</b> </Text></Box> 
       <br />
       <ActionFigures/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Men's Essentials</b> </Text></Box> 
       <br />
       <MenEssentials/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Women's Essentials</b> </Text></Box> 
       <br />
       <WomenEssentials/>
        <br />
        <Box>
          <img src={sasta} alt="sasta" />
        </Box>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>NEW ARRIVALS</b> </Text></Box> 
       <br />
       <NewARRIVALS/>
        <br />
        <Box borderBottom="2px solid"> <Text fontSize='2xl'> <b>Featured</b> </Text></Box> 
       <br />
       <Featured/>
        <br />
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