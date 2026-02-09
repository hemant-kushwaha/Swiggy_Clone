import RestaurantListOption from "./RestaurantListOption";

export default function RestaurantList ({RestData}){

    // const visiblecities = ShowMore ? cityGroceryData : cityGroceryData.slice(0,initial_count);
    // console.log(RestData?.data?.cards[6]?.card?.card)

    return(
       <>
       <RestaurantListOption citydata ={RestData?.data?.cards[6]?.card?.card}></RestaurantListOption>
       <RestaurantListOption citydata ={RestData?.data?.cards[7]?.card?.card}></RestaurantListOption>
       <RestaurantListOption citydata ={RestData?.data?.cards[8]?.card?.card}></RestaurantListOption>


       </>
    )
}