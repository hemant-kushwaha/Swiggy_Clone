import { imageGridCards } from "../../Utils/FoodData"
import FoodCard from "../Food/FoodCard"

export default  function FoodOption () {

    return(
        <>
        <div className= "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-rows-2 grid-flow-col auto-cols-max gap-4 sm:gap-5 overflow-x-auto overflow-y-hidden mt-10 sm:mt-20 scrollbar-hide">
        {imageGridCards.map((foodData)=> <FoodCard key={foodData.id} foodData={foodData} > </FoodCard>)}
        </div>
        </>
    )
}
