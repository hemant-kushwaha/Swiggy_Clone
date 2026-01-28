import React from "react";
import ReactDOM from "react-dom/client"
import HomePage from "./src/pages/HomePage";
import RestaurantPage from "./src/pages/RestaurantPage";
import {  BrowserRouter, Routes, Route } from "react-router";
import MenuPage from "./src/pages/MenuPage";

function App () {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/restaurant" element={<RestaurantPage></RestaurantPage>}></Route>
            <Route path="/city/lucknow/:id" element={<MenuPage></MenuPage>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)