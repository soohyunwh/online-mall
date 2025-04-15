// import { combineReducers, createStore } from "redux";
// import { cartReducer } from "./reducers";

// const rootReducer = combineReducers({
//     cart: cartReducer,
// });

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
// import productsReducer from "../features/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // products: productsReducer,
    },
});

export default store;

