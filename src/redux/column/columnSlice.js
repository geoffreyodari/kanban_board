import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    columns:[]
}

//show and hide add column button
const columnSlice =createSlice({
    name:'columns',
    initialState,
    reducers:{
        add:(state,action)=>{state.columns=[...state.columns,{id:action.payload.id,title:action.payload.title,tasks:[],editTitle:false,addTask:false}]},
        showEditTitleForm:(state,action)=>{state.columns=[...state.columns].map(column=>column ={...column,editTitle:column.id===action.payload.id?true:false})},
        hideEditTitleForm:(state)=>{state.columns=[...state.columns].map(column=>column ={...column,editTitle:false})},
        changeColumnTitle:(state,action)=>{state.columns=[...state.columns].map(column=>column ={...column,title:column.id===action.payload.id?action.payload.title:column.title,editTitle:false})},
        showAddTaskForm:(state,action)=>{state.columns=[...state.columns].map(column=>column ={...column,addTask:column.id===action.payload.id?true:false})},
        hideAddTaskForm:(state)=>{state.columns=[...state.columns].map(column=>column ={...column,addTask:false})},
        addTask:(state,action)=>{state.columns=[...state.columns].map(column=>column ={...column,tasks:column.id===action.payload.id?[...column.tasks,{id:action.payload.taskId,value:action.payload.value}]:[...column.tasks],addTask:false})},
    }
})

export default columnSlice.reducer
export const{ add , showEditTitleForm,hideEditTitleForm,changeColumnTitle, showAddTaskForm,hideAddTaskForm,addTask} = columnSlice.actions