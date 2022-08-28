import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import SinglePage from '../Pages/SinglePage'
import BestDeals from '../Swiper/BestDeals'
import FlashSell from '../Swiper/FlashSell'
import NewArrival from '../Swiper/NewArrival'
import ShopByBrand from '../Swiper/ShopByBrand'
import Trending from '../Swiper/Trending'

const AllRoutes = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/flashsell" element={<FlashSell/>} />
        <Route path="/Bestdeals" element={<BestDeals/>} />
        <Route path="/newarrival" element={<NewArrival/>} />
        <Route path="/shopbybrand" element={<ShopByBrand/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/singlePage/:id" element={<SinglePage/>} />
       </Routes>
    </>
  )
}

export default AllRoutes