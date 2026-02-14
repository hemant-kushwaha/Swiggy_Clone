import {DineCityData} from "../../../Utils/DineCityData"
import { useState } from "react";
import FoodCitiesCard from "../../Delivery Cities/Food Cities/FoodCitiesCard"

export default function DineCity (){

    const [ShowMore,setShowMore] = useState(false);
    const [ShowMore2,setShowMore2] = useState(false);


    const initial_count = 11;

    const visiblecities = ShowMore ? DineCityData[0] : DineCityData[0].slice(0,initial_count);
    const visiblecities2 = ShowMore ? DineCityData[1] : DineCityData[1].slice(0,initial_count);


    return(
        <div className="w-[65%] mx-auto container mt-20 mb-20">
                    <p className="text-2xl font-semibold">Top Dining Out Cuisine Restaurants Near Me</p>
                    <div className="flex flex-wrap gap-5 mt-8">
                        {visiblecities.map((citydata)=><FoodCitiesCard key={citydata?.text} citydata={citydata}></FoodCitiesCard>)}
                        {!ShowMore && 
                        (<button onClick={()=>setShowMore(true)}
                         className="rounded-lg  w-58 h-18 text-center flex items-center justify-center text-[rgb(255,82,0)] font-bold border border-gray-300 p-4 text-sm">Show More ▼</button>)}
                    </div>
                    
                    <p className="text-2xl font-semibold mt-16">Top Dining Restaurant Collections Near me</p>
                    <div className="flex flex-wrap gap-5 mt-8">
                        {visiblecities2.map((citydata)=><FoodCitiesCard key={citydata?.text} citydata={citydata}></FoodCitiesCard>)}
                        {!ShowMore2 && 
                        (<button onClick={()=>setShowMore2(true)}
                         className="rounded-lg  w-58 h-18 text-center flex items-center justify-center text-[rgb(255,82,0)] font-bold border border-gray-300 p-4 text-sm">Show More ▼</button>)}
                    </div>

                </div>
    )
}