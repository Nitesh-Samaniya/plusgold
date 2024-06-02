import Image from 'next/image'
import React from 'react'

const LifeGoalCard = ({img, title, price}) => {
    return (
        <div className='shadow-xl w-[250px] h-[350px] text-center bg-[#F5F7F8]'>
            <div className='p-5 text-2xl h-[25%]'>{title}</div>
            <div className='p-10 bg-[#FCF8E8] h-[75%]' style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
                <Image className='block m-auto' style={{width: '100px'}} src={img} alt={img} />
                <p className='text-gray-500 font-semibold mt-2 mb-3'>Starts as low as</p>
                <p>₹ {price} / Day</p>
            </div>
        </div>
    )
}

export default LifeGoalCard