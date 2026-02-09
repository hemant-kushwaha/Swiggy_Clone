import { useState } from "react";
import RestaurantListCard from "./RestaurantListCard";

export default  function RestaurantListOption ({citydata}) {

    const [ShowMore,setShowMore] = useState(false);    
    const initial_count = 11;
    // console.log(citydata)

    const visiblecities = ShowMore ? citydata?.brands : citydata?.brands?.slice(0,initial_count);

    return(
          <div className="w-[70%] mx-auto container mt-8 mb-10">
                    <p className="text-2xl font-semibold">{citydata?.title}</p>
                    <div className="flex flex-wrap gap-5 mt-5">
                        {visiblecities?.map((item)=><RestaurantListCard key={item?.text} data={item}></RestaurantListCard>)}
                        {!ShowMore && 
                        (<button onClick={()=>setShowMore(true)}
                         className="rounded-lg  w-58 h-18 text-center flex items-center justify-center text-[rgb(255,82,0)] font-bold border border-gray-300 p-4 text-sm">Show More ▼</button>)}
                    </div>
                </div>
        
    )
}

