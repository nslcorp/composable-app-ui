import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "@/types";
import {RootState} from "@/store/store";

export interface CartState  {
  userCart: Cart | null;
}

const initialState: CartState = {
  userCart: null,
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCart: (state, action) => {
      state.userCart = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.userCart;
export default cartSlice.reducer;
