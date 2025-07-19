import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Share/Navbar'
import Footer from '../Share/Footer'

const Rootlayout = () => {
  return (
    <div className='max-w-[1440px]'>
    <Navbar />
    {/* <Head /> */}
    <Outlet />
    <Footer />
    </div>
  )
}

export default Rootlayout