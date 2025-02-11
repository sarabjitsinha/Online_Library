import { createSlice } from "@reduxjs/toolkit";
import { mockdata } from "./Mockdata";


const bookSlice=createSlice({
    name:'book',
    initialState:{
        items:[...mockdata]
    },
    reducers:{
        additem:(state,action)=>
           { state.items.push(action.payload)},
        // eslint-disable-next-line no-unused-vars
        removeitem:(state,action)=>
            {state.items.pop()}
    }
})


export const {additem,removeitem}=bookSlice.actions

export default bookSlice.reducer;