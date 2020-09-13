import React, {useEffect} from "react";
import { Layout, Breadcrumb } from "antd";
import {getProduct} from '../../../../actions'
import {connect} from 'react-redux';

const ListProduct = (props) => {
// const [data, setData]= useState([]);

 useEffect(()=>{

  props.getProduct();
  

 }, props.product)
  const { Content } = Layout;
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      {props.product && props.product.length ? 
    <div>list product</div>
    :
    <div>Loading</div>  
    }
   
    </Content>
  );
};
const mapStateToProps =({product})=>({
    product
})
const mapDispatchToProps =(dispatch)=>({
    getProduct : () => dispatch(getProduct())
})
export default connect(mapStateToProps,  mapDispatchToProps)(ListProduct);
