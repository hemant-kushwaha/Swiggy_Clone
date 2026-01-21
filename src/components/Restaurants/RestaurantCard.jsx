export default  function RestaurantCard ({restInfo}) {
    return(
        <div className="max-w-70 mb-2 transition-all duration-300 hover:scale-[95%] hover:shadow-lg">
          <a href={restInfo?.cta?.link}>
            <img className="w-70 h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.info?.cloudinaryImageId} alt="" />
           </a>
         <div className="w-[95%] mx-auto mt-4">
           <h2 className="font-bold text-xl">{ restInfo?.info?.name}</h2>
           <div className="flex gap-2 items-center">
            <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-md font-semibold">{restInfo?.info?.avgRating}</span>
            <span className="text-md font-semibold">{restInfo?.info?.sla?.slaString}</span>
           </div>
           <div className="text-md text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">{restInfo?.info?.cuisines.join(" ")}</div>
          </div>

        </div>
    )
}


// https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.8373&lng=80.9165&carousel=true&third_party_vendor=1