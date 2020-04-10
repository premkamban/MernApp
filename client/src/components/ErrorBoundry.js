import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
    ErrorMessage: "",
    Info: "",
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: !this.state.hasError,
      ErrorMessage: error,
      Info: info,
    });
  }
  render() {
    return (
      <div>
        {this.state.hasError ? this.state.ErrorMessage : this.props.children}
        {this.state.hasError && (
          <p>
            <span>{this.state.info}</span>
          </p>
        )}
      </div>
    );
  }
}
