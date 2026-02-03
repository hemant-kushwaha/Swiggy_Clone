import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice"
import menuReducer from "./MenuSlice"


export const store = configureStore({
    reducer:{
        cartSlice:cardReducer,
        menuSlice:menuReducer
    }
    
})