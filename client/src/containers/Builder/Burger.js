import React from "react";
import "./Burger.css";
import Incrediance from "./Incrediance.js/Incrediance";

const Burger = (props) => {
  var transformedIncr = Object.keys(props.incredients)
    .map((ik) => {
      return [...Array(props.incredients[ik])].map((_, i) => {
        return <Incrediance type={ik} key={ik + i} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIncr.length === 0) {
    transformedIncr = <p>Please add the incredients!! </p>;
  }

  return (
    <div className="Burger">
      <Incrediance type="bread-top" />
      {transformedIncr}
      <Incrediance type="bread-bottom" />
    </div>
  );
};

export default Burger;
