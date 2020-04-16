import React from "react";
import "./Backdrop.css";
const Backdrop = (props) =>
  props.show && <div class="Backdrop" onClick={props.close}></div>;

export default Backdrop;
