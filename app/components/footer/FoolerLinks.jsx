import googlePlay from "../../../public/download/googlePlayPopUpLogo.png"
import appStore from "../../../public/download/appleStorePopUpLogo.png"
import Image from "next/image"
import Link from "next/link"

const FoolerLinks = () => {
  return (
    <div className="w-[90%] sm:w-[82%] m-auto mt-5 flex justify-between items-center sm:px-5">
        <div className="w-[30%] text-center">© FinShakti Solutions Pvt. Ltd.</div>
        <div className="flex gap-5 sm:gap-10">
          <Link href='https://play.google.com/store/apps/details?id=com.fs.getplus' target='_blank'>
              <Image className="w-[100px]" src={googlePlay} alt={googlePlay}/>
          </Link>
          <Link href='https://apps.apple.com/in/app/plus-gold-save-for-jewellery/id6443759619?platform=iphone' target='_blank'>
              <Image className="w-[100px]" src={appStore} alt={appStore}/>
          </Link>
        </div>
    </div>
  )
}

export default FoolerLinks