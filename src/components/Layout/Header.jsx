export default function Header () {

    return(
        <>
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between max-w-7xl mx-auto py-8">
                 <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="swiggy logo" />
                 <nav className="text-white text-base font-bold flex gap-10 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a target="_blank" href="" className="border border-white px-4 py-3 rounded-2xl">Get the App</a>
                    <a target="_blank" href="" className="border border-black bg-black px-4 py-3 rounded-2xl">Sign in</a>
                 </nav>
            </div>

            <div className="pt-16 pb-8 relative">
                <img  className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="vegetable_image"/>
                <img className="h-110 w-60 absolute top-0 right-0"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="vegetable_image" />
                <div className="max-w-[60%] container mx-auto text-center font-semibold text-5xl text-white">
                Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-5 mt-8 justify-center">
                 <input className="bg-white w-[35%] text-xl px-6 py-4 text-[#02060c] rounded-md" placeholder="Enter your delivery location" />
                 <input className="bg-white w-[50%] text-xl px-6 py-4 text-[#02060c] rounded-md" placeholder="Search for restaurant, item or more"/>
                </div>
            </div>

            <div className="max-w-[80%] container mx-auto flex">
            <a href="https://www.swiggy.com/restaurants">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
            </a>
            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
            </a>
            <a href="https://www.swiggy.com/dineout">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
            </a>
            </div>            
        </header>
        </>
    )
}

