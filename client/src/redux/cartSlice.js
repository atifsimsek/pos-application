import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cart"))?.cartItems || [],
    total: JSON.parse(localStorage.getItem("cart"))?.total || 0,
    tax: 18,
    search: "",
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
    deleteProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;
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
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  addProduct,
  decraseProduct,
  incraseProduct,
  clearCart,
  setSearch,
} = cartSlice.actions;
export default cartSlice.reducer;
