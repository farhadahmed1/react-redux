import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const productFetch = createAsyncThunk(
    'product/productFetch',

    async (dispatch, getState) => {
        return await fetch("https://fakestoreapi.com/products").then(
            (res) => res.json()
        );
    }
)
// https://fakestoreapi.com/products

const productSlice = createSlice({
    name: 'products',
    initialState: {
        product: [],
        status: null,
    },
    reducers: {},
    extraReducers: {
        [productFetch.pending]: (state, action) => {
            state.status = "loading";
        },
        [productFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.product = action.payload;
        },
        [productFetch.rejected]: (state, action) => {
            state.status = "failed";
        },
    }
})
export default productSlice.reducer;