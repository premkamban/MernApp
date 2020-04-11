import React from "react";
import Layout from "./components/Layout/Layout";
import Builder from "./containers/Builder/Builder";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Builder />
        </Layout>
      </div>
    );
  }
}

export default App;
