import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {rejectWithValue} from"


const menuDataFetch = createAsyncThunk( 'menu/fetch',
    async (args,thunkAPI)=>{
        try{
            const proxyServer= "https://cors-anywhere-upqq.onrender.com/"
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=${args}`
            const response = await fetch(proxyServer+swiggyAPI,{ headers: {
                      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36",
                      "sec-ch-ua-platform": "\"Android\"",
                      "sec-ch-ua-mobile": "?1",
        
    }
                }
            );
            
            const data = await response.json();        
            return data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error)
        }
})

const menuData = createSlice({
    name:"menuSlice", 
    initialState:{data:[],loading:false, error:null, currentRequestId: null},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(menuDataFetch.pending,(state,action)=>{
            state.currentRequestId = action.meta.requestId;
            state.loading=true;
            state.error = null;
        })
        .addCase(menuDataFetch.fulfilled,(state,action)=>{
            if (state.currentRequestId !== action.meta.requestId) return;
            state.data=action.payload;
            state.loading = false;
        })
        .addCase(menuDataFetch.rejected,(state,action)=>{
            if (state.currentRequestId !== action.meta.requestId) return;
            state.error=action.payload;
            state.loading = false;
        })
    }
})

export default menuData.reducer;

export {menuDataFetch};


// https://www.swiggy.com/city/lucknow/mughal-zaika-aliganj-aliganj-rest808392?restaurant_id=808392&source=collection&query=Biryani
// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=${args}`
