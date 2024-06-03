import React from 'react'
import CompanyInfo from "./CompanyInfo";
import FoolerLinks from "./FoolerLinks";
import FooterQ from "./FooterQ";
import Image from 'next/image';
import sharkTankFooter from "../../../public/footer/sharkTankFooter.svg";

const Footer = () => {
  return (
    <div>
        <div className='w-full bg-[#FEFFD2] py-20'>
            <CompanyInfo />
            <div className='border mt-5 sm:mt-8 w-[95%] sm:w-[82%] m-auto'></div>
            <FoolerLinks />
            <FooterQ />
        </div>
        <div className='p-5'>
            <Image className='block m-auto' src={sharkTankFooter} alt={sharkTankFooter}/>
        </div>
    </div>
  )
}

export default Footer