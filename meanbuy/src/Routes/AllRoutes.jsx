import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import SinglePage from '../Pages/SinglePage'

const AllRoutes = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/singlePage/:id" element={<SinglePage/>} />
       </Routes>
    </>
  )
}

export default AllRoutes