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
      purchaseAble: false,
    };
    this.addIncredient = this.addIncredient.bind(this);
    this.removeIncredient = this.removeIncredient.bind(this);
  }

  updatePurchaseState(incredients) {
    const sum = Object.keys(incredients)
      .map((ikey) => {
        return incredients[ikey];
      })
      .reduce((sum, el) => {
        //console.log(`The sum of ${type} `, sum);
        return sum + el;
      }, 0);

    this.setState({ purchaseAble: sum > 0 });
  }

  addIncredient(type) {
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
    this.updatePurchaseState(updatedState);
  }

  removeIncredient(type) {
    const OldCount = this.state.incredients[type];
    if (OldCount <= 0) {
      alert(`No ${type} incredient Added!`);
      return;
    }
    const updateCount = OldCount - 1;
    const updatedState = {
      ...this.state.incredients,
    };
    updatedState[type] = updateCount;
    const costAddition = INCRE_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - costAddition;
    this.setState({ incredients: updatedState, totalPrice: newPrice });
    this.updatePurchaseState(updatedState);
  }

  render() {
    return (
      <Aux>
        <Burger incredients={this.state.incredients} />
        <BuildControls
          incrRemove={this.removeIncredient}
          incredientsAdded={this.addIncredient}
          price={this.state.totalPrice}
          purchaseAble={this.state.purchaseAble}
        />
      </Aux>
    );
  }
}
