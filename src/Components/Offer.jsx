import React from 'react'
import Card3 from './Card3'
import icon1 from '../assets/icons/electricmeter.svg'
import icon2 from '../assets/icons/bigbulb.svg'
import icon3 from '../assets/icons/plugicon.svg'

const Offer = () => {
  return (
    <div className=' flex flex-col items-center gap-6 py-16 px-[5%]  bg-[#ededed]'>
      <h2 className='text-center font-semibold text-4xl'>WE OFFER</h2>
      <p className='text-xl'>We offer a comprehensive range of cost effective services for residential and commercial properties.</p>
      <div className='justify-between grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 w-full'>
        <Card3 img={icon1} head='Safety Maintainance' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere'/>
        <Card3 img={icon2} head='Electrical Installation' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere' />
        <Card3  img={icon3} head='Service Maintenance' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere' />
      </div>
    </div>
  )
}

export default Offer