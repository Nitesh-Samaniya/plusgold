import React from 'react'
import bankSafe from "../../public/secure/BankSafe.png";
import bisLogo from "../../public/secure/BisLogo.png";
import agumont from "../../public/header/augmontLogo.svg";
import cashFree from "../../public/header/cashFreeSvnLogo.svg";
import Image from 'next/image';

const Secure = () => {
  return (
    <div className='sm:text-start px-5 lg:px-10 py-10 text-center mt-20 w-[90%] sm:w-[85%] lg:w-[90%] m-auto flex flex-col gap-10 sm:flex-row justify-between'>
        <div className='lg:w-[45%]'>
            <div className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-500 font-bold'>Your money is 100% Secure!</div>
            <div className='text-gray-500 mt-5 text-lg'>
                Your asset is stored in secured vaults at <br />Augmont and available to withdraw anytime            </div>
            <div className='flex gap-5 mt-5 items-center text-sm text-gray-500'>
                <div>
                    <Image className='sm:w-[80px] h-[50px] lg:w-[100px]' src={agumont} alt={agumont}/>
                    <p className='hidden lg:block font-semibold'>Gold Partner</p>
                </div>
                <div className='border border-gray-500 h-[60px]'></div>
                <div>
                    <Image className='sm:w-[80px] h-[50px] lg:w-[100px]' src={bisLogo} alt={bisLogo}/>
                    <p className='hidden lg:block font-semibold'>24K Hallmark</p>
                </div>
                <div className='border border-gray-500 h-[60px]'></div>
                <div>
                    <Image className='sm:w-[80px] h-[50px] lg:w-[100px]' src={cashFree} alt={cashFree}/>
                    <p className='hidden lg:block font-semibold'>Payment Partner</p>
                </div>
            </div>
        </div>

        <div>
            <Image style={{width: '280px'}} className='block m-auto' src={bankSafe} alt={bankSafe}/>
        </div>
    </div>
  )
}

export default Secure