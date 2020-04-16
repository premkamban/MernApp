import React from "react";
import "./Logo.css";
import Burger from "../../Asserts/burger-logo_56473-319.jpg";

const Logo = () => {
  return (
    <div className="Logo">
      <img src={Burger} alt="Burger" />
    </div>
  );
};

export default Logo;
