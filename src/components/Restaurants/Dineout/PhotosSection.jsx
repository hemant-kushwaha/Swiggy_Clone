export default function PhotosSection ({restaurantData}) {
    return(
        < div className="w-full lg:w-[70%]">    
        <button className="text-md font-[500] mb-2 mt-1 border-1 bg-gray-200 rounded-3xl px-4 py-1">PHOTOS</button>    
        <div className=" flex flex-wrap gap-4 mt-4">
            {
                restaurantData?.info?.mediaFiles?.map((item)=>{
                    return(
                        <div key={item?.id}>
                            
                            <img className="w-68 h-73 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item?.url} alt="photo" />
                        </div>

                        
                    )
                })
            }
        </div>
        </div>
    )
}
