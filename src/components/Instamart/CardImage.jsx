export default function CardImage ({card,title}){
    return(
        <>
        
        <div className="mb-4 text-[#02060cbf] font-bold">{title}</div>
        <div className="flex gap-4 flex-nowrap overflow-x-auto mb-4 scrollbar-hide">
            {
                card?.map((item)=>{
                    return(
                        
                        <div key={item?.id} className="flex-shrink-0 w-30">
                            <a href={item?.action?.link.replace("swiggy://stores/", "https://www.swiggy.com/")}>
                              <img  className="w-28 h-34" src={"https://media-assets.swiggy.com/swiggy/image/upload/" +item?.imageId} alt="" />
                              <div className="mt-3 text-xs text-center text-[#02060cbf] font-bold">{item?.description}</div>
                            </a>
                        </div>
                    )
                })
            }
        </div>

        </>
    )
}