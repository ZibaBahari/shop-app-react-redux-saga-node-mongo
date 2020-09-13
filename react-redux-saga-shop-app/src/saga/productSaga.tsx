import { takeEvery, call, put}  from 'redux-saga/effects';
import {recieveProduct} from '../actions';
import {addProductApi} from '../api/addProduct';
import {getProductApi} from '../api/getProduct';
import {submitCartApi} from '../api/submitCart';
import {Product, ShoppingCart} from '../Constanse'

function* getProductData(){
    try{
       const product = 
        yield call(getProductApi);
        yield put(recieveProduct(product))

    }catch(e){

    }
}

function* addProductData(action){
    try{
   
        yield call(addProductApi ,action.data)

    }catch(e){

    }
}
function* submitCartData(action){
    try{
           yield call(submitCartApi, action.data)
    }catch(e){

    }
}

export const productSaga=[
    takeEvery(Product.GET, getProductData),
    takeEvery(Product.ADD, addProductData),
    takeEvery(ShoppingCart.SUBMIT, submitCartData)
]

