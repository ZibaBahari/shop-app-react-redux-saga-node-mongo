import React, {useReducer} from "react";
import { Form } from "antd";
import InputComponent from "../../../../components/InputComponent";
import { Layout, Breadcrumb } from "antd";
import ButtonComponent from "../../../../components/ButtonComponent";
import {signUp} from '../../../../actions'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom'

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
 FullName:null
}
const ChangeReducer=( state, action)=>{
  switch(action.type){
    case "setEmail":
      return{...state, Email: action.payload}
      case "setPassword":
        return{...state, Password: action.payload}
        case "setFullName":
        return{...state, FullName: action.payload}
  
  }
}
const SignUpComponent = (props) => {
  const[stateReducer, dispatchReducer] = useReducer(ChangeReducer, initialize);
  const getEmail =(value) =>{
    dispatchReducer({type:"setEmail", payload:value})
  }
  const getPassword =(value) =>{
   
    dispatchReducer({type:"setPassword", payload:value})
  }
  const getFullName = (value)=>{
    dispatchReducer({type:"setFullName", payload:value})

  }
  const history = useHistory()

  const addUserData =()=>{
      props.signUp(stateReducer)
      history.push('/')
  }
  const { Content } = Layout;
  return (
      
    <Router>
     <Switch>
       <Route path="/signup" exact>
      
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
        <InputComponent onChange={getFullName} name="FullName" label="FullName"/>
        <InputComponent onChange={getEmail} name="Email" label="Email"/>
        <InputComponent onChange={getPassword} name="Password" label="Password"/>
        <ButtonComponent layout={layout} onClick={addUserData}/> 

      </Form>
    </Content> 
    </Route>
    </Switch>
    </Router>

  );
};
const mapStateToProps =({auth})=>({
    auth
  })
const mapDispatchToProps =(dispatch)=>({
    signUp: (data) => dispatch(signUp(data))
})
export default connect( mapStateToProps, mapDispatchToProps)(SignUpComponent);
