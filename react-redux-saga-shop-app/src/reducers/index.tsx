
import loggedReducer from './isLogged';
import product from './product';
import Cart from './shoppingCart';
import auth from './auth'
import {combineReducers} from 'redux';


const allRecucers = combineReducers({loggedReducer, product, Cart, auth});

export default allRecucers;