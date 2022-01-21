import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './slice/productApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productReducer } from './slice/productSlice';



export const store = configureStore({
  reducer: {
    product: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
