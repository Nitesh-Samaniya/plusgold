import React from 'react'

const Button = ({text}) => {
  return (
      <button 
        className='bg-[#A91D3A] text-white px-5 py-3 font-semibold rounded-3xl'>
          {text}
      </button>
  )
}

export default Button