import { useParams } from "react-router";
import { useState ,useEffect} from "react";
import MenuCard from "./MenuCard";

export default function RestaurantMenu (){
    let {id} = useParams();
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
        fetchData();
    },[id])

    console.log(RestData)
    return(
        <>
        <div className="w-[80%] mx-auto">
            {
                RestData?.map((menuItems,i)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
            }
        </div>
        </>
    )
}

// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=59260&submitAction=ENTER
// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=60379&submitAction=ENTER --> use it