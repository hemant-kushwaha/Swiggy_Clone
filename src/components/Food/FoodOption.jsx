import { imageGridCards } from "../../Utils/FoodData"
import FoodCard from "../Food/FoodCard"

export default  function FoodOption () {

    return(
        <>
        <div className="max-w-[80%] container mx-auto flex flex-wrap gap-5 justify-center mt-20 ">
        {imageGridCards.map((foodData)=> <FoodCard key={foodData.id} foodData={foodData} > </FoodCard>)}
        </div>
        </>
    )
}
