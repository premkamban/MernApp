import React from "react";
import { Aux } from "../HOC/WithHoc";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <div>Toolbar,Sidebar,Backdrop</div>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default Layout;
