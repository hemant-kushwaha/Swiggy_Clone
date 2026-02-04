import { useState, useEffect } from "react";
import { useParams } from "react-router"
import ItemCard from "./ItemCard";
import {menuDataFetch} from "../../../store/MenuSlice"
import { useDispatch, useSelector } from "react-redux";

export default function SearchFood (){

    const {id} = useParams();    
    const[food,setFood] = useState("");
    const[RestData, setRestData] = useState([])

    const dispatch = useDispatch();
    const {data,loading,error}=useSelector((state)=>state.menuSlice)


      useEffect(()=>{

        if(food.length>1){
                dispatch(menuDataFetch(id));
            } else {
            //  Clear items when input empty or 1 character
             setRestData([]);
            }
        
        const Data = data;
        const tempData = Data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterData = tempData?.filter(  (items) => items?.card?.card?.title &&  !items?.card?.card?.carousel);

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
            
        
            },[food,id])

        console.log(RestData);

    return(
        <div className="w-[60%] mt-20 mx-auto">
        <input className="w-full text-center py-4 rounded-2xl bg-gray-200 text-xl text-gray-900 font-semibold mb-15" type="text" placeholder="Search For Dishes" onChange={(e)=>setFood(e.target.value)}/>
        {
            RestData.map((items)=><ItemCard key={items?.card?.info?.id} itemData={items?.card?.info}></ItemCard>)
        }
        </div>
    )
}