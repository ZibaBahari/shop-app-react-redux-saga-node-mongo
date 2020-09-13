import React, { useEffect } from 'react';
import './style.css'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {submitShoppingCart, addShopingCart, removeShopingCart, getShopingCart,showShoppingCart} from '../../../../actions'
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';


 function FloatCart(props) {

  useEffect(()=>{
    props.getShopingCart()
  },[getShopingCart])

      const RemoveFromCart=(id)=>{
         props.removeShopingCart(id)
        }


      const AddToCart=(product)=>{
        props.addShopingCart(product)

      }


      let total =props.Cart&&props.Cart.CartSelected&& props.Cart.CartSelected.reduce(function (accumulator, currentValue) {
          
      return currentValue.count ? accumulator + (currentValue.count* currentValue.Price) : accumulator
    }, 0)
     
  let totalCount= props.Cart &&props.Cart.CartSelected&& props.Cart.CartSelected.reduce(function (accumulator, currentValue) {
          
    return currentValue.count ? accumulator + (currentValue.count) : accumulator
  }, 0)

    return (
<div>
<div className= {props.Cart.showFloatCart ? "float-cart righ-floet" :"float-cart"}

>
<div className="cart"  
>  <h2>Cart</h2>
  <AddShoppingCartIcon/>
  <div >{totalCount}</div>
  </div>


  <div className="selectProduct">

    {props.Cart.CartSelected&& props.Cart.CartSelected.map((item)=>(
      
<div style={{display:"flex", marginBottom:"20px"}}>
      <img src={"http://127.0.0.1:9000/"+item.Image}/>
      <div className="desc">
      <span>{item.Name}</span>
    <span className="quantity">Quantity {item.count}</span>
      </div>
      <div className="count">
          <span>{item.Price} $</span>
          <div className="counter">
          <button  onClick={()=>AddToCart(item)}>+</button>
          <button onClick={()=>RemoveFromCart(item._id)}>-</button>
          </div>
      </div>
      </div>
    ))
}
      <div className="bottom">
<div className="total"><span>total:</span><span>{total } $</span></div>
      <div className="checkout" onClick={()=>props.submitShoppingCart(props.Cart.CartSelected&& props.Cart.CartSelected)}>Check out</div>
      </div>
  </div>
</div>
<div className="CartIcon" style={{ right: props.Cart.showFloatCart && 450 , display:props.Cart.showFloatCart ?
   "flex" : "none" }} >
<ClearIcon  onClick={()=>props.showShoppingCart(props.Cart.CartSelected && props.Cart.CartSelected) }/>

</div>
<ClearIcon/>
</div>
    )
}
const mapStateToProps= ({Cart, product})=>{
  return{
    product, Cart
  }
}
const mapDispatchToProps = (dispatch)=>({
  submitShoppingCart : (Cart)=>dispatch(submitShoppingCart(Cart)),
  addShopingCart:(product) => dispatch(addShopingCart(product)),
  removeShopingCart:(id)=>dispatch(removeShopingCart(id)),
  getShopingCart:()=>dispatch(getShopingCart()),
  showShoppingCart:()=>dispatch(showShoppingCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(FloatCart)