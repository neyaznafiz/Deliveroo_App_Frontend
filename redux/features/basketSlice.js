import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.dish.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as it's not in basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// get all selected items
export const selectBasketItems = (state) => state.basket.items;

// items select with id
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.dish.id === id);

// total amount of selected items
export const selectBasketTotal = (state) =>
  state.basket?.items?.reduce(
    (total, item) => (total += item.dish.price),
    0
  );

export default basketSlice.reducer;
