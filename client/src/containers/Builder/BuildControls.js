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
    {control.map((ct) => {
      return (
        <BuildControl
          label={ct.label}
          key={ct.label}
          add={() => props.incredientsAdded(ct.type)}
        />
      );
    })}
  </div>
);

export default BuildControls;
