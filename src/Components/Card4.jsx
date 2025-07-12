import React from 'react'

const Card4 = ({body, img, cardname, locate }) => {
  return (
    <div className='border-2 border-[#8b8b8b] p-3 flex flex-col gap-2'>
      <p>{body}</p>
      <div className='flex items-center gap-2'>
        <img src={img} alt="" />
        <div>
          <h3>{cardname}</h3>
          <p>{locate}</p>
        </div>
      </div>
    </div>
  )
}

export default Card4