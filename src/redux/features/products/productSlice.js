import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Product 1",
    price: 50,
    category: "electronic",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    date: "2025-01-05",
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    category: "cloting",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      date: "2025-01-05",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: state.length > 0 ? state[state.length - 1].id : 1,
        ...action.payload,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
