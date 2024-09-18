import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

export interface BasketState {
  basket: any;
}

const initialState: BasketState = {
  basket: []
};
export const bascketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      const productIndex = state.basket.findIndex(
        (product: any) => product.id === action.payload.id
      );

      console.log(action.payload.quantity);

      if (productIndex !== -1) {
        state.basket[productIndex].quantity += action.payload.quantity || 1;
      } else {
        state.basket = [...state.basket, { ...action.payload }];
      }
      console.log(state.basket);
    }
  }
});

export const { addProductToBasket } = bascketSlice.actions;
export const selectedBasketProduct = (state: RootState) => state.basket.basket;
export default bascketSlice.reducer;
