export default function ItemCard ({itemData}){
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
            <div className="w-[30%] relative">
                <img  className="w-full h-45 object-cover mb-4 rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ itemData.imageId}/>
                <button className="absolute bottom-2 left-38 rounded-xl font-bold text-green-500 px-6 py-2 shadow-md border border-white  bg-white">ADD</button>
            </div>
        
        </div>
        <hr  className="mb-6 mt-2 text-gray-300"/>
        </>
    )
}