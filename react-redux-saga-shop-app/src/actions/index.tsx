
import {ShoppingCart, Product, Auth} from '../Constanse';

export const signUp = (data) =>{
    console.log(data)
    return{
        type: Auth.ADD,
        data
    }
}
export const  logIn = (data) =>{
    return{
        type: Auth.GET,
        data
    }
}
export const checkLogin=()=>{
    return{
        type: Auth.CHECK,
        
    }
}
export const setAuth=(data)=>{
    return{
        type:Auth.SET,
        data
    }
}
export const getProduct = () =>{
    return{
        type: Product.GET
    }
}
export const recieveProduct = (product) =>{
    return{
        type: Product.RECIEVE,
        payload:product.data.result
    }
}
export const addproduct = (data)=>{
    return{
        type: Product.ADD,
        data
    }
}

export const addShopingCart = (data)=>{
    return{
        type:ShoppingCart.ADD,
        data
    }
}
export const getShopingCart = ()=>{
    return{
        type:ShoppingCart.GET
       
    }
}
export const removeShopingCart = (data)=>{
    
    return{
        type:ShoppingCart.REMOVE,
        data
    }
}
export const submitShoppingCart = (data)=>{
    return{
        type:ShoppingCart.SUBMIT,
        data
    }
}
export const showShoppingCart = ()=>{
    console.log('rrrr')
    return{
        type:ShoppingCart.SHOW,
        
    }
}