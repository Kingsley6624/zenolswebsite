import React from 'react'
import Card4 from './Card4'
import img1 from '../assets/images/Ellipse1.png'
import img2 from '../assets/images/Ellipse2.png'
import img3 from '../assets/images/Ellipse3.png'

const Testimonial = () => {
  return (
    <div className='bg-[#ededed] px-[5%] flex flex-col gap-5 pt-16'>
      <h2 className='text-center font-semibold text-4xl'>OUR CUSTOMERS SAY</h2>
      <div className='justify-between  grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4'>
        <Card4 body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere' img={img1} cardname='Merry Jean' locate='Northampton, UK.'/>
        <Card4 body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere' img={img2} cardname='David Mark' locate='Glasgow, UK.'/>
        <Card4 body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere' img={img3} cardname='Omari Zayn' locate='Leeds, UK.'/>
      </div>
    </div>
  )
}

export default Testimonial