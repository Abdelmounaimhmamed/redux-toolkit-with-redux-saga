import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import ProductReducer from "./slices/ProductSlice";
import productSaga from "./sagas/ProductSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        products: ProductReducer
    },
    middleware : [sagaMiddleware]
});


sagaMiddleware.run(productSaga);

export default store;

