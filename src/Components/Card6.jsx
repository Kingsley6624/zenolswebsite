import React from 'react'

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Card6 = ({img, role, email, phone, Tname}) => {
 
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div className='flex flex-col items-center text-[#272727]'>
        <img src={img} alt="" className='h-[230px] w-[232px] rounded-md'/>
        <span className='relative bottom-4 px-5 py-1 rounded-md bg-[#dcb421] text-white'> <p>{role}</p></span>
      </div>
      <h3 className='font-semibold text-xl'>{Tname}</h3>
      <span className='flex gap-3'><MailOutlineIcon style={{  fontSize: 30 }} /><p>{email}</p></span>
      <span className='flex gap-3'><LocalPhoneIcon style={{  fontSize: 30 }} /><p>{phone}</p></span>
    </div>
  )
}

export default Card6