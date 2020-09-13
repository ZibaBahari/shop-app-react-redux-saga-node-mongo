
import {ShoppingCart} from '../Constanse'

  const initialState:any = {
    CartSelected:[],
    showFloatCart:false
  }
  
  export default function Cart(
    state = initialState,
    action: any
  ):any{
  
    switch(action.type){
        case ShoppingCart.GET:
          const  storedData = JSON.parse(localStorage.getItem('Cart') || '{"showFloatCart":false, "CartSelected":[]}');
            return storedData;

        case ShoppingCart.ADD:
          let newCart=  state.CartSelected === undefined ? []:
          state.CartSelected;
            let firstProduct= action.data;
            
            let index = newCart.findIndex(x=>x._id === action.data._id);
           if(index !== -1 ) { 
               newCart[index].count=newCart[index].count+1
            }
           else{
            firstProduct.count = 1
            newCart= [...state.CartSelected,firstProduct]
           } 
           localStorage.setItem(
            'Cart',
            JSON.stringify({showFloatCart:state.showFloatCart, CartSelected:newCart})
            
          )
           return {showFloatCart:state.showFloatCart,CartSelected:newCart}

        case ShoppingCart.REMOVE:

            let updatedArray = state.CartSelected;
            let indexNew  = updatedArray.findIndex(x=>x._id === action.data)
            if(indexNew !== -1){
                updatedArray[indexNew].count === 1 ? updatedArray = updatedArray.filter(x=>x._id !== action.data)
                :updatedArray[indexNew].count = updatedArray[indexNew].count -1;
            }
            localStorage.setItem(
              'Cart',
              JSON.stringify({showFloatCart:state.showFloatCart,CartSelected:updatedArray})
              
            )
            return {showFloatCart:state.showFloatCart,CartSelected:updatedArray}
        case ShoppingCart.SUBMIT:
            return state
            case ShoppingCart.SHOW:
              // state.showFloatCart = state.showFloatCart ? !state.showFloatCart :false
              return { showFloatCart:!state.showFloatCart,CartSelected:state.CartSelected} 
        default : return state;
    }

  }