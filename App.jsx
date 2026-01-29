import React from "react";
import ReactDOM from "react-dom/client"
import HomePage from "./src/pages/HomePage";
import RestaurantPage from "./src/pages/RestaurantPage";
import {  BrowserRouter, Routes, Route } from "react-router";
import MenuPage from "./src/pages/MenuPage";
import SearchFood from "./src/components/Restaurants/Menu/SearchFood";
import SecondaryLayout from "./src/components/Layout/SecondaryLayout";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import Checkout from "./src/components/Checkout/Checkout";

function App () {
    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route element={<SecondaryLayout></SecondaryLayout>}>
                <Route path="/restaurant" element={<RestaurantPage></RestaurantPage>}></Route>
                <Route path="/city/lucknow/:id" element={<MenuPage></MenuPage>}></Route>
                <Route path="/city/lucknow/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)