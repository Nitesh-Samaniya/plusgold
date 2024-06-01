import Image from 'next/image'
import React from 'react'

const AppWorkCardsBox2 = ({img, title, title2}) => {
  return (
    <div className='flex gap-5 items-center border border-orange-200 bg-[#FAF8F1] rounded-3xl px-2 py-2'>
        <div><Image src={img} alt={img}/></div>
        <div className='text-lg'>
            <p>{title}</p>
            <p>{title2}</p>
        </div>
    </div>
  )
}

export default AppWorkCardsBox2