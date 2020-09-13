import React from 'react'
import { Form, Input } from 'antd';
import {RouteProps} from 'react-router'


interface IProps extends RouteProps{
  onChange: any,
  name: any,
  label: any
}


const InputComponent  = (props: IProps) => {

  const onChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  };
    return(
        <Form.Item
        name={[props.name, props.name]}
        label={props.label}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange = {onChange}/>
      </Form.Item>
      
    )
}
 export default InputComponent