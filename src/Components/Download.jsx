import React from 'react'
import Button from './Button'

const Download = ({img, head, text}) => {
  return (
    <div className='flex items-center'>
      <img src={img} alt="" className='pr-5'/>
      <div className='max-w-[288px] w-full'><h4 className='text-3xl'>{head}</h4>
      <p>{text}</p></div>
      <Button text='Download'style='font-bold text-2xl text-white bg-[#002992] p-1 border-2 border-[#002992]' />
    </div>
  )
}

export default Download