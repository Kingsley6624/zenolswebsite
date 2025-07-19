import React from 'react'

const Card2 = ({img, icon, text}) => {
  return (
    <div className='h-[276px] rounded-xl bg-no-repeat flex flex-col justify-end' style={{backgroundImage: `url(${img})`}}>
      <span className='flex justify-center gap-1 bg-[#002992a2] items-center px-24 rounded-b-xl w-full'><img src={icon} alt="" />
      <p className='text-white'>{text}</p></span>


    </div>
  )
}

export default Card2