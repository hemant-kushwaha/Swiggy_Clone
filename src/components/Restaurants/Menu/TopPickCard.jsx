import {addItems,IncrementItems,DecrementItems} from "../../../store/CardSlice"
import { useDispatch, useSelector } from "react-redux";

export default function TopPickCard ({infoData}) {
    
    const dispatch = useDispatch();

    const items = useSelector(state => state.cartSlice.items)

    const element = items.find(item =>item.id === infoData.id);
    const count = element?element.quantity : 0;


    //Add items logic
    function handleAddItems (){
        dispatch(addItems(infoData));        
    }

    function handleIncrementItems (){
        dispatch(IncrementItems(infoData));        
    }

    function handleDecrementItems (){
        dispatch(DecrementItems(infoData));        
    }

    console.log(infoData)
    const finalPrice = infoData?.price ?? infoData?.finalPrice ?? infoData?.defaultPrice;

    return(
        <>
        <div className="relative shrink-0">
            <img  className="" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/PrDiGiftHamper"}></img>
            <div className="absolute bottom-3 left-4  right-4 flex justify-between text-white">
                <div>
                    <div>{(infoData?.price || infoData?.finalPrice) && (<div className="line-through">₹{infoData.defaultPrice / 100}</div>)}</div>
                    {/* <div className="line-through">{"₹"+(infoData?.defaultPrice ?? "")/100}</div> */}
                    <div>{"₹" + ((infoData?.price ?? infoData?.finalPrice ?? infoData?.defaultPrice) / 100)}</div>
                </div>
                <div>

                    {
                    count===0 ? (<button className=" rounded-xl text-xl font-bold text-green-500 w-28 h-12   shadow-md border border-white  bg-white" onClick={()=>handleAddItems()}>ADD</button>) :
                            (
                                <div className="flex  justify-center items-center gap-3 rounded-xl font-bold text-xl text-green-500 w-28 h-12 shadow-md border border-white  bg-white">
                                    <button onClick={()=>handleDecrementItems()}>-</button>
                                    <span>{count}</span>                                    
                                    <button onClick={()=>handleIncrementItems()}>+</button>
                                </div>
                            )
                }
            </div>
            </div>
        </div>
        </>
    )
}