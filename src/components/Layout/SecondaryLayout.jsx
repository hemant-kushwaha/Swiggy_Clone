import { Outlet } from "react-router"
import RestaurantHeader from "../Restaurants/RestaurantHeader"

export default function SecondaryLayout () {
    return(
        <>
        <RestaurantHeader></RestaurantHeader>
        <Outlet></Outlet>
        </>
    )
}