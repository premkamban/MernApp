import React from "react";
import { Aux } from "../HOC/WithHoc";
import Button from "../Button/Button";

const OrderSummary = (props) => {
  const orderIncrentents = Object.keys(props.Incredients).map((ikey) => {
    return (
      <li key={ikey}>
        <span syle={{ textTransform: "capitalize" }}>{ikey}</span>:{" "}
        {props.Incredients[ikey]}
      </li>
    );
  });
  return (
    <div>
      <Aux>
        <h3>Your Order</h3>
        <p>you ordered with Incredients:</p>
        <ul>{orderIncrentents}</ul>
        <p>Continue to checkout?</p>
        <p>
          <i>Total Price: </i>
          <strong>{props.price.toFixed(2)}</strong>
        </p>
        <Button btnType="Danger" clicked={props.purchaseCancel}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={props.Continuehandler}>
          Continue
        </Button>
      </Aux>
    </div>
  );
};

export default OrderSummary;
