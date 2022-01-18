import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/counter/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

