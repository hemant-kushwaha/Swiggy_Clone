import { imageGridCards } from "../../Utils/FoodData"
import FoodCard from "../Food/FoodCard"

export default  function FoodOption () {

    return(
        <>
        <div className="max-w-[80%] container mx-auto grid grid-rows-2 grid-flow-col auto-cols-max gap-5 overflow-x-auto overflow-y-hidden mt-20 scrollbar-hide">
        {imageGridCards.map((foodData)=> <FoodCard key={foodData.id} foodData={foodData} > </FoodCard>)}
        </div>
        </>
    )
}
