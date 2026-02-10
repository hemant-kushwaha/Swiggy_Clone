import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import RestaurantData from "../../Utils/RestaurantData"
import RestaurantList from "./RestaurantList"
import { Link } from "react-router"

export default function RestaurantOption () {
    const[RestData, setRestData] = useState([])
   
    useEffect(()=>{
        async function fetchData() {
            const proxyServer= "https://cors-anywhere-upqq.onrender.com/"
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.83730&lng=80.91650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            const response = await fetch(proxyServer+swiggyAPI,{headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0.0.0 Safari/537.36",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-ch-ua-mobile": "?0",
                    // ...other desktop headers if needed
                }
            })      
            const data = await response.json();

            // const data = RestaurantData;

            setRestData(data)                       
        }
        fetchData();
    },[])

    const FoodData = RestData?.data?.cards[0]?.card?.card?.imageGridCards?.info
    const TopRestData = (RestData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // const OnlineRestData = RestData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    
    // console.log(OnlineRestData)

    //Shimmer Effect
    if(RestData.length === 0){
        return <Shimmer count={12}></Shimmer>
    }

    return(
        <>
        <div className="w-[80%] mx-auto mt-5">
              <div className="text-2xl font-bold">{RestData?.data?.cards[0]?.card?.card?.header?.title}</div>
              <div className="flex mx-auto h-50 gap-5 flex-nowrap overflow-x-auto scrollbar-hide">            
                 {FoodData.map((item)=>(
                <Link to={"/collection/"+item?.action?.link.split("/collections/")[1].split("&sortBy")[0].replace("&", "?")}  key={item?.id} className="flex-shrink-0">
                   <img  key={item?.id} src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item?.imageId} className="w-full h-50 object-cover"></img>
                </Link>
                 ))}
              </div>      
        </div>
        <hr  className=" w-[80%] mx-auto mt-8 text-2xl text-gray-300"/>
        <div className="w-[80%] mx-auto mt-5">
            <div className="text-2xl font-bold">{RestData?.data?.cards[1]?.card?.card?.header?.title}</div>
           <div className="flex flex-nowrap overflow-x-auto mx-auto mt-10 gap-5 scrollbar-hide ml-6 mr-7">
             { TopRestData.map((restInfo)=><RestaurantCard  key={restInfo.info.id} restInfo={restInfo}></RestaurantCard>)}
           </div>
        </div>
        <hr  className=" w-[80%] mx-auto mt-8 text-2xl text-gray-300"/>
        <div className="w-[80%] mx-auto mt-8">
            <div className="text-2xl font-bold">{RestData?.data?.cards[2]?.card?.card?.title}</div>
           <div className="flex flex-wrap mx-auto mt-10 gap-5 justify-center">
             { TopRestData?.map((restInfo)=><RestaurantCard  key={restInfo.info.id} restInfo={restInfo}></RestaurantCard>)}
           </div>
        </div>
        <RestaurantList RestData={RestData}></RestaurantList>        
        </>
    )
} 