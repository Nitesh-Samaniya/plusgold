"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import sharkTank from "../../public/navbar/banner_shark_tank_india.png";
import cross from "../../public/navbar/sharkCross.svg";
import navLogo from "../../public/navbar/plus-new-logo.svg";
import hamber from "../../public/navbar/navHamberger.svg";
import Button from "./Button";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const hideImages = () => {
        setIsVisible(false);
    };

    const handleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (
        <div className="fixed inset-0 z-50">
            {isVisible && (
                <div className="relative w-full flex justify-center items-start">
                    <Image src={sharkTank} alt="shark_tank" className="block" />
                    <Image
                        src={cross}
                        alt="cancel"
                        onClick={hideImages}
                        className="absolute w-3 sm:w-5 top-0 sm:top-2 lg:top-5  right-5 m-0 cursor-pointer"
                    />
                </div>
            )}

            <nav
                className="w-full shadow-xl bg-white"
            >
                <div 
                    className="flex justify-between items-center h-[50px] sm:h-[70px] w-full px-6 sm:px-5 lg:px-[7.5rem]">
                    <Image
                        src={navLogo}
                        alt="logo"
                        width={80}
                        height={70}
                        className="cursor-pointer"
                    />
                    <div className="hidden sm:flex sm:text-sm md:text-base text-gray-500">
                        <ul className="hidden sm:flex items-center">
                            <li className="hover:font-semibold ml-10 cursor-pointer">Home</li>
                            <li className="hover:font-semibold ml-10 cursor-pointer">Start Saving</li>
                            <li className="hover:font-semibold ml-10 cursor-pointer">Partner With Us</li>
                            <li className='ml-10'><Button text="Download App"/></li>
                        </ul>
                    </div>
                    <div onClick={handleDrawer} className="sm:hidden cursor-pointer pl-24">
                        <Image src={hamber} alt='hamberger' />
                    </div>
                </div>

                <div
                    className={
                        drawerOpen
                            ? "fixed z-50 right-0 top-18 w-[100%] sm:hidden bg-[black] h-auto p-4 ease-in duration-500"
                            : "fixed z-50 left-[-100%] top-24 p-10 ease-in-out duration-500"
                    }
                >
                    <ul className="flex flex-col gap-6 text-xl text-white">
                        <li className="hover:font-semibold  cursor-pointer">Home</li>
                        <li className="hover:font-semibold  cursor-pointer">Start Saving</li>
                        <li className="hover:font-semibold  cursor-pointer">Partner With Us</li>
                        <li><Button text="Download App" /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar