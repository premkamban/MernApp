import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItem from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
  <header class="Toolbar">
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItem />
    </nav>
  </header>
);

export default Toolbar;
