import React from 'react'

const Card2 = ({key, img, head, body}) => {
  return (
    <div Key={key}
          className="flex flex-col items-center justify-center gap-4">
        <img src={img} alt="" className='h-[190px] w-full rounded-md'/>
        
        <h2 className=" text-l  md:text-xl font-bold text-[#333333] font-['Raleway',_sans-serif]">{head}</h2>
        <p className="text-sm md:text-base text-center font-normal text-[#666666]">{body}</p>
  
      </div>
  )
}

export default Card2