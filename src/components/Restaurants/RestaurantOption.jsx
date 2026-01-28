import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import RestaurantData from "../../Utils/RestaurantData"

export default function RestaurantOption () {
    const[RestData, setRestData] = useState([])
   
    useEffect(()=>{
        async function fetchData() {
            // const proxyServer= "https://corsproxy.io/"
            // const swiggyAPI = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.8373&lng=80.9165&carousel=true&third_party_vendor=1"
            // const response = await fetch(proxyServer+swiggyAPI,{ headers: { "User-Agent": "Mozilla/5.0" } })      
            // const data = await response.json();

            const data = RestaurantData;

            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)                       
        }
        fetchData();
    },[])

    // console.log(RestData)

    //Shimmer Effect
    if(RestData.length === 0){
        return <Shimmer count={12}></Shimmer>
    }

    return(
        <>
        <div className="w-[80%] flex flex-wrap mx-auto mt-20 gap-5">
            { RestData.map((restInfo)=><RestaurantCard key={restInfo.info.id} restInfo={restInfo}></RestaurantCard>)}
        </div>
        </>
    )
} 