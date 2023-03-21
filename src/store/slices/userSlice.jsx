import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"Harshit",
    initialState:[],
    reducers:{
        // microreducers ->
        // addUser,removeUser,DltUSer are actions 
        addUser(state,action){
            state.push(action.payload);
         },
        removeUser(state,action){
            state.pop(action.payload);
         },
        removeAllUser(state,action){ 
            return [];
        },
    }
})
console.log(userSlice.actions) 
export default userSlice.reducer;


// exporting addUser from actions ->
export const {addUser}=userSlice.actions;
export const {removeUser}=userSlice.actions;
export const {removeAllUser}=userSlice.actions;

