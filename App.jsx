import React from "react";
import ReactDOM from "react-dom/client"
import HomePage from "./src/pages/HomePage";
import RestaurantPage from "./src/pages/RestaurantPage";
import {  BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./src/components/Restaurants/RestaurantMenu";

function App () {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/restaurant" element={<RestaurantPage></RestaurantPage>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)