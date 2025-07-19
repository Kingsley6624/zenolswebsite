import React from 'react'

const Card3 = ({Icon, head, body}) => {
  return (
    <div  className='flex flex-col items-center gap-2'>
      <Icon className='text-[#8B8B8B] ' style={{ fontSize: '120px' }} />
      <h3 className='text-2xl font-semibold'>{head}</h3>
      <p className='text-center text-base'>{body}</p>
    </div>
  )
}

export default Card3