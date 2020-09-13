import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './style.css'
import {connect} from 'react-redux'
import {showShoppingCart} from '../../../../actions'

function Button(props) {

  let totalCount= props.Cart && props.Cart.CartSelected &&
   props.Cart.CartSelected.reduce(function (accumulator, currentValue) {
          
    return currentValue.count ? accumulator + (currentValue.count) : accumulator
  }, 0)

return (

<div className="CartIcon" onClick={()=>props.showShoppingCart(props.Cart.CartSelected && props.Cart.CartSelected) }>
<AddShoppingCartIcon />

<div className="roundCounter">{totalCount}</div>

</div>
    )
}
const mapStateToProps= ({Cart})=>{
    return{
      Cart
    }
  }
  const mapDispatchToProps = (dispatch)=>({
    showShoppingCart : ()=>dispatch(showShoppingCart())
  })
export default connect(mapStateToProps, mapDispatchToProps)(Button)