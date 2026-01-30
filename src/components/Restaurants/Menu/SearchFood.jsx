import { useState, useEffect } from "react";
import { useParams } from "react-router"
import ItemCard from "./ItemCard";

export default function SearchFood (){

    const {id} = useParams();    
    const[food,setFood] = useState("");
    const[RestData, setRestData] = useState([])


      useEffect(()=>{
            async function fetchData() {
            const proxyServer= "http://localhost:8080/"
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=${id}`
            const response = await fetch(proxyServer+swiggyAPI)      
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter(  (items) => items?.card?.card?.title &&  !items?.card?.card?.carousel);

            //All Unique itemCards
            const allItemCards = [];
            filterData.forEach((items) => {
                //Normal ItemCards
                 const normalItemsCards = items?.card?.card?.itemCards
                if(normalItemsCards){

                    normalItemsCards.forEach((item)=>{
                      const id = item?.card?.info?.id;

                         if(id && !allItemCards.some((itemsCard)=>itemsCard.card?.info?.id === id)){
                                allItemCards.push(item)
                             }

                    })                    
                }
                
                // Category ItemCards
                const categoryItemsCards = items?.card?.card?.categories
                if(categoryItemsCards){
                   categoryItemsCards.forEach(cat => {
                          cat.itemCards?.forEach((item) => {
                            const id = item?.card?.info?.id;
                              if (id && !allItemCards.some((i) => i.card.info.id === id)) {
                           allItemCards.push(item);
                                      }
                   });
                } ) 
                
                 }

             })

            //Search Funcitonality
            const searchedItems = allItemCards.filter(item =>
                 item.card.info.name.toLowerCase().startsWith(food.toLowerCase())
            );

             setRestData(searchedItems)   

        }

            if(food.length>1){
                fetchData();
            } else {
            //  Clear items when input empty or 1 character
             setRestData([]);
            }
        
            },[food,id])

        console.log(RestData);

    return(
        <div className="w-[80%] mt-20 mx-auto">
        <input className="w-full text-center py-4 rounded-2xl bg-gray-200 text-2xl mb-15" type="text" placeholder="Search Your Dishes Here" onChange={(e)=>setFood(e.target.value)}/>
        {
            RestData.map((items)=><ItemCard key={items?.card?.info?.id} itemData={items?.card?.info}></ItemCard>)
        }
        </div>
    )
}