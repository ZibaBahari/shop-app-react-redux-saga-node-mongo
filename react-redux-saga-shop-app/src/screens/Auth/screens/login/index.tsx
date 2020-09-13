import React, {useReducer} from "react";
import { Form } from "antd";
import InputComponent from "../../../../components/InputComponent";
import { Layout, Breadcrumb } from "antd";
import ButtonComponent from "../../../../components/ButtonComponent";
// import {logIn} from '../../../../actions'
// import {connect} from 'react-redux'
import {auth} from '../../../../Routes/middleware/checkAuth'
import { useHistory } from 'react-router-dom'
import logInApi from '../../../../api/login'

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
 Email:null,
 Password:null,

}
const ChangeReducer=( state, action)=>{
  switch(action.type){
    case "setEmail":
      return{...state, Email: action.payload}
      case "setPassword":
        return{...state, Password: action.payload}
       
  
  }
}
const LoginComponent = (props) => {
  const[stateReducer, dispatchReducer] = useReducer(ChangeReducer, initialize);
  const getEmail =(value) =>{
    dispatchReducer({type:"setEmail", payload:value})
  }
  const getPassword =(value) =>{
   
    dispatchReducer({type:"setPassword", payload:value})
  }
  
  const history = useHistory()
  const checkUserData =()=>{
   logInApi(stateReducer).then((response)=>{
    
      localStorage.setItem(
        'userData',
        JSON.stringify({ userId: response.data.user._id, token: response.data.token})
        
      )
      
    auth() && history.push('/')

   })
   

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
        validateMessages={validateMessages}
      >

        <InputComponent onChange={getEmail} name="Email" label="Email"/>
        <InputComponent onChange={getPassword} name="Password" label="Password"/>
        <ButtonComponent layout={layout} onClick={checkUserData}/> 

      </Form>
    </Content> 


  );
};
// const mapStateToProps =({auth})=>({
//     auth
//   })
// const mapDispatchToProps =(dispatch)=>({
//   logIn: (data) => dispatch(logIn(data))
// })
export default LoginComponent;
