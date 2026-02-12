import { Link } from "react-router"
export default function DineHeader (){
    return(
        <>
            <div className="flex justify-center items-center w-full shadow-sm bg-white  mx-auto sticky top-0 z-10 p-3 gap-40">
                <div className="flex gap-4 justify-between items-center">
                    <div>
                    <Link to={"/"}>
                    <img  className="h-12 w-35 cursor-pointer rounded-2xl p-1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png" alt="logo" />
                    </Link>
                </div>
                <div className="text-lg text-gray-400">|</div>
                <div className="flex items-center gap-2">
                    <span><svg className="h-5 w-5" viewBox="0 0 16 17" fill="#FF5200" ><path d="M11.1828 1.84246C13.7623 0.516285 15.0521 -0.146802 15.6759 0.448004C16.2997 1.04281 15.6986 2.36264 14.4965 5.00231L11.0318 12.6101C9.78188 15.3547 9.15692 16.727 8.28744 16.6338C7.41796 16.5407 7.09629 15.0596 6.45294 12.0973C6.29606 11.375 6.21761 11.0138 5.97533 10.7649C5.73305 10.5161 5.37563 10.4285 4.6608 10.2532L4.29783 10.1642C1.65419 9.51589 0.332363 9.19175 0.234059 8.35677C0.135754 7.52179 1.34615 6.89952 3.76695 5.65497L11.1828 1.84246Z" fill="#FF5200"></path></svg></span>
                    <span className="text-lg font-bold text-gray-600">Setup your precise location</span>
                    <span><svg className="text-red-500 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></span>
                </div>
                </div>
                <div className="flex gap-4 justify-around items-center">
                    <div><input type="text"  className="h-14 w-120 bg-gray-200 rounded-lg text-center font-semibold text-lg" placeholder="Search for restaurant and food                                    🔎︎"/></div>
                    <div>
                    <svg className="h-12 w-12 cursor-pointer" viewBox="0 0 32 32" fill="none"  xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M12.6097 9.51178C14.1071 9.51178 15.3202 8.33063 15.3202 6.87364C15.3202 5.41747 14.1071 4.23633 12.6097 4.23633C11.1132 4.23633 9.89924 5.41747 9.89924 6.87364C9.89924 8.33063 11.1132 9.51178 12.6097 9.51178ZM6.63407 15.4005C7.41896 12.9149 9.79771 11.1071 12.6091 11.1071C15.422 11.1071 17.7998 12.9149 18.5842 15.4005C18.8042 16.0974 18.9142 16.4459 18.6422 16.8169C18.3702 17.188 17.9279 17.188 17.0434 17.188H8.17479C7.29023 17.188 6.84795 17.188 6.57597 16.8169C6.304 16.4458 6.41402 16.0974 6.63407 15.4005Z" fill="#43464A"></path><path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="#43464A"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.36 14.2184C18.4089 14.2184 20.0688 12.6022 20.0688 10.6086C20.0688 8.61615 18.4089 7 16.36 7C14.3123 7 12.6513 8.61615 12.6513 10.6086C12.6513 12.6022 14.3123 14.2184 16.36 14.2184ZM8.18351 22.2763C9.25748 18.8752 12.5123 16.4017 16.3591 16.4017C20.208 16.4017 23.4615 18.8752 24.5349 22.2762C24.8359 23.2298 24.9863 23.7066 24.6142 24.2143C24.242 24.722 23.6369 24.722 22.4265 24.722H10.2917C9.08134 24.722 8.47617 24.722 8.10403 24.2143C7.73188 23.7065 7.88242 23.2297 8.18351 22.2763Z" fill="white"></path></svg>
                    </div>
                </div>
            </div>
        </>
    )
}