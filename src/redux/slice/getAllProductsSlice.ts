import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  images: string[];
}

interface ProductsState {
  loading: boolean;
  data: Product[];
  error: boolean;
}

const initialState: ProductsState = {
  loading: false,
  data: [],
  error: false
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async ({ skip, sort }: { skip: number; sort: string }) => {
    let typeSort = localStorage.getItem("sortType") || "";
    const res = await axios.get(
      `https://dummyjson.com/products?limit=12&skip=${skip}&${sort || typeSort}`
    );
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export const selectedAllProducts = (state: { products: ProductsState }) =>
  state.products.data;

export default productsSlice.reducer;
