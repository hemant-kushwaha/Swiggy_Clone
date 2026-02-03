import { useParams ,Link } from "react-router";
import { useState ,useEffect} from "react";
import MenuCard from "./MenuCard";
import {menuDataFetch} from "../../../store/MenuSlice"
import { useDispatch, useSelector } from "react-redux";

export default function RestaurantMenu (){
    let {id} = useParams();
    const[RestData, setRestData] = useState([])
    const [selected,setSelected] = useState(null)

    const dispatch = useDispatch();
    const {data,loading,error}=useSelector((state)=>state.menuSlice)


      useEffect(()=>{
        dispatch(menuDataFetch(id));
        const filterData = data;
         setRestData(filterData)  
    
    },[id])

    console.log(RestData)
    return(
        <div> 
                
            <div className="w-[80%] mt-20 mx-auto">
                <Link to={`/city/lucknow/${id}/search`}>
                <p className="w-full text-center py-4 rounded-2xl bg-gray-200 text-2xl">Search Your Dishes Here</p>
                </Link>
            </div> 
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