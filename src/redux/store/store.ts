import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/getAllProductsSlice";
import bascketSlice from "../slice/bascketSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    basket: bascketSlice
  }
});
