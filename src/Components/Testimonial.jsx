import React from 'react'
import Card4 from './Card4'
import img1 from '../assets/images/Ellipse1.jpg'
import img2 from '../assets/images/Ellipse2.png'
import img3 from '../assets/images/Ellipse3.png'

const Testimonial = () => {
  return (
    <div className='bg-[#ededed] px-[5%] flex flex-col gap-5 pt-16'>
      <h2 className='text-center font-bold text-xl md:text-4xl'>OUR CUSTOMERS SAY</h2>
      <div className='justify-between  grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4'>
        <Card4 body='Their service quality was beyond what i expected. Their quality craftsmanship is worth appreciation.' img={img1} cardname='francis ifeanyi' locate='Anambra state.'/>
        <Card4 body='I had a great experience with the professional team of the company. They were kind, professional, on time and within budget.' img={img2} cardname='Crescent chidiebere' locate='Enugu state.'/>
        <Card4 body='I recommend zonels for your construction needs. If you are looking for a professional team who will help you get the desired result, rely on zonels innovation limited.' img={img3} cardname='Cheyi Amos' locate='Enugu state.'/>
      </div>
    </div>
  )
}

export default Testimonial