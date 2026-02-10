import { useEffect, useState } from "react"
import {useParams,useLocation } from "react-router";

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
                    "sec-ch-ua-mobile": "?0",}})
            const data = await response.json();

            setCOllectionData(data) 
            }
        fetchcollection()
        },[id])      
            
    
        return(
            <>
             <div className="text-3xl ">
                
                    {collectionData?.data?.cards[0]?.card?.card?.title}
            </div>
            
            
            </>
        )
}


// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8373&lng=80.9165&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8373&lng=80.9165&collection=83655&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null


// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8373&lng=80.9165&collection=83639