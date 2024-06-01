import Image from 'next/image';
import React from 'react';

const AppWorkCardBox1 = ({ img, title, desc }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-5">
            <Image className='border border-orange-200 rounded-3xl' src={img} alt={img} />
            <p className="text-2xl font-semibold">{title}</p>
            <p className="mt-[-12px] text-gray-500">{desc}</p>
        </div>
    );
};

export default AppWorkCardBox1;
