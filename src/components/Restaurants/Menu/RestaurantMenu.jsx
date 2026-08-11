import { useParams ,Link } from "react-router";
import { useState ,useEffect} from "react";
import MenuCard from "./MenuCard";
import {menuDataFetch} from "../../../store/MenuSlice"
import { useDispatch, useSelector } from "react-redux";
import ShimmerMenu from "./ShimmerMenu";
import MenuFooter from "./MenuFooter";
import TopPickCard from "./TopPickCard";

export default function RestaurantMenu (){
    let {id} = useParams();
    const[RestData, setRestData] = useState([])
    const [selected,setSelected] = useState(null)

    const dispatch = useDispatch();
    const {data,loading,error}=useSelector((state)=>state.menuSlice)
    const Data = data;

      useEffect(()=>{
        dispatch(menuDataFetch(id));              
    
    },[id])

    useEffect(()=>{
        
        setRestData(Data) 
    },[Data])

        const tempData = RestData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterData = tempData?.filter(  (items) => items?.card?.card?.title &&  !items?.card?.card?.carousel);
        console.log(tempData?.[1]?.card?.card?.carousel?.[0]?.dish?.info?.id)
    // console.log(RestData)
        if (loading) {
            return <ShimmerMenu></ShimmerMenu>;
        }

        if (error) {
            return (
                <div className="text-center mt-20 text-red-500">
                     Something went wrong
                </div>
                 );
        }

    return(
        <div> 
                
            <div className= "w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 mt-5">
                <div className="flex text-[12px] text-gray-500 ">                                   
                    <Link to={"/"}>  <div>{"Home / "}</div></Link>
                    <div>{" Lucknow /"}</div>
                    <div className="text-black font-semibold">{Data?.data?.cards[0].card?.card?.text}</div>
                </div>

                <h1 className="text-black font-bold text-3xl mt-8 mb-8 ml-3">{RestData?.data?.cards[0]?.card?.card?.text} </h1>

                <div className="">
                    <div className="flex gap-3 border-b-1 border-gray-300  mb-5 text-lg font-semibold ml-6">
                        <div className="relative mb-2">
                            <div className="mb-3">{RestData?.data?.cards[1].card?.card?.tabs[0]?.title}</div>
                            <div className=" absolute   w-full rounded-lg border-[#FF5200] border-t-8 pt-2"></div>
                        </div>
                        
                        <a href={RestData?.data?.cards[1].card?.card?.tabs[1]?.cta}>
                        <div>{RestData?.data?.cards[1].card?.card?.tabs[1]?.title}</div>
                        </a>                        
                    </div>
                    <div className=" ml-3 border-b-12 border-x-12  border-[rgba(2,6,12,0.15)] p-2 rounded-xl m-2 ">
                        <div className="flex gap-1 items-center text-md font-semibold">
                            <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" ><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs>
                            </svg></span>
                            <span>{RestData?.data?.cards[2].card?.card?.info?.avgRatingString}</span> 
                            <span>{"("+RestData?.data?.cards[2].card?.card?.info?.totalRatingsString+")"}</span>
                            <span className="text-xl text-center">~</span>
                            <span className="">{""+RestData?.data?.cards[2].card?.card?.info?.costForTwoMessage}</span>
                        </div>
                        <div className="text-sm text-[#FF5200] font-bold mb-2 mt-1" >{RestData?.data?.cards[2].card?.card?.info?.cuisines[0]}</div>
                        <div>
                            <div className="flex gap-2 text-sm font-semibold">
                                <div>Outlet:</div>
                                <div>{RestData?.data?.cards[2].card?.card?.info?.locality}</div>
                                <div className="text-[#FF5200]">▾</div>
                            </div>
                            ┆
                            <div className="text-xs font-semibold">{RestData?.data?.cards[2].card?.card?.info?.sla?.slaString}</div>
                        </div>
                    </div>
                </div>

                {/* //Deals For You  Div*/}
                <div>
                    <div className="mb-15 mt-15 w-[90%] ml-10"> 
                        <div className="text-xl font-bold mb-5">Deals for you</div>
                        <div className="flex flex-nowrap overflow-x-auto gap-5">
                            {
                                RestData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers.map((value,index)=>{
                                    return(
                                        
                                        <div key={index} className="flex flex-nowrap border-2 gap-2 flex-shrink-0 rounded-3xl border-gray-300 min-w-[340px] ml-5 p-3 mb-3">
                                            <img height="50px" width="50px" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.offerLogo}`}></img>
                                            <div>
                                                <div className="text-md font-bold">{value?.info?.header}</div>
                                                <div className="text-md font-bold text-gray-500">{"primaryDescription" in value?.info ? value?.info?.primaryDescription : value?.info?.description}</div>
                                            </div>

                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Menu Heading */}
                <div className="flex justify-center items-center gap-1 text-sm mb-6">
                    <div>୨ৎ─</div>
                    <div>MENU</div>
                    <div>─୨ৎ</div>
                </div>
                
                <Link to={`/city/lucknow/${id}/search`}>
                <p className="w-full text-center py-4 rounded-2xl bg-gray-200 text-xl text-gray-600 font-semibold">Search For Dishes</p>
                </Link>
            </div> 
            {/* Veg-Nonveg */}
            <div className= "w-full max-w-4xl px-4 sm:px-6 mx-auto mt-10 sm:mt-20 mb-10">
               <button className={`text-md px-2 py-1 border-gray-400 mr-2 rounded-lg border ${selected === "veg"? "bg-[#aae3b0]" :"bg-[#ebf0ef]" }`} onClick={()=> setSelected(selected === "veg"?null:"veg")} >🥬 Veg</button>
               <button className={`text-md px-2 py-1 border-gray-400 rounded-lg border ${selected === "Nonveg"? "bg-[#f2ccc2]":"bg-[#ebf0ef]" }`} onClick={()=> setSelected(selected === "Nonveg"?null:"Nonveg")}>🍗 Non Veg</button>               
            </div>   

             {/* Top Picks carousel */}
            <div className="w-[60%] mt-20 mb-10 mx-auto">
                <hr className="text-gray-300 mb-10"/>           
                <h1 className="text-2xl font-bold mb-4 block">Top Picks</h1>
            <div className=" flex flex-nowrap overflow-x-auto gap-5 mb-5 flex-shrink-0">               
            {
                tempData?.[1]?.card?.card?.carousel?.map((item,i)=><TopPickCard key={item?.dish?.info?.id} infoData={item?.dish?.info} ></TopPickCard>)                
            }
            </div>
            <div className="h-4 bg-gray-200 rounded mb-1"></div>
            </div>           

            <div className="w-[60%] mx-auto">
            {
                
                filterData?.map((menuItems,i)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
            }
            </div>

            {/* Footer */}
           <div className="w-[60%] mx-auto">
             <MenuFooter name={RestData?.data?.cards[0]?.card?.card?.text} outlet={RestData?.data?.cards[2].card?.card?.info?.locality} address={RestData?.data?.cards[2].card?.card?.info?.labels[1]?.message}></MenuFooter>
           </div>


        </div>
    )
}



// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=59260&submitAction=ENTER
// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=808392&submitAction=ENTER --> use it
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=808392&catalog_qa=undefined&query=Biryani&submitAction=ENTER
