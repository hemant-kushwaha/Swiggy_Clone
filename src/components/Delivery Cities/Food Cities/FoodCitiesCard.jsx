export default  function FoodCitiesCard ({citydata}) {
    return(
        <a className="" href={citydata?.link}>
            <div className=" rounded-lg w-full sm:w-58 min-h-18 text-center flex items-center justify-center font-semibold border border-gray-300 p-4 text-sm">{citydata?.text}</div>        
        </a>
    )
}
