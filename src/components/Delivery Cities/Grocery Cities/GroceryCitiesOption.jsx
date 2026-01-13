import { cityGroceryData } from "../../../Utils/CityGroceryData";
import GroceryCitiesCard from "./GroceryCitiesCard";
import { useState } from "react";

export default function GroceryCitiesOption (){

    const [ShowMore,setShowMore] = useState(false);

    const initial_count = 11;

    const visiblecities = ShowMore ? cityGroceryData : cityGroceryData.slice(0,initial_count);

    return(
        <div className="w-[65%] mx-auto container mt-20 mb-20">
                    <p className="text-2xl font-semibold">Cities with grocery delivery</p>
                    <div className="flex flex-wrap gap-5 mt-5">
                        {visiblecities.map((citydata)=><GroceryCitiesCard key={citydata?.text} citydata={citydata}></GroceryCitiesCard>)}
                        {!ShowMore && 
                        (<button onClick={()=>setShowMore(true)}
                         className="rounded-lg  w-58 h-18 text-center flex items-center justify-center text-[rgb(255,82,0)] font-bold border border-gray-300 p-4 text-sm">Show More ▼</button>)}
                    </div>
                </div>
    )
}