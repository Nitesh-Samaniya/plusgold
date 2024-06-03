"use client"
import Image from "next/image";
import new_logo from "../../../public/footer/new_logo.svg";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const CompanyInfo = () => {
  return (
    <div className="w-[90%] sm:w-[85%] lg:px-10 lg:pr-20 m-auto flex flex-col gap-10 sm:flex-row justify-between items-center">
        <div>
            <Image src={new_logo} alt={new_logo} width={200}/>
            <div className="mt-14 mb-7 tracking-wider">
                <p>B.No 19, H.No 1413, R.S. Pal, Near Mahatma Gandhi</p>
                <p>School, Nagpur, Maharashtra, 440014</p>
                <p>Email : founders@getplus.in | Phone : +91-9035202565</p>
            </div>
            <div className="flex gap-5">
                <div><FaFacebookSquare size={25}/></div>
                <div><FaInstagram size={25}/></div>
                <div><FaTwitterSquare size={25}/></div>
                <div><FaLinkedin size={25}/></div>
                <div><FaYoutube size={25}/></div>
            </div>
        </div>

        <div>
            <p className="text-[#A91D3A] font-semibold text-xl">Plus</p>
            <div className="flex gap-20">
                <div className="flex flex-col gap-2">
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & COnditions</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>FAQs</p>
                    <p>Blogs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyInfo