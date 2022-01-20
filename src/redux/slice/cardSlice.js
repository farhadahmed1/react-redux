import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload);
        }
    }
});

export const { addToCart } = createSlice.action;
export default cartSlice.reducer;