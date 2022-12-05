import { legacy_createStore as createStore } from "redux";
import columnReducer from "./Column/columnReducer";

const store = createStore(columnReducer);

export default store;