import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

 
const store=configureStore({
    reducer:{

    //    userSlice.reducer defines that now the 
    // store have access of every micro 
    // reducers of userSlice into store ->
        users:userSlice,
    }
})
export default store;