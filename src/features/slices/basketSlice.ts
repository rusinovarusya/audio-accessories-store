import { createSlice } from '@reduxjs/toolkit';

export interface IBasketState {
  list: { productId: string, count: number }[];
}

const initialState: IBasketState = {
  list: []
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      const productId = action.payload.productId;
      const count = action.payload.count;

      if (state.list.find((item) => item.productId === productId)) {
        state.list.map((item) => item.productId === productId ? { productId: item.productId, count: item.count += 1 } : item);
      } else {
        state.list.push({ productId, count });
      }
    },
    removeProductFromBasket: (state, action) => {
      const productId = action.payload.productId;
      state.list.filter((item) => item.productId !== productId);
    },
    increaseProductCountInBasket: (state, action) => {
      const productId = action.payload.productId;
      state.list.map((item) => item.productId === productId ? { productId: item.productId, count: item.count += 1 } : item);
    },
    decreaseProductCountInBasket: (state, action) => {
      const productId = action.payload.productId;
      state.list.map((item) => item.productId === productId ? { productId: item.productId, count: item.count -= 1 } : item).filter((item) => item.count);
    }
  }
});

export const { addProductToBasket, removeProductFromBasket, increaseProductCountInBasket, decreaseProductCountInBasket } = basketSlice.actions;

export const { reducer: basketReducer } = basketSlice;
