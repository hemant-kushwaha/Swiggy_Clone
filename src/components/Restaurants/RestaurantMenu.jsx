import { useParams } from "react-router";
import { useState ,useEffect} from "react";

export default function RestaurantMenu (){
    let {id} = useParams();
    console.log(id)
    const[RestData, setRestData] = useState([])

      useEffect(()=>{
        async function fetchData() {
            const proxyServer= "http://localhost:8080/"
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=${id}`
            const response = await fetch(proxyServer+swiggyAPI)      
            const data = await response.json();
            setRestData(data)
                                
        }
        fetchData();
    },[id])

    console.log(RestData)
    return(
        <>
        <h1>Hello Hemant</h1>
        <h2>{id}</h2>
        </>
    )
}

// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=59260&submitAction=ENTER