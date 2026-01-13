export default  function GroceryCard ({groceryData}) {
    return(
        <div className="flex-none">
        <a href={groceryData?.action?.link}>
            <img className="h-42 w-33 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + groceryData?.imageId} alt="" />
        </a>
        <h2 className="text-center font-semibold">{groceryData?.action?.text}</h2>
        </div>
    )
}