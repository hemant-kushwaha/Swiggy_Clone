import {dineoutRestaurants} from "../../Utils/DineData"
import DineCard from "./DineCard"

export default function DineOption(){
    return(
        <div className="w-[80%] mx-auto container mt-20 mb-20">
            <p className="text-xl font-semibold">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto gap-5 mt-5">
                {dineoutRestaurants.map((dineData)=><DineCard key={dineData?.info?.id} dineData={dineData}></DineCard>)}
            </div>
        </div>
    )
}