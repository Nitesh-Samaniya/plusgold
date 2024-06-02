"use client"

import React from 'react'
import MediaLoveCard from "./MediaLoveCard";
import enTracer from "../../../public/media/enTracker.png"
import entracer from "../../../public/media/entrackerLogo.svg"
import forbesArticle from "../../../public/media/forbesArticle.png"
import forbesLogo from "../../../public/media/forbesLogo.svg"
import timeApplaud from "../../../public/media/timeApplaudLogo.svg"
import timeApplaudNews from "../../../public/media/timesApplaudNewsPic.png"
import vccCircleLogo from "../../../public/media/vccCircleLogo.svg"
import vccCircleNews from "../../../public/media/vcCrircleNewsPic.png"
import yourStoryLogo from "../../../public/media/yourStoryLogo.svg"
import yourStoryNews from "../../../public/media/yourstoryNewsPic.png"
import Slider from "react-slick";

const medisCardsData = [
    {
        img1: enTracer,
        img2: entracer,
        desc: 'Plus launches a new savings app with exclusive and attractive offers for India’s jewellery purchasers',
        link: 'https://entrackr.com/2023/08/jewellery-savings-app-plus-raises-350k-in-seed-round/'
    },
    {
        img1: forbesArticle,
        img2: forbesLogo,
        desc: 'Plus disrupts Indias gold market, Democratising a timeless asset',
        link: 'https://www.forbesindia.com/article/brand-connect/plus-disrupts-indias-gold-market-democratising-a-timeless-asset/91835/1'
    },
    {
        img1: timeApplaudNews,
        img2: timeApplaud,
        desc: 'Know how the Plus app helps Indian homemakers save for jewellery and gold',
        link: 'https://timesapplaud.com/know-how-the-plus-app-helps-indian-homemakers-save-for-jewellery-and-gold/'
    },
    {
        img1: vccCircleNews,
        img2: vccCircleLogo,
        desc: 'https://www.vccircle.com/nymbleupplus-raise-early-stage-funding',
        link: 'https://www.vccircle.com/nymbleupplus-raise-early-stage-funding'
    },
    {
        img1: yourStoryNews,
        img2: yourStoryLogo,
        desc: 'This savings app helps users plan for their next jewellery purchase',
        link: 'https://yourstory.com/2023/01/this-savings-app-helps-users-plan-for-their-next-jewellery-purchase'
    },
]

const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};


const MediaLove = () => {
    return (
        <div className='mb-20'>
            <div className='text-center mb-10 sm:mb-5 text-5xl w-[90%] m-auto font-bold '>
                The media loves Plus
            </div>
            <div className='text-center mb-20 text-xl w-[90%] m-auto tracking-wider'>
                Top publications & news media talks about us
            </div>



            <div className="slider-container sm:w-[85%] lg:w-[70%] m-auto">
                <Slider {...settings}>
                    {
                        medisCardsData?.map((el, index) =>
                            <MediaLoveCard key={index} img1={el.img1} img2={el.img2} desc={el.desc} link={el.link}/>
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}

export default MediaLove