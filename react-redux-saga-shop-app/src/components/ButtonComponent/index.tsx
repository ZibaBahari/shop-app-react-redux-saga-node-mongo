import React from 'react'
import { Form, Button} from 'antd';
import {RouteProps} from 'react-router'


interface IProps extends RouteProps {
    layout:any,
    onClick
   
}

const ButtonComponent : React.FC<IProps> = ({
 layout,
 onClick
})=>{
    return(
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
         <Button type="primary" htmlType="submit" {...layout} onClick={onClick}>
           Submit
         </Button>
      </Form.Item>
    )
}
 export default ButtonComponent