import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import LogoIcon from "assets/icons/LogoIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sider = ({ collapsed }) => {
  const navigate = useNavigate();
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
    localStorage.setItem("currentScreen", e.key);
  };

  const { Sider } = Layout;

  const [current, setCurrent] = useState(localStorage.getItem("currentScreen"));

  let width = collapsed ? "60pt" : "150pt";
  let height = collapsed ? "10pt" : "25pt";

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={collapsed ? 80 : 260}
    >
      <div
        className="logo"
        style={{
          margin: "2.4rem 0",
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={() => {
          navigate("/dash/contract");
          setCurrent("/dash/contract");
          localStorage.setItem("currentScreen", "/dash/contract");
        }}
      >
        <LogoIcon width={width} height={height} />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["/dash/contract"]}
        onClick={onClick}
        selectedKeys={[current]}
        items={[
          {
            key: "/dash/contract",
            icon: <HomeOutlined />,
            label: "Contract",
          },

          {
            key: "/dash/role",
            icon: <HomeOutlined />,
            label: "Quản lý vai trò",
          },
        ]}
      />
    </Sider>
  );
};

export default Sider;
