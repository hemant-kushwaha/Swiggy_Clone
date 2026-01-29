import { useSelector } from "react-redux"
import { Link } from "react-router";


export default function RestaurantHeader(){

    const counter = useSelector(state=>state.cartSlice.count);
    console.log(counter);
    return(
        <>
        <div className="flex justify-between w-[85%] mt-5 mx-auto sticky top-0 z-3 p-5 rounded-2xl bg-gray-50">
            <div><img className="w-45 h-15 bg-[#ff5200] rounded-2xl p-1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="swiggy logo" /></div>
           <Link to={"/checkout"}>
            <div className=" flex text-2xl border rounded-lg px-6 items-center bg-gray-200"> Cart {`(${counter})`}</div>
           </Link>
        </div>
        </>
    )
}