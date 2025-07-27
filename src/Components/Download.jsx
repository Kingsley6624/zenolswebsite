import React from 'react'
import Button from './Button'

const Download = ({img, head, text}) => {
  return (
    <div className='flex items-center'>
      <img src={img} alt="" className='pr-5'/>
      <div className='max-w-[288px] w-full'><h4 className='text-3xl'>{head}</h4>
      <p>{text}</p></div>
      <Button text='Download'style='font-bold text-2xl text-white bg-[#dcb421] p-1 border-2 border-[#dcb421] transition-all duration-300 hover:scale-105 hover:text-[#dcb421] hover:bg-white rounded-md' />
    </div>
  )
}

export default Download