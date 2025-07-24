import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Share/Navbar'
import Footer from '../Share/Footer'
import ScrollToTop from '../ScrollToTop'



const Rootlayout = () => {
  return (
    <div className=''>
       <ScrollToTop />
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Rootlayout