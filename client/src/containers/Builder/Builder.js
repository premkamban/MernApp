import React, { Component } from "react";
import { Aux } from "../../components/HOC/WithHoc";
import Burger from "./Burger";
import BuildControls from "./BuildControls";
import Modal from "../Modal/Modal";
import OrderSummary from "../../components/Order/OrderSummary";

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
      purchasing: false,
    };
    this.addIncredient = this.addIncredient.bind(this);
    this.removeIncredient = this.removeIncredient.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
    this.purchaseCancel = this.purchaseCancel.bind(this);
    this.purchaseContinuehandler = this.purchaseContinuehandler.bind(this);
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

  purchaseHandler() {
    this.setState({ purchasing: true });
  }
  purchaseCancel() {
    this.setState({ purchasing: false });
  }

  purchaseContinuehandler() {
    alert("You continue!!");
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
        <Modal show={this.state.purchasing} closeModal={this.purchaseCancel}>
          <OrderSummary
            Incredients={this.state.incredients}
            purchaseCancel={this.purchaseCancel}
            Continuehandler={this.purchaseContinuehandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger incredients={this.state.incredients} />
        <BuildControls
          incrRemove={this.removeIncredient}
          incredientsAdded={this.addIncredient}
          price={this.state.totalPrice}
          purchaseAble={this.state.purchaseAble}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
