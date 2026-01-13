export default function DineCard ({dineData}) {
    return(
        <div className="max-w-sm flex-none rounded-xl overflow-hidden  pb-3 shadow-[0_4px_6px_rgba(0,0,0,0.09)] mb-2">
            <a href={dineData?.cta?.link}>
            <div className="relative">
                <img className="w-80 h-52 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+dineData?.info?.mediaFiles?.[0]?.url} alt="" />
                <p className="absolute bottom-2 left-2 text-xl text-white font-bold z-10">{dineData?.info?.name}</p>
                <p className="absolute bottom-2 right-2  text-xl text-white font-bold z-10">{dineData?.info?.rating.value}</p>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-[#454343] to-transparent"></div>
            </div>
            <div className="p-1">
                <div className="flex justify-between">
                    <div>{`${dineData?.info?.cuisines[0]} ~ ${dineData?.info?.cuisines[1]}`}</div>
                    <div>{dineData?.info?.costForTwo}</div>
                </div>
                 <div className="flex justify-between ">
                    <div>{dineData?.info?.locationInfo?.formattedAddress}</div>
                    <div>{dineData?.info?.locationInfo?.distanceString}</div>
                </div>
                <div className="flex justify-between bg-[rgb(27,166,114)] text-white mx-1 rounded-md p-1 text-sm font-bold">
                    <div>{dineData?.info?.vendorOffer?.info?.description}</div>                  
                    <div>+1 more</div>
                </div>     
                <div className="flex justify-between bg-[rgb(200,249,229)] text-[rgb(27,166,114)] mx-1 rounded-md p-1 text-sm font-bold mt-3">
                        {dineData?.info?.customerOffer?.info?.description}
                </div>   
                           
            </div>
            </a>
        </div>
    )
}
