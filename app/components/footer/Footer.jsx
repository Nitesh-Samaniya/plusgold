import React from 'react'
import CompanyInfo from "./CompanyInfo";
import FoolerLinks from "./FoolerLinks";

const Footer = () => {
  return (
    <div className='w-full bg-[#FEFFD2] py-20'>
        <CompanyInfo />
        <div className='border mt-5 sm:mt-8 w-[95%] sm:w-[82%] m-auto'></div>
        <FoolerLinks />
    </div>
  )
}

export default Footer