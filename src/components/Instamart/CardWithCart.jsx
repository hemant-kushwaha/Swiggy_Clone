import { Link } from "react-router";

const cartIcon = new URL("../../assets/cartIcon.png", import.meta.url).href;

export default function CardWithCart ({card,title,subtitle}){
    return(
        <>
        <div className="text-[#02060cbf] font-bold mb-1">{title}</div>
        {subtitle && (<span className="inline-block text-[#02060c73] font-bold p-1 rounded-lg bg-gray-200 text-sm mb-4">{subtitle}</span>)}
        <div className="flex gap-4 flex-nowrap overflow-x-auto mb-6 h-70 scrollbar-hide">
            {
                card?.map((item,i)=>{
                    return(
                        <div key={item?.displayName+i} className="flex-shrink-0 flex-col flex relative w-34 items-center p-1">
                            
                            <div >
                            <Link to={`/instamart/product/${item?.productId}`} className="flex flex-col gap-1">
                                <div className="flex flex-col items-center border-1 shadow-xs border-gray-100"><img className="w-34 h-34 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" +item?.variations?.[0]?.imageIds?.[0]} alt="" /></div>
                            <div className="text-[10px] text-[#02060c73] font-bold">9 MINS</div>
                            <div className="text-sm text-[#02060cbf] font-bold line-clamp-2">{item?.displayName}</div>
                            <div className="text-[13px] text-[#02060c99] font-semibold">{item?.variations?.[0]?.quantityDescription}</div>
                            <div className="text-xs text-[#00a16c] font-bold">{item?.variations?.[0]?.price?.offerApplied?.listingDescription || " "}</div>
                            <div className="flex gap-2">
                              <div className="text-sm text-[#02060cbf] font-bold">{"₹"+item?.variations?.[0]?.price?.mrp?.units || " "}</div>
                              <div className="text-sm line-through text-[#02060c99] font-semibold">{item?.variations?.[0]?.price?.offerPrice?.units || " "}</div>
                            </div>
                            </Link>

                            <div className="absolute top-1 right-1">
                            <img src={cartIcon} className="h-10 w-10 rounded-xl" alt="cart" />    
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
        </>
    )
}