import React from 'react'
import heroimg from '../assets/images/HeroImage.png'
import Button from './Button'



const Herosection = () => {
  return (
    <div>
      <div className='h-[696px] w-full text-white flex flex-col justify-center pt-16 pl-[5%] gap-5' style={{backgroundImage: `url(${heroimg})`}}>
        <h2 className='font-bold text-6xl'>SAFE AND SECURE</h2>
        <p className='text-3xl'>We are a Service You Can Trust</p>
        <Button text="Contact Us Now" style="font-bold text-2xl text-[#ffe248] bg-transparent p-1 border-2 border-[#ffe248] text-nowrap"/>
      </div>
    </div>
  )
}

export default Herosection