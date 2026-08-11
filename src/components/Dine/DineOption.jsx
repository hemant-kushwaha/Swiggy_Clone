import {dineoutRestaurants} from "../../Utils/DineData"
import DineCard from "./DineCard"

export default function DineOption(){
    return(
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 mb-12 sm:mb-20">
            <p className="text-xl font-semibold">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto gap-5 mt-5">
                {dineoutRestaurants.map((dineData)=><DineCard key={dineData?.info?.id} dineData={dineData}></DineCard>)}
            </div>
        </div>
    )
}
