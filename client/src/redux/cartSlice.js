import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    tax: 18,
  },
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.cartItems.find(
        (product) => product._id === action.payload._id
      );

      if (findProduct) {
        findProduct.quantity++;
      } else {
        state.cartItems.push(action.payload);
      }
      state.total += action.payload.price;
    },
    incraseProduct: (state, action) => {
      const findProduct = state.cartItems.find(
        (product) => product._id === action.payload._id
      );

      findProduct.quantity++;
      state.total += action.payload.price;
    },
    decraseProduct: (state, action) => {
      const findProduct = state.cartItems.find(
        (product) => product._id === action.payload._id
      );

      if (findProduct.quantity > 1) {
        findProduct.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export const { addProduct, decraseProduct, incraseProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
