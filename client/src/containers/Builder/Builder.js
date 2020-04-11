import React, { Component } from "react";
import { Aux } from "../../components/HOC/WithHoc";
import Burger from "./Burger";
import BuildControls from "./BuildControls";

const INCRE_PRICE = {
  salad: 0.4,
  bacon: 0.7,
  cheese: 0.3,
  meat: 1.4,
};

export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
    };
    this.addIncredient = this.addIncredient.bind(this);
  }

  addIncredient(type) {
    console.log("what type is it ====>", type);
    console.log("Incredent Type", this.state);
    const OldCount = this.state.incredients[type];
    const updateCount = OldCount + 1;
    const updatedState = {
      ...this.state.incredients,
    };
    updatedState[type] = updateCount;
    const costAddition = INCRE_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + costAddition;
    this.setState({ incredients: updatedState, totalPrice: newPrice });
  }

  removeIncredient() {}

  render() {
    return (
      <Aux>
        <Burger incredients={this.state.incredients} />
        <BuildControls incredientsAdded={this.addIncredient} />
      </Aux>
    );
  }
}
