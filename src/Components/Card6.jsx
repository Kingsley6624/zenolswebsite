import React from 'react'

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Card6 = ({img, role, email, phone, Tname, link}) => {
 
  return (
    <div className='flex flex-col gap-2 items-center flex-wrap'>
      <div className='flex flex-col items-center text-[#272727]'>
        <img src={img} alt="" className='h-[230px] w-[232px] rounded-md'/>
        <span className='relative bottom-4 px-5 py-1 rounded-md bg-[#E8211A] text-white'> <p>{role}</p></span>
      </div>
      <h3 className='font-semibold text-xl'>{Tname}</h3>
      <a href={link}>{email}</a>
      <span className='flex gap-1 '><p></p></span>
      <span className='flex gap-3'><LocalPhoneIcon style={{  fontSize: 30 }} /><p>{phone}</p></span>
    </div>
  )
}

export default Card6