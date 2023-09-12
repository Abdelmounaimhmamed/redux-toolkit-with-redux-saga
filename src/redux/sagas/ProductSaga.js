import  {call , takeEvery , put } from "redux-saga/effects";
import { GetDataFromApi } from "../slices/ProductSlice";




function* workFetchDataFromApi(){
    console.log("sata");
    const products = yield call(() =>  fetch('https://api.thecatapi.com/v1/breeds'));
    const formatedProducts = yield  products.json();
    console.log(products);
    yield put(GetDataFromApi(formatedProducts));
}


function*  productSaga(){
    yield takeEvery('products/FetchDataFromApi', workFetchDataFromApi)
}


export default productSaga;