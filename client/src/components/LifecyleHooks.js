import React, { Component } from "react";
import { WithHocClass } from "./HOC/WithHoc";

class LifecyleHooks extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      name: "ame",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Get derived state from props");
    console.log(props);
    console.log(state);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponent Update...");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapShotBeforeUpdate...");
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
  }

  componentDidMount() {
    console.log("Component Did Mount triggered....");
  }

  render() {
    return <div>LifeCyce Hooks</div>;
  }
}

export default WithHocClass(LifecyleHooks);
