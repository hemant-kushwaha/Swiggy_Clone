import { useState, useEffect } from "react";
import { useParams } from "react-router"

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
            setRestData(filterData)                                 
            }
            if(food.length>1){
                fetchData();

            }
        },[food,id])

        console.log(RestData);

    return(
        <div className="w-[80%] mt-20 mx-auto">
        <input className="w-full text-center py-4 rounded-2xl bg-gray-200 text-2xl" type="text" placeholder="Search Your Dishes Here" onChange={(e)=>setFood(e.target.value)}/>
        </div>
    )
}