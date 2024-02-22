import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cart } from "@/types";
import { RootState } from "@/store/store";
import { getCart } from "@/api/cart/getCart";

export const fetchCart = createAsyncThunk(
  "cart/getCart",
  async (cartId: string, thunkAPI) => {
    try {
      const response = await getCart(cartId);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export interface CartState {
  loading: boolean;
  data: Cart;
  error: string | undefined;
}

const initialState: CartState = {
  loading: true,
  data: { lineItems: [] },
  error: undefined,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCart: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchCart.pending, (state) => {
    //   state.loading = true;
    // });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
