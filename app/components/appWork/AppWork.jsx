import React from 'react'
import bonusFromJewellers from "../../../public/appWork/bonusFromJewellers.png";
import extraGold from "../../../public/appWork/extraGoldPA.png";
import howToRedeem from "../../../public/appWork/howToRedeem.png";
import howToSave from "../../../public/appWork/howToSave.png";
import noLockInImg from "../../../public/appWork/noLockInImage.png";
import whatIsPlus from "../../../public/appWork/whatIsPlus.png";
import withDrawallImg from "../../../public/appWork/withdrawalImage.png";
import Image from 'next/image';
import AppWorkCardBox1 from "./AppWorkCardBox1";
import AppWorkCardsBox2 from "./AppWorkCardsBox2";

const appWorkCardsBox1 = [
    {
        img: whatIsPlus,
        title: 'What is Plus Gold?',
        desc: 'Built on Augmont'
    },
    {
        img: howToSave,
        title: 'How to save on Plus?',
        desc: 'SIP or One-time'
    },
    {
        img: howToRedeem,
        title: 'How to Redeem?',
        desc: 'Cash, Gold or jewellery'
    }
]

const appWorkCardsBox2 = [
    {
        img: noLockInImg,
        title: 'No Lock-in on',
        title2: 'Plus Gold'
    },
    {
        img: withDrawallImg,
        title: 'Easy',
        title2: 'Withdrawal'
    },
    {
        img: extraGold,
        title: 'Fixed Extra',
        title2: 'Gold p.a.'
    },
    {
        img: bonusFromJewellers,
        title: 'Bonus benefits',
        title2: 'from Jeweller'
    }
]

const AppWork = () => {
    return (
        <div className='mt-16'>
            <div>
                <p className='text-center text-5xl font-semibold'>How does the app work</p>
                <p className='mt-5 text-center text-xl'>Watch our short videos to learn more about our app</p>

                <div className="mt-10 rounded-3xl container w-[90%] lg:w-[85%] mx-auto px-4 py-5 border border-orange-200 bg-[#FAF8F1]">
                    <div className="flex flex-wrap justify-center">
                        {appWorkCardsBox1?.map((el, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center"
                            >
                                <AppWorkCardBox1 img={el.img} title={el.title} desc={el.desc} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-[65%] sm:w-[80%] lg:w-[85%] m-auto mt-10 grid grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-5 lg:gap-10'>
                    {
                        appWorkCardsBox2?.map((el, index)=><AppWorkCardsBox2 key={index} img={el.img} title={el.title} title2={el.title2}/>)
                    }
                </div>

            </div>
        </div>
    );
};


export default AppWork