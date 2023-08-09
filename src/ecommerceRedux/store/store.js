import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import todoSlice from "../features/todoSlice";
import ecommerceReducer from "../../ecommerceRedux/features/ecommerceSlice";

export default configureStore({
    reducer: {
        // todo: todoSlice
        ecommerce: ecommerceReducer,
    },
    middleware: [thunk]
})