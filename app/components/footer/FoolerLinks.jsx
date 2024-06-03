import googlePlay from "../../../public/download/googlePlayPopUpLogo.png"
import appStore from "../../../public/download/appleStorePopUpLogo.png"
import Image from "next/image"

const FoolerLinks = () => {
  return (
    <div className="w-[90%] sm:w-[82%] m-auto mt-5 flex justify-between items-center sm:px-5">
        <div className="w-[30%] text-center">© FinShakti Solutions Pvt. Ltd.</div>
        <div className="flex gap-5 sm:gap-10">
            <Image className="w-[100px]" src={googlePlay} alt={googlePlay}/>
            <Image className="w-[100px]" src={appStore} alt={appStore}/>
        </div>
    </div>
  )
}

export default FoolerLinks