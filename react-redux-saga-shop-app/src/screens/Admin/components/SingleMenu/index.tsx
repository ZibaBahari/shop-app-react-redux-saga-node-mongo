import React from "react"
import { Menu } from 'antd';
import RouteProps from 'react-router'


interface IProps extends RouteProps{
  key:number,
  title:string,
  icon:any
}


const SingleMenu : React.FC<IProps>=({
  key,
  title,
  icon,
  ...props
})=>{
  return (
    <Menu.Item key={key} icon={icon} title={title} {...props}>
    Option 2
  </Menu.Item>
)}

export default SingleMenu