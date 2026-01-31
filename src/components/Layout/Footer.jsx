export default function Footer () {
    return(
        <>
        <footer className="bg-[#F0F0F5] w-full p-5">
            <div className="w-[65%] mx-auto container mt-8 mb-20 flex gap-10 text-[#02070f99]">
                <div className="mr-[5%]">
                    <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="swiggy logo" />
                    <p className="text-sm mt-2">© 2025 Swiggy Limited</p>                    
                </div>
                <div>
                    <ul className="max-w-[122px] flex flex-col gap-2">
                         <div className="text-black font-semibold text-[18px]">Company</div>
                         <div className="cursor-pointer">About Us</div>
                         <div className="cursor-pointer">Swiggy Corparate</div>
                         <div className="cursor-pointer">Careers</div>
                         <div className="cursor-pointer">Team</div>
                         <div className="cursor-pointer">Swiggy One</div>
                         <div className="cursor-pointer">Swiggy Instamart</div>
                         <div className="cursor-pointer">Swiggy Dineout</div>
                         <div className="cursor-pointer">Swiggy Genie</div>
                         <div className="cursor-pointer">Minis</div>
                         <div className="cursor-pointer">Pyng</div>
                    </ul>
                </div>
                <div className="flex flex-col justify-between">
                    <ul className="max-w-[122px] flex flex-col gap-2">
                          <div className="text-black font-semibold text-[18px]">Contact Us</div>
                          <div className="cursor-pointer">Help & Support</div>
                          <div className="cursor-pointer">Partner With Us</div>
                          <div className="cursor-pointer">Ride With Us</div>
                    </ul>
                    <ul className="max-w-[122px] flex flex-col gap-2">
                          <div className="text-black font-semibold text-[18px]">Legal</div>
                          <div className="cursor-pointer">Terms & Conditions</div>
                          <div className="cursor-pointer">Cookie Policy</div>
                          <div className="cursor-pointer">Privacy Policy</div>
                    </ul>
                </div>
                <div>
                    <ul className="max-w-[122px] flex flex-col gap-2">
                          <div className="text-black font-semibold text-[18px]">Available in:</div>
                          <div className="cursor-pointer">Bangalore</div>
                          <div className="cursor-pointer">Gurgaon</div>
                          <div className="cursor-pointer">Hyderabad</div>
                          <div className="cursor-pointer">Delhi</div>
                          <div className="cursor-pointer">Mumbai</div>
                          <div className="cursor-pointer">Pune</div>
                          <div className="border px-2 py-1 rounded-lg text-[15px]">685 cities ˅</div>
                    </ul>
                    
                </div>
                <div className="flex flex-col justify-between">
                    <ul className="max-w-[122px] flex flex-col gap-2">
                          <div className="text-black font-semibold text-[18px]">Life at Swiggy</div>
                          <div className="cursor-pointer">Explore with Swiggy</div>
                          <div className="cursor-pointer">Swiggy News</div>
                          <div className="cursor-pointer">Snackables</div>                          
                    </ul>
                    <ul className="max-w-[122px] flex flex-col gap-2">
                        <div className="text-black font-semibold text-[18px]">Social Links</div>
                        <div className="flex gap-1 mb-25">
                            <a href="https://www.linkedin.com/company/swiggy-in/" target="_blank">
                              <img alt="Linkedin" src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg"/>
                            </a>
                            <a href="https://www.instagram.com/swiggyindia/?hl=en" target="_blank">
                            <img alt="Instagram" src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg"/>
                            </a>
                            <a href="https://www.facebook.com/swiggy.in/" target="_blank">
                            <img alt="Facebook" src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg"/>
                            </a>
                            <a href="https://in.pinterest.com/swiggyindia/" target="_blank">
                            <img alt="Pinterest" src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg"/>
                            </a>
                            <a href="https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                            <img alt="Twitter" src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg"/>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
            <hr  className="w-[90%] mx-auto bg-[#02070f99]"/>

            <div className="flex items-center mt-8 gap-10 justify-center mx-auto container">
                <div className="text-[24px] text-black font-semibold ">For better experience, download the Swiggy app now</div>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"></img>
            </div>
        </footer>
        </>
    )
}