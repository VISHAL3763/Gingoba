import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalPrice: 0,
  },
  reducers: {
    add(state, action) {
      state.item.push({
        id: action.payload.id,
        img: action.payload.img,
        price: action.payload.mrp,
        description: action.payload.description,
        quantity: 1,
        priceTotal: action.payload.mrp,
      });
      state.totalPrice = action.payload.mrp + state.totalPrice;
    },
    deleteItem(state, action) {
      state.item = state.item.map((val) => {
        if (val.id === action.payload) {
          state.totalPrice = state.totalPrice - val.price * val.quantity;
        }

        return val;
      });
      state.item = state.item.filter((val) => {
        return val.id !== action.payload;
      });
    },

    incQuantity(state, action) {
      const updatedItem = state.item.map((val) => {
        if (val.id === action.payload) {
          val.quantity++;
          val.priceTotal = val.quantity * val.price;
          state.totalPrice = state.totalPrice + val.price;
        }
        return val;
      });
      state.item = updatedItem;
      // console.log(state.);
    },
    decQuantity(state, action) {
      state.item = state.item.map((val) => {
        if (val.id === action.payload) {
          val.quantity--;

          val.priceTotal = val.priceTotal - val.price;
          state.totalPrice = state.totalPrice - val.price;
        }

        return val;
      });

      state.item = state.item.filter((val) => {
        return val.quantity !== 0;
      });
      console.log(state.item.length);
    },
  },
});
export default CartSlice.reducer;
export const { add, deleteItem, incQuantity, decQuantity } = CartSlice.actions;
