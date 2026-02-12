import { Link } from "react-router"
export default  function FoodCard ({foodData}) {
    return(
        <>
            <Link to={"/collection/"+foodData?.action?.link.split("/collections/")[1].split("&sortBy")[0].replace("&", "?")}  key={foodData?.id} className="flex-shrink-0">
            <img className="h-42 w-33 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId} alt="" />
            </Link>
        </>
    )
}