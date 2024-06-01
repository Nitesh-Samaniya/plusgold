import Button from './Button'
import Image from 'next/image'
import HeaderAgmount from "../../public/header/augmontLogo.svg"
import HeaderCashfree from "../../public/header/cashFreeSvnLogo.svg"
import HeaderNPCI from "../../public/header/npciLogo.svg"
import SonakshiBG from "../../public/header/sonkshibackgroundImage.svg";
import SonakshiImg from "../../public/header/sonakshiSinha.svg";

const Header = () => {
  return (
    <div 
        className='
            bg-[#FAF8F1] 
            mt-[60px] 
            sm:mt-[100px] 
            md:mt-[110px] 
            lg:mt-[130px]
            flex flex-col lg:flex-row lg:justify-between
            px-[3%] sm:px-[20%] lg:px-[10%]
            py-[12%] sm:py-[4%]
        '>
            {/* left-box */}
        <div className='mt-10'> 
            <p className='text-2xl sm:text-3xl font-semibold lg:mt-20'>Save smartly in</p>
            <p className='text-7xl sm:text-8xl text-[#F7C566] font-bold tracking-wider'>GOLD</p>
            <p className='text-md sm:text-xl'>And get 10% extra gold every year!</p>
            <div className='flex flex-col sm:flex-row gap-5 mt-5'>
                <div>
                    <Button text={'Start Saving Now'}/>
                </div>
                <div>
                    <button className='border-2 border-gray bg-[white] text-black px-5 py-2 font-normal rounded-3xl'>Trusted by 2Lakh + Indians</button>
                </div>
            </div>
            <div className='mt-5 flex flex-col sm:flex-row gap-5'>
                <p className='text-gray-500'>Powered by</p>
                <p className='flex gap-5'>
                    <Image src={HeaderAgmount} alt={HeaderAgmount}/>
                    <Image src={HeaderCashfree} alt={HeaderCashfree}/>
                    <Image src={HeaderNPCI} alt={HeaderNPCI}/>
                </p>
            </div>
        </div>
{/* right-box */}
        <div className='relative'>
            <Image src={SonakshiBG} alt={SonakshiBG}/>
            <Image className='absolute top-0 left:[5%] sm:left-[10%]' src={SonakshiImg} alt={SonakshiImg}/>
        </div>
    </div>
  )
}

export default Header