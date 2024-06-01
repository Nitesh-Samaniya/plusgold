import Image from 'next/image';
import React from 'react';
import sharkTankBgImage from '../../public/video/sharkTankBgImage.png';
import sharkTankLogo from '../../public/video/sharkTankLogo.png';
import { FaArrowRight } from "react-icons/fa6";

const VideoSection = () => {
  const videoUrl = 'https://www.youtube.com/embed/ugsNPQl14Q4?si=QIPG1w2Ofy62cCC9';

  return (
    <div className="relative mt-20 mb-20 w-[95%] m-auto">
      <Image className="block m-auto h-[500px] sm:h-[700px] lg:h-auto" src={sharkTankBgImage} alt="Shark Tank Background" />

      <div className="absolute inset-0 flex flex-col lg:flex-row justify-center gap-20 p-5">
        <div className="flex flex-col text-center text-white text-start lg:mt-20">
          <p className="mb-2 text-xl font-bold mb-7">Plus Gold appearance in</p>
          <Image width={'80%'} src={sharkTankLogo} alt="Shark Tank Logo" />
          <div className='mt-5 font-semibold'>
            <p>Watch our Shark</p>
            <p className='flex items-center gap-2'>Tank pitch <FaArrowRight /></p>
          </div>
        </div>

        <div>
          <iframe
            className='rounded-3xl w-[100%] sm:h-[300px] lg:w-[530px] lg:mt-10'
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
