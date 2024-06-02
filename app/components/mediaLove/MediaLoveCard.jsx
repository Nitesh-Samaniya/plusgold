import Image from 'next/image'
import React from 'react'

const MediaLoveCard = ({img1, img2, desc, link}) => {
    const truncatedDesc = desc.split(' ').slice(0, 10).join(' ');
    const displayDesc = desc.split(' ').length > 10 ? truncatedDesc + '...' : desc;
  return (
    <div>
        <div className='pt-3 pb-10 pr-3 pl-3 border border-orange-200 text-center bg-[#FAF8F1] w-[300px] rounded-3xl'>
            <Image className='block m-auto mb-5' src={img1} alt={img1}/>
            <div className='mb-10'>{displayDesc}</div>
        </div>
        <div style={{ marginRight: '50px'}}>
            <Image className='block m-auto border-4 border-orange-500 p-3 mt-[-30px]' src={img2} alt={img2}/>
        </div>
    </div>
  )
}

export default MediaLoveCard