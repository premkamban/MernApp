import React from "react";
import "./Burger.css";
import Incrediance from "./Incrediance.js/Incrediance";

const Burger = (props) => {
  var transformedIncr = Object.keys(props.incredients)
    .map((ik) => {
      console.log("INCR key --->", ik);
      return [...Array(props.incredients[ik])].map((_, i) => {
        console.log("index key --->", i);
        return <Incrediance type={ik} key={ik + i} />;
      });
    })
    .reduce((arr, el) => {
      console.log("arr!! --->", arr);
      console.log("el!! --->", el);
      return arr.concat(el);
    }, []);

  if (transformedIncr.length === 0) {
    transformedIncr = <p>Please add the incredients!! </p>;
  }
  console.log("The transformed keys ====> ", transformedIncr);
  return (
    <div className="Burger">
      <Incrediance type="bread-top" />
      {transformedIncr}
      <Incrediance type="bread-bottom" />
    </div>
  );
};

export default Burger;
