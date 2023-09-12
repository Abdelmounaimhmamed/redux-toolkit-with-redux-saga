import { createSlice  } from "@reduxjs/toolkit";


const initialState = {
    ProductList : [],
    isLoading: false,
    error : false
}


const ProductSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        FetchDataFromApi : (state ) => {
            state.isLoading = true;
        },
        GetDataFromApi : (state , action) => {
            state.ProductList = action.payload;
            state.isLoading = false;
        },
        DataFetchingFailure : (state ,_) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});


export const {FetchDataFromApi, GetDataFromApi, DataFetchingFailure} = ProductSlice.actions;
export default ProductSlice.reducer;