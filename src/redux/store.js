import { configureStore } from "@reduxjs/toolkit";
import formReducer from './column/formSlice'
import columnsReducer from './column/columnSlice'

const store = configureStore({
    reducer:{
       form:formReducer,
       columns:columnsReducer
    } 
})

export default store;