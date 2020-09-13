import  React, {useEffect} from "react";
// UI Framework and Global Components
import { Row} from "antd";
// Utilities and hooks
import cs from "classnames";
// Styles
import  "./style.css";
import Card from './components/Card'
import Button from './components/Button'
import FloatCart from './components/FloatCart'
import {getProduct} from '../../actions'
import { connect } from "react-redux"


const Dashboard=(props) => {
	const initialState = {
		showFloatCart:false,
		Product :[
		  {
			  id:1,
			  Name:"White DGK Script Tee",
			  Price:14,
			  Image:"/img/White-DGK-Script-Tee.jpg"
		  },
		  {
			  id:2,
			  Name:"Crazy Monkey Black T-Shirt",
			  Price:10,
			  Image:"/img/Crazy-Monkey-Black-T-Shirt.jpg"
		  },
		  {
			  id:3,
			  Name:"Tso 3D Short Sleeve T-Shirt A",
			  Price:11,
			  Image:"/img/Tso-3D-Short-Sleeve-T-Shirt-A.jpg" 
		  },
		  {
			  id:4,
			  Name:"Wine Skul T-Shirt B",
			  Price:17,
			  Image:"/img/Wine-Skul-T-Shirt.jpg" 
		  }
	  ]
		};

		useEffect(()=>{
			props.getProduct();
		}, props.product)
	return (
		<div className={cs("container")}>
	
					<Row gutter={20}>
						
					<div className="container">
         
		 <div className="products">
	     {props.product.map((item,  index)=>(
               <Card key ={index} product={item}/>
           ))}
		 </div>
			<Button/>
			<FloatCart product={initialState.Product}/>
		 
			</div>
					
					</Row>
				
		
		</div>
	);
};

const mapStateToProps =({product})=>({
    product
})
const mapDispatchToProps =(dispatch)=>({
    getProduct : () => dispatch(getProduct())
})
export default connect(mapStateToProps,  mapDispatchToProps)(Dashboard)
