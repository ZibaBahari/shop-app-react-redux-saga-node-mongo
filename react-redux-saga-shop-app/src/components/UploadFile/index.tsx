import React from 'react'
import { Upload, message, Button , Form} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {RouteProps} from 'react-router'


interface IProps extends RouteProps {
    layout:any,
    onChange:any
}

const InputComponent : React.FC<IProps> = ({
    layout,
    onChange
})=>{
  // console.log('chan')
  // const onUpload =(e)=>{
  //   let reader = new FileReader();
  //   let file = e.file.originFileObj
  //   onChange(reader, file)

  
  // }
  
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
    }
    if (info.file.status === 'done') {
          let reader = new FileReader();
    let file = info.file.originFileObj
      onChange(reader, file)
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
    return(
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
         <Upload {...props} >
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  </Upload>,
      </Form.Item>
    )
}
 export default InputComponent