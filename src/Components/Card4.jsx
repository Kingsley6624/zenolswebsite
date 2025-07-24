import React from 'react'

const Card4 = ({body, img, cardname, locate }) => {
  return (
    <div className='transition-transform duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#8b8b8b] p-3 flex flex-col gap-2'>
      <p>{body}</p>
      <div className='flex items-center gap-2'>
        <img src={img} alt="" className='rounded-full h-[80px] w-[80px]' />
        <div>
          <h3>{cardname}</h3>
          <p>{locate}</p>
        </div>
      </div>
    </div>
  )
}

export default Card4