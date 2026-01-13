import FoodOption from "../Food/FoodOption"
import GroceryOption from "../Grocery/GroceryOption"
import DineOption from "../Dine/DineOption"
import FoodCitiesOption from "../Delivery Cities/Food Cities/FoodCitiesOption"
import GroceryCitiesOption from "../Delivery Cities/Grocery Cities/GroceryCitiesOption"

export default  function Body () {
    return(
        <>
        <FoodOption></FoodOption>  
        <GroceryOption> </GroceryOption>
        <DineOption></DineOption>
        <img className="w-full mb-20" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="" />
        <FoodCitiesOption></FoodCitiesOption>
        <GroceryCitiesOption></GroceryCitiesOption>
        </>
    )
}