import React from 'react'

const Card3 = ({img, head, body}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <img className='text-black' src={img} alt="" />
      <h3 className='text-3xl'>{head}</h3>
      <p className='text-center text-xl'>{body}</p>
    </div>
  )
}

export default Card3