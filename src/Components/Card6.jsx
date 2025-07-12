import React from 'react'
import abtphone from '../assets/icons/abtphone.svg'
import msg from '../assets/icons/abtmsg.svg'

const Card6 = ({img, role, email, phone, Tname}) => {
 
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div className='flex flex-col items-center text-[#272727]'>
        <img src={img} alt="" />
        <span className='relative bottom-4 px-5 py-1 rounded-md bg-[#002992] text-white'> <p>{role}</p></span>
      </div>
      <h3 className='font-semibold text-xl'>{Tname}</h3>
      <span className='flex gap-3'><img src={msg} alt="" className='w-6' /><p>{email}</p></span>
      <span className='flex gap-3'><img src={abtphone} alt="" className='w-6'/><p>{phone}</p></span>
    </div>
  )
}

export default Card6