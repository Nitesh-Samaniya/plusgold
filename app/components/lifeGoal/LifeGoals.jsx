"use client"
import React from 'react';
import akshayTrithiya from "../../../public/lifeGoals/akshayaTrithiya.png";
import anniversary from "../../../public/lifeGoals/aniiversaryImageVeerFigma.png";
import dhanteras from "../../../public/lifeGoals/Dhanteras.png";
import wedding from "../../../public/lifeGoals/weddingMangalSutra.png";
import LifeGoalCard from "./LifeGoalCard";
import Slider from "react-slick";
import Button from '../Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const lifeGoalsCards = [
  {
    title: 'Akshay Tritiya',
    img: akshayTrithiya,
    price: 100
  },
  {
    title: 'Dream Anniversary',
    img: anniversary,
    price: 100
  },
  {
    title: 'Upcoming Wedding',
    img: wedding,
    price: 200
  },
  {
    title: 'Dhanteras',
    img: dhanteras,
    price: 150
  },
];

const LifeGoals = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
          centerPadding: "20px", 
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px" 
        }
      }
    ]
  };

  return (
    <div>
      <div className='text-center mb-10 sm:mb-5 text-5xl w-[90%] m-auto font-bold'>Save for life goals</div>
      <div className='text-center mb-20 text-xl w-[90%] m-auto font-semibold text-gray-500 tracking-wider'>Save in Plus Gold for life events that matter</div>
      <div className="slider-container sm:w-[85%] lg:w-[80%] m-auto">
        <Slider {...settings}>
          {
            lifeGoalsCards.map((el, index) => (
              <div key={index} className="px-2">
                <LifeGoalCard img={el.img} title={el.title} price={el.price} />
              </div>
            ))
          }
        </Slider>
      </div>
      <div className='mt-10 mb-10'><Button text={'Start Saving Now'}/></div>
    </div>

  )
}

export default LifeGoals;
