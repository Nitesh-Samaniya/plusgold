import Image from 'next/image'
import React from 'react'
import OldLady from "../../public/save/oldWomenShowingJewellery.png";
import { FaArrowRight } from "react-icons/fa6";

const Save = () => {
  return (
    <div
     className='
        flex flex-col-reverse sm:flex-row sm:justify-between 
        w-[98%] sm:w-[92%] lg:w-[70%]
        m-auto 
        py-[10%] sm:py-[8%] lg:pt-[3%] lg:pb-[2%] 
        text-center lg:text-start 
        border-2 border-gray-300
        rounded-3xl
        lg:mt-[-130px]
    '>
        <div className='mt-20 sm:mt-0 px-[20%] sm:px-[5%]'>
            <Image className='sm:w-[80%]' src={OldLady} alt='OldLady'/>
        </div>
        <div className='lg:mt-[4rem]'>
            <p className='text-5xl sm:text-3xl lg:text-5xl font-semibold'>Save like your mom</p>
            <p className='text-xl mt-2 lg:text-2xl lg:mt-3'>Buy 10gm <span className='text-yellow-500'>Gold</span> & Get 1gm <span className='text-yellow-500'>Gold</span> Extra</p>
            <p className='mt-2 px-[5%] lg:px-[0%] lg:w-[75%]'>
                Buy Gold through daily, weekly or monthly SIPs, or through One-Time payments & get 10% extra Gold from Plus partner jewellers
            </p>
            <p>
                <button className='text-red-500 mt-5 flex items-center gap-2'>Learn More <FaArrowRight /></button>
            </p>
        </div>
    </div>
  )
}

export default Save