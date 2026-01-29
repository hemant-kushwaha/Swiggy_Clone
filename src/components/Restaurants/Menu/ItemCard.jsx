import { useState } from "react"
import {addItems,IncrementItems,DecrementItems} from "../../../store/CardSlice"
import { useDispatch, useSelector } from "react-redux";

export default function ItemCard ({itemData}){

    const dispatch = useDispatch();

    const items = useSelector(state => state.cartSlice.items)

    const element = items.find(item =>item.id === itemData.id);
    const count = element?element.quantity : 0;


    //Add items logic
    function handleAddItems (){
        dispatch(addItems(itemData));        
    }

    function handleIncrementItems (){
        dispatch(IncrementItems(itemData));        
    }

    function handleDecrementItems (){
        dispatch(DecrementItems(itemData));        
    }

    
    return(
        <>
        <div className="w-full flex justify-between mb-2 pb-2">
            <div className="w-[70%]">
                <p className="text-2xl text-gray-800 font-semibold mb-1">{itemData?.name}</p>
                <p className="text-xl text-gray-800 font-semibold">₹{(itemData?.defaultPrice ?? itemData?.price) / 100}</p>
                <span className="text-green-700 text-lg font-bold">{itemData?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+itemData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p>
                    {itemData?.description}
                </p>


            </div>
            <div className="w-[25%] relative">
                <img  className="w-full h-45 object-cover mb-4 rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ itemData.imageId}/>
                {
                    count===0 ? (<button className="absolute bottom-2 left-27 rounded-xl text-xl font-bold text-green-500 px-8 py-2 shadow-md border border-white  bg-white" onClick={()=>handleAddItems()}>ADD</button>) :
                            (
                                <div className="flex gap-2 absolute bottom-2 left-27 rounded-xl font-bold text-xl text-green-500 px-8 py-2 shadow-md border border-white  bg-white">
                                    <button onClick={()=>handleDecrementItems()}>-</button>
                                    <span>{count}</span>                                    
                                    <button onClick={()=>handleIncrementItems()}>+</button>
                                </div>
                            )
                }
            </div>
        
        </div>
        <hr  className="mb-6 mt-2 text-gray-300"/>
        </>
    )
}