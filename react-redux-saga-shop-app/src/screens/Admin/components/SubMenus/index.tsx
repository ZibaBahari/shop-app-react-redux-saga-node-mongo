import React from "react"
import { Menu} from 'antd';
import { RouteProps} from "react-router";
import {Link} from "react-router-dom"
interface IProps extends RouteProps {

  title:string,
  key:number,
  icon:any
}
const SubMenus: React.FC<IProps> = ({
title,
key,
icon,
  ...props
  
}) => {

const { SubMenu } = Menu;
return (
    <SubMenu key={key} title={title} icon={icon}
    
    {...props} >

    <Menu.Item key="10">
    <Link
  to={{
    pathname: "/add-product",
   
    state: { fromDashboard: true }
  }}
/>Add Product 
    </Menu.Item>
     <Menu.Item key="11"><Link to="/list-product">Product List</Link></Menu.Item>
     <Link to="/admin/products">Products</Link>

    </SubMenu>

)
}
export default SubMenus