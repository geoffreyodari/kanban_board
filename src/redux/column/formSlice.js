import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    toggle:false
}

//show and hide add column button
const formSlice =createSlice({
    name:'form',
    initialState,
    reducers:{
        show:state=> {state.toggle=true},
        hide:state=> {state.toggle=false},
    }
})

export default formSlice.reducer
export const{ show , hide } = formSlice.actions