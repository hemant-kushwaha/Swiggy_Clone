import { useParams } from "react-router";
import { useState ,useEffect} from "react";
import MenuCard from "./MenuCard";

export default function RestaurantMenu (){
    let {id} = useParams();
    const[RestData, setRestData] = useState([])
    const [selected,setSelected] = useState(null)


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
        <div>      
            <div className="w-[80%] mt-20 mb-10 mx-auto">
               <button className={`text-xl px-4 py-2 mr-2 rounded-lg border ${selected === "veg"? "bg-green-400" :"bg-gray-300" }`} onClick={()=> setSelected(selected === "veg"?null:"veg")} >Veg</button>
               <button className={`text-xl px-4 py-2 rounded-lg border ${selected === "Nonveg"? "bg-red-500":"bg-gray-300" }`} onClick={()=> setSelected(selected === "Nonveg"?null:"Nonveg")}>Non Veg</button>
            </div>    
        <div className="w-[80%] mx-auto">
            {
                RestData?.map((menuItems,i)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
            }
        </div>
        </div>
    )
}

// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=59260&submitAction=ENTER
// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=60379&submitAction=ENTER --> use it