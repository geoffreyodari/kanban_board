import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    columns:[]
}

//show and hide add column button
const columnSlice =createSlice({
    name:'columns',
    initialState,
    reducers:{
        add:(state,action)=>{state.columns=[...state.columns,{id:action.payload.id,title:action.payload.title,tasks:[],editTitle:false,addTask:false}]}
            }
})

export default columnSlice.reducer
export const{ add } = columnSlice.actions