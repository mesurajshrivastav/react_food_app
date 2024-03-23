import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxSlice/cartSlice";
const appStore = configureStore({
    reducer: {
        cart : cartReducer
    }
});

export default appStore;