"use client"
import React from 'react'
import appStore from "../../public/download/appleStorePopUpLogo.png";
import googlePlay from "../../public/download/googlePlayPopUpLogo.png";
import appImg from "../../public/download/downloadTheAppImage.png";
import Image from 'next/image';
import Link from 'next/link';

const Download = () => {
  return (
    <div className='sm:text-start px-5 lg:px-10 py-10 text-center mt-10 w-[90%] sm:w-[85%] lg:w-[75%] rounded-3xl m-auto bg-[#FAF8F1] flex flex-col-reverse gap-10 sm:flex-row justify-between'>
        <div className='lg:w-[50%] sm:w-[80%] sm:mt-20'>
            <div className='text-6xl sm:text-4xl lg:text-5xl font-semibold'>Download the App</div>
            <div className='text-gray-500 mt-5 tracking-wider text-lg'>
                Plus, a revolutionary app that helps Indian homemakers to pre-plan their jewellery purchase by saving monthly & gaining 10% IRR
            </div>
            <div className='flex gap-5 mt-5'>
                <Link href='https://play.google.com/store/apps/details?id=com.fs.getplus' target='_blank'>
                    <Image width={120} src={googlePlay} alt={googlePlay}/>
                </Link>
                <Link href='https://apps.apple.com/in/app/plus-gold-save-for-jewellery/id6443759619?platform=iphone' target='_blank'>
                    <Image width={120} src={appStore} alt={appStore}/>
                </Link>
            </div>
        </div>

        <div>
            <Image className='block m-auto' src={appImg} alt={appImg}/>
        </div>
    </div>
  )
}

export default Download