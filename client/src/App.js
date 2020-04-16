import React from "react";
import Layout from "./components/Layout/Layout";
import Builder from "./containers/Builder/Builder";
import AsyncReact from "./AsyncReact/AsyncReact";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      asyncReact: false,
    };
  }

  render() {
    const asyncReactLabel = (
      <React.Fragment>
        <AsyncReact />
      </React.Fragment>
    );

    return this.state.asyncReact ? (
      asyncReactLabel
    ) : (
      <div className="App">
        <Layout>
          <Builder />
        </Layout>
      </div>
    );
  }
}

export default App;
