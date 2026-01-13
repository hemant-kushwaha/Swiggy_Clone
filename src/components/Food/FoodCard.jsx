export default  function FoodCard ({foodData}) {
    return(
        <>
        <a href={foodData?.action?.link}>
            <img className="h-42 w-33 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId} alt="" />

        </a>
        </>
    )
}