export default  function RestaurantListCard ({data}) {
    return(
        <a className="" href={data?.link}>
            <div className="rounded-lg  w-58 h-18 text-center flex items-center justify-center font-semibold border border-gray-300 p-4 text-sm">{data?.text}</div>        
        </a>
    )
}