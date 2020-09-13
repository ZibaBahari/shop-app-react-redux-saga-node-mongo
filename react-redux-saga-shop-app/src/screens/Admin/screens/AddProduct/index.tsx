import React, {useReducer} from "react";
import { Form } from "antd";
import InputComponent from "../../../../components/InputComponent";
import TextArea from "../../../../components/TextArea";
import UploadFile from "../../../../components/UploadFile";
import ButtonComponent from "../../../../components/ButtonComponent";
import { Layout, Breadcrumb } from "antd";
import {addproduct} from '../../../../actions'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const initialize = {
  Name:null,
  Price:null,
  Description:null,
  Image:[], 
  Preview:[]
}
const ChangeReducer=( state, action)=>{
  switch(action.type){
    case "setName":
      return{...state, Name: action.payload}
      case "setPrice":
        return{...state, Price: action.payload}
    case "setDescription":
      return{...state, Description: action.payload}
    case "setFile":
      return{...state, Image:[...state.Image, action.payload.file], Preview:[...state.Preview, action.payload.reader]}
  
  }
}
const AddProduct = (props) => {
  const[stateReducer, dispatchReducer] = useReducer(ChangeReducer, initialize);
  // const onFinish = (values) => {
  //   console.log(values);
  // };
  const getName =(value) =>{
    dispatchReducer({type:"setName", payload:value})
  }
  const getPrice =(value) =>{
   
    dispatchReducer({type:"setPrice", payload:value})
  }
  const getDescription =(value)=>{
   dispatchReducer({type:"setDescription", payload:value})
  }
  const getFile=(reader, file)=>{
    dispatchReducer({type:"setFile", payload:{reader, file}})
  }
  const addProductData=()=>{
    props.addproduct(stateReducer)
  }
  const { Content } = Layout;
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <Form
        {...layout}
        name="nest-messages"
        // onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <InputComponent onChange={getName} name="Name" label="Name"/>
        <InputComponent onChange={getPrice} name="Price" label="Price"/>
        <TextArea onChange={getDescription}/>
        <UploadFile layout={layout} onChange={getFile}/>
        <ButtonComponent layout={layout} onClick={addProductData}/> 
      </Form>
    </Content>
  );
};
const mapStateToProps =({product})=>({
  product
})
const mapDispatchToProps =(dispatch)=>({
  addproduct : (data) => dispatch(addproduct(data))
})
export default withRouter(connect(mapStateToProps,  mapDispatchToProps)(AddProduct));
