import React from 'react'
import Card2 from './Card2'
import homeicon from '../assets/icons/home.svg'
import commercialicon from '../assets/icons/commercial.svg'
import homeimg from '../assets/images/home.png'
import commercialimg from '../assets/images/commercial.png'

const Ourservices = () => {
  return (
    <div className='px-[10%] py-16 flex flex-col gap-10'>
      <h2 className='text-center font-semibold text-4xl'>OUR SERVICES</h2>
      <div className='flex flex-col md:flex-row justify-between gap-5'>
      <Card2  
      img={homeimg} icon={homeicon} text='RESIDENTIAL'/>
      <Card2  
      img={commercialimg} icon={commercialicon} text='COMMERCIAL'/>
      </div>
      
    </div>
  )
}

export default Ourservices