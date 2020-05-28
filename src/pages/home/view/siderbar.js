import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="quiz">
        <Link to="/home/quiz">Quiz</Link>
      </Menu.Item>
      <Menu.Item key="quesion">
        <Link to="/home/question">Question</Link>
      </Menu.Item>
      <Menu.Item key="users">
        <Link to="/home/users">Users</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SideBar;
