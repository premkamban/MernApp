import React from "react";
import "./BuildControl.css";
import BuildControl from "./BuildControl/BuildControl";

const control = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className="BuildControls">
    <p>
      Current Price: <strong>{props.price}</strong>
    </p>
    {control.map((ct) => {
      return (
        <BuildControl
          label={ct.label}
          key={ct.label}
          remove={() => props.incrRemove(ct.type)}
          add={() => props.incredientsAdded(ct.type)}
        />
      );
    })}
    <button className="OrderButton" disabled={!props.purchaseAble}>
      Order Now!
    </button>
  </div>
);

export default BuildControls;
