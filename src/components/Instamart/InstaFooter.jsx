const phoneIcon = new URL("../../assets/instaFooterIcon.png", import.meta.url).href;

export default function InstaFooter (){
    return(
        <>
            <footer className="w-[65%] mx-auto bg-[#F0F0F5] flex  flex-col">
                 <div className="flex w-[70%] justify-between items-center mx-auto">
                    <div>
                        <div className="text-[24px] text-[#02060ceb] font-bold mb-3 w-95">For better experience, download the Swiggy app now</div>
                        <div className="flex h-11 gap-2">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"></img>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
                        </div>
                    </div>
                 <img src={phoneIcon} alt="phone icon" className="h-50 w-45 pt-2" />

                 </div>    

                <div className="text-[#ffffff99] bg-[#02060c] font-semibold p-20">
                   <div>
                    <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="swiggy logo" />
                    <p className="text-md font-semibold mt-2">© 2026 Swiggy Limited</p>                    
                   </div>
                <div className=" mt-10 mb-20 flex justify-between  items-start">
                 <div>
                    <ul className="max-w-[230px] flex-none flex flex-col gap-3">
                         <div className="font-semibold text-[18px] text-[#ffffffeb]">Categories</div>
                         <div className="cursor-pointer truncate"> Office and Electricals in Bangalore</div>
                         <div className="cursor-pointer truncate">Office and Electricals in Bangalore</div>
                         <div className="cursor-pointer truncate">Sauces and Spreads in Delhi</div>
                         <div className="cursor-pointer truncate">Office and Electricals in Hyderabad </div>
                         <div className="cursor-pointer truncate">Dairy, Bread and Eggs in Delhi</div>
                         <div className="cursor-pointer truncate">Office and Electricals in Mumbai</div>
                         <div className="cursor-pointer truncate">Dairy, Bread and Eggs in Bangalore</div>
                         <div className="cursor-pointer truncate">Beauty and Grooming in Delhi</div>

                         <span className="border px-1 py-1 rounded-lg text-[15px] mt-2 text-center">144 Categories ˅</span>

                    </ul>
                </div>
                <div>
                    <ul className="max-w-[122px] flex flex-col gap-3">
                          <div className="font-semibold text-[18px] text-[#ffffffeb]">We deliver to</div>
                          <div className="cursor-pointer">Bangalore</div>
                          <div className="cursor-pointer">Gurgaon</div>
                          <div className="cursor-pointer">Hyderabad</div>
                          <div className="cursor-pointer">Delhi</div>
                          <div className="cursor-pointer">Mumbai</div>
                          <div className="cursor-pointer">Noida</div>
                          <div className="cursor-pointer">Pune</div>
                          <div className="cursor-pointer">Vadodara</div>
                          
                          <div className="border px-2 py-1 rounded-lg text-[15px] mt-2">27 cities ˅</div>
                    </ul>                    
                </div>
                <div>
                    <ul className="max-w-[122px] flex flex-col gap-3">
                         <div className="font-semibold text-[18px] text-[#ffffffeb]">Company</div>
                         <div className="cursor-pointer">About Us</div>
                         <div className="cursor-pointer">Careers</div>
                         <div className="cursor-pointer">Team</div>
                         <div className="cursor-pointer">Swiggy One</div>
                         <div className="cursor-pointer">Instamart</div>
                         <div className="cursor-pointer">Swiggy Genie</div>
                    </ul>
                </div>
                <div className="flex flex-col justify-between pb-10">
                    <ul className="max-w-[122px] flex flex-col gap-3 mb-10">
                          <div className="text-[#ffffffeb] font-semibold text-[18px]">Legal</div>
                          <div className="cursor-pointer">Terms & Conditons</div>
                          <div className="cursor-pointer">Cookie Policy</div>
                          <div className="cursor-pointer">Privacy Policy</div>
                    </ul>
                    <ul className="max-w-[122px] flex flex-col gap-3">
                          <div className="text-[#ffffffeb] font-semibold text-[18px]">Contact Us</div>
                          <div className="cursor-pointer">Help & Support</div>
                          <div className="cursor-pointer">Partner With Us</div>
                          <div className="cursor-pointer">Ride With Us</div>
                    </ul>              
                </div> 
                            
                
                </div>

                <div className="flex justify-between">
                    <div className="text-white text-lg">© 2026 Swiggy</div>
                    <div className="flex gap-1 mb-10 w-30 h-30">                            
                            <a href="https://www.instagram.com/swiggyindia/?hl=en" target="_blank">
                            <img alt="Instagram" src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/Dweb/Instagram.png"/>
                            </a>
                            <a href="https://www.facebook.com/swiggy.in/" target="_blank">
                            <img alt="Facebook" src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/Dweb/facebook.png"/>
                            </a>
                            <a href="https://in.pinterest.com/swiggyindia/" target="_blank">
                            <img alt="Pinterest" src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/Dweb/Pinterest.png"/>
                            </a>
                            <a href="https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                            <img alt="Twitter" src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/Dweb/Twitter.png"/>
                            </a>
                        </div>
                </div>
                

                </div>                
             


                

            
           </footer>

        </>
    )
}