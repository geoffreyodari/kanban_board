import { legacy_createStore as createStore , applyMiddleware} from "redux";
import columnReducer from "./Column/columnReducer";
import {logger} from 'redux-logger'


const store = createStore(columnReducer,applyMiddleware(logger));

export default store;