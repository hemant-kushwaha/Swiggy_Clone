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
import RestCollectionOption from "./src/components/Restaurants/Collection/RestCollectionOption";
import DineoutPage from "./src/pages/DineoutPage";
import DineRestaurant from "./src/components/Restaurants/Dineout/DineRestaurant"
import ScrollToTop from "./src/components/ScrollToTop/ScrollToTop"
import Instamart from './src/components/Instamart/Instamart';
import InstamartItem from "./src/components/Instamart/InstamartItem";
import ScreenGuard from "./src/components/ScreenGuard/ScreenGuard";

function App () {
    return(
        <ScreenGuard>
        <Provider store={store}>
        <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route element={<SecondaryLayout></SecondaryLayout>}>
                <Route path="/restaurant" element={<RestaurantPage></RestaurantPage>}></Route>
                <Route path="/collection/:id" element={<RestCollectionOption></RestCollectionOption>}></Route>
                <Route path="/city/lucknow/:id" element={<MenuPage></MenuPage>}></Route>
                <Route path="/city/lucknow/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
            <Route path="/dineout" element={<DineoutPage></DineoutPage>}></Route>
            <Route path="/dineout/restaurant/:id" element={<DineRestaurant></DineRestaurant>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/instamart" element={<Instamart></Instamart>}></Route>
            <Route path="/instamart/product/:id" element={<InstamartItem></InstamartItem>}></Route>

        </Routes>
        </BrowserRouter>
        </Provider>
        </ScreenGuard>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)