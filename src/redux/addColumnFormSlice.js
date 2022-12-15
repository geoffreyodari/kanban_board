import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    displayForm:false
}

//show and hide add column button
const addColumnFormSlice =createSlice({
    name:'addColumnFormSlice',
    initialState,
    reducers:{
        show:state=>state.displayForm=!state.displayForm?state.displayForm:!state.displayForm
    }
})

export default addColumnFormSlice.reducer
export const{ show } = addColumnFormSlice.actions