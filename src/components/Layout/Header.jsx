import { Link } from "react-router"
import Signup from "../Auth/Signup";
import { useState } from "react";
export default function Header () {

    const [open,setOpen] = useState(false);

    return(
        <>
        <header className="bg-[#ff5200] font-serif">
            <div className="flex flex-col sm:flex-row justify-between items-center
                max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                 <img className="w-32 sm:w-40 h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="swiggy logo" />
                 <nav className="text-white text-sm lg:text-base font-bold
                flex flex-wrap justify-center gap-4 lg:gap-8 items-center mt-5 sm:mt-0">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a target="_blank" href="" className="border border-white px-4 py-3 rounded-2xl">Get the App ↗</a>
                    <div className="border border-black bg-black px-4 py-3 rounded-2xl cursor-pointer" onClick={()=>setOpen(true)} >Sign in</div>
                 </nav>
            </div>

            <div className="pt-16 pb-8 relative">
                <img  className= "hidden lg:block h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="vegetable_image"/>
                <img className= "hidden lg:block h-110 w-60 absolute top-0 right-0"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="vegetable_image" />
                <div className= "w-full max-w-3xl mx-auto px-4 text-center font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
                Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className= "w-full max-w-4xl mx-auto px-4 flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8">
                 <input className="bg-white w-full sm:w-[35%] text-base sm:text-xl px-4 sm:px-6 py-3 sm:py-4 rounded-md" placeholder="Enter your delivery location" />
                 <input className= "bg-white w-full sm:w-[65%] text-base sm:text-xl px-4 sm:px-6 py-3 sm:py-4 rounded-md" placeholder="Search for restaurant, item or more"/>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link to={"/restaurant"}>
                <img className="w-full h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
            </Link>
            <Link to={"/instamart"}>
                <img className="w-full h-auto" className="w-full h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
            </Link>
            <Link to={"/dineout"}>
                <img className="w-full h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
            </Link>
            </div>            
        </header>

        {/* // Sign Up  */}
        {open && <Signup close={()=>setOpen(false)}></Signup>}
        </>
    )
}

