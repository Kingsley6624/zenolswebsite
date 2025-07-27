import React from 'react'
import Button from './Button'
import { link } from 'framer-motion/client'

const Download = ({img, head, text, link}) => {
  return (
    <div className='flex items-center'>
      <img src={img} alt="" className='pr-5'/>
      <div className='max-w-[288px] w-full'><h4 className='text-3xl'>{head}</h4>
      <p>{text}</p></div>
      <Button 
      onClick={link}
      text='Download'style='font-bold text-2xl text-white bg-[#E8211A] p-1 border-2 border-[#E8211A] transition-all duration-300 hover:scale-105 hover:text-[#E8211A] hover:bg-white rounded-md' />
    </div>
  )
}

export default Download