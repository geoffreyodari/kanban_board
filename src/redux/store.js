import { configureStore } from "@reduxjs/toolkit";
import formReducer from './column/formSlice'
import columnsReducer from './column/columnSlice'
import logger from "redux-logger";

const store = configureStore({
    reducer:{
       form:formReducer,
       columns:columnsReducer
    },
    middleware: [logger]
})
export default store;