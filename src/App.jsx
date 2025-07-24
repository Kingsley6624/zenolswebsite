import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Rootlayout from './Components/Layout/Rootlayout'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contactus from './Components/Pages/Contactus'
import NotFound from './Components/Pages/NotFound'
import Services from './Components/Pages/Services'
import ScrollToTop from './Components/ScrollToTop'


function App() {
 const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contactus />} />
        <Route path="*" element={<NotFound />} />
      </Route>
  )
)
  return (

     <RouterProvider router={router} />
 
  )
}

export default App
