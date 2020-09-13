import React, { useState } from "react";
import { Layout, Menu } from "antd";

import { DesktopOutlined } from "@ant-design/icons";
import { RouteProps } from "react-router";
import SubMenus from "./components/SubMenus";
import SingleMenu from "./components/SingleMenu";
// import ContentMenu from "./components/ContentMenu";
// Styles
import "./index.css";
import "antd/dist/antd.css";


const { Header, Footer, Sider } = Layout;

interface IProps extends RouteProps {
  collapsed: boolean;
  setcollapsed: (status: boolean) => void;
}
const Admin: React.FC<IProps> = ({}) => {
  const [collapsed, setcollapsed] = useState<boolean>(false);

  const onCollapse = (collapsed) => {
    setcollapsed(collapsed);
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenus icon={<DesktopOutlined />} key={1} title="Product" />
            <SingleMenu icon={<DesktopOutlined />} title=" Option 2" key={2} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
