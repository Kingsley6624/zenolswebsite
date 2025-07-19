import React from 'react'

const Button = ({text, style, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className={style}>{text}</button>
    </div>

  )
}

export default Button