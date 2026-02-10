import { useEffect, useState } from "react"
import {useParams,useLocation } from "react-router";
import RestaurantCard from "../RestaurantCard"
import RestShimmer from "./RestShimmer";

export default  function RestCollectionOption () {
    
    const [collectionData, setCOllectionData] = useState();

    const {id} = useParams();
    const { search } = useLocation(); 

    useEffect(()=>{
        async function fetchcollection() {
            const proxyServer= "https://cors-anywhere-upqq.onrender.com/"
            const swiggyAPI = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8373&lng=80.9165&collection=${id}${search}`
            const response = await fetch(proxyServer+swiggyAPI,{headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0.0.0 Safari/537.36",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-ch-ua-mobile": "?0"}})
            const data = await response.json();

            setCOllectionData(data) 
            }
        fetchcollection()
        },[id])   
        
        
            
        const foodData = collectionData?.data?.cards.filter((item)=>item?.card?.card?.info)
        if(!collectionData){
        return <RestShimmer count={12}></RestShimmer>
        }

        console.log(foodData)
    
        return(
            <>
             <div>
                <div className="w-[76%] mx-auto mt-15">
                    <div className="text-4xl font-bold mb-3">{collectionData?.data?.cards[0]?.card?.card?.title}</div>
                    <div className="text-xl text-gray-900 mb-3">{collectionData?.data?.cards[0]?.card?.card?.description}</div>
                    <div>
                           {/* Filters */}
                    </div>
                    <div className="text-2xl font-bold">{collectionData?.data?.cards[0]?.card?.card?.count} to explore</div>
                </div>
                <div className="w-[76%] flex flex-wrap mx-auto mt-5 gap-5 justify-center">
                    {
                        foodData?.map((item)=><RestaurantCard key={item?.card?.card?.info?.id} restInfo={item?.card?.card}></RestaurantCard>)
                    }
                    {
                        foodData?.map((item)=><RestaurantCard key={item?.card?.card?.info?.id} restInfo={item?.card?.card}></RestaurantCard>)
                    }
                    {
                        foodData?.map((item)=><RestaurantCard key={item?.card?.card?.info?.id} restInfo={item?.card?.card}></RestaurantCard>)
                    }
                </div>
            </div>
            
            
            </>
        )

    }

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8373&lng=80.9165&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8373&lng=80.9165&collection=83655&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null
