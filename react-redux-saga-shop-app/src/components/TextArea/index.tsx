import React from 'react'
import { Form, Input } from 'antd';
import {RouteProps} from 'react-router'


interface IProps extends RouteProps{
  onChange:any
}



const InputComponent : React.FC<IProps> = ({
  onChange
})=>{
const  onChangeDesc =(e)=>{
   onChange(e.target.value)
  }
    return(
     
       <Form.Item name={['user', 'introduction']} label="Introduction">
       <Input.TextArea onChange={onChangeDesc}/>
     </Form.Item>
    )
}
 export default InputComponent