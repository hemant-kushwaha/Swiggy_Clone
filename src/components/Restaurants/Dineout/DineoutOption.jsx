import { useState } from "react";
import {dineoutRestaurants} from "../../../Utils/DineoutData"
import DineCard from "../../Dine/DineCard";
import DineCity from "./DineCityCuisines"
export default function DineoutOption () {
     const [ShowMore,setShowMore] = useState(false);
    
        //Card Limit
        const initial_count = 12;    
        const visibleCards = ShowMore ? dineoutRestaurants : dineoutRestaurants.slice(0,initial_count);

        //Word Limit 
        const [showFullText, setShowFullText] = useState(false);

        const fullText = 
                <div>
                <p>Discover the best restaurants near you and elevate your dining out experience with <strong>Swiggy Dineout</strong>! Whether you're planning a cozy date night, a family gathering, or just craving a casual meal with friends, Swiggy Dineout offers a seamless way to explore a variety of restaurants that cater to every taste, mood, and occasion. From elegant fine dining establishments to casual cafés and local favourites, there’s something for everyone. No matter what you’re in the mood for – be it a gourmet feast, hearty comfort food, or delicious vegetarian options – <strong>Swiggy Dineout</strong> ensures a dining experience that's convenient and enjoyable. </p>
                <p> With easy table reservations and access to exclusive deals, booking a restaurant and dining out has never been easier. Simply browse through the list of top-rated restaurants, check out the available time slots, and reserve your table in just a few clicks. Not only do you get to skip the hassle of waiting in line, but you also unlock amazing benefits such as discounts, combo deals, and loyalty rewards that make dining out a cost-effective and delightful experience. </p>
                <p> Imagine walking into your favourite restaurant knowing your table is ready and waiting for you, while also enjoying great savings. <strong>Swiggy Dineout</strong> makes this a reality by allowing you to make table reservation online and ensuring a smooth, hassle-free evening. Whether you’re indulging in a multi-course meal at a fine dining venue or grabbing a quick bite at a local eatery, <strong>Swiggy Dineout</strong> makes it easier to enjoy your favourite dining experiences. </p>
                <p> The app also offers the advantage of discovering new restaurants and trying different cuisines, all while earning rewards for your loyalty. So, whether you’re looking to explore new dining spots or stick with your regular favourites, <strong>Swiggy Dineout</strong> enhances your experience with convenience and savings. Book restaurant today and enjoy a stress-free dining experience!</p>
                </div>
        const smallText = 
                <div>
                <p>Discover the best restaurants near you and elevate your dining out experience with <strong>Swiggy Dineout</strong>! Whether you're planning a cozy date night, a family gathering, or just craving a casual meal with friends, Swiggy Dineout offers a seamless way to explore a variety of restaurants that cater to every taste, mood, and occasion. From elegant fine dining establishments to casual cafés and local favourites, there’s something for everyone. No matter what you’re in the mood for – be it a gourmet feast, hearty comfort food, or delicious vegetarian options – <strong>Swiggy Dineout</strong> ensures a dining experience that's convenient and enjoyable. </p>
                <p> With easy table reservations and access to exclusive deals, booking a restaurant and dining out has never been easier. Simply browse through the list of top-rated restaurants, check out the available time slots, and reserve your table in just a few clicks. Not only do you get to skip the hassle of waiting in line, but you also unlock amazing benefits such as discounts, combo deals, and loyalty rewards that make dining out a cost-effective and delightful experience...</p>
                </div>
    return(
        <>
        <div className=" w-[80%] mx-auto">
            <div className="mt-12 mb-15 relative ">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" alt="banner" />
                <div className="absolute left-10 bottom-20 z-9  text-5xl font-bold text-[rgb(255,238,229)] w-100">Explore Top Dining Out Restaurants in Lucknow</div>
            </div>
            <div> { /* Filters */}</div>
            <div className="flex flex-wrap justify-center gap-10 mt-10 mb-8">
                    {visibleCards?.map((dineData)=><DineCard key={dineData?.info?.id} dineData={dineData}></DineCard>)}     
                    {!ShowMore && <div className="flex justify-center items-center mb-8 font-bold">
                    <button onClick={()=>setShowMore(true)} className="border-2 border-gray-300 text-center py-4 px-30 rounded-lg shadow-md  text-[rgb(255,82,0)]">ShowMore ▼</button>
            </div>}           
            </div>
            <div className="shadow-lg py-6 px-4 mb-20 border-2 border-gray-100 rounded-lg space-y-6 text-gray-600 font-semibold">
                  {showFullText ? fullText:smallText}
                  {!showFullText && <button onClick={() => setShowFullText(true)} className="text-[rgb(255,82,0)] font-bold">See More ▼</button>}
           
            </div>
        </div>
        <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_3480,h_676/portal/m/seo/app_download_dweb_new.png" alt="scan" /></div>  
        <div><DineCity> </DineCity></div>          

        </>
    )
}