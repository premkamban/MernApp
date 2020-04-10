import React, { Component } from "react";
import ErrorBoundry from "./ErrorBoundry";
import "../../src/";
import PropTypes from "prop-types";

class Floor extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.state = {
      style: {
        backgroundColor: "white" /* Green */,
        border: "solid 1px black",
        color: "black",
        padding: "12px 25px",
        textAlign: "justify",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "10px",
      },
    };
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  render() {
    const { style } = this.state;
    const props = this.props;
    console.log(this.inputElement);
    return (
      <React.Fragment>
        <ErrorBoundry>
          <div>
            <h4>{props.data.id}</h4>
            <p>{props.data.title}</p>
            {!props.showModify && (
              <button style={style} onClick={props.showModifyhandler}>
                Edit
              </button>
            )}
            {!props.showModify && (
              <React.Fragment>
                <input
                  ref={this.inputElement}
                  type="text"
                  onChange={props.modify}
                />
                <button style={style} onClick={props.showModifyhandler}>
                  OK!
                </button>
              </React.Fragment>
            )}
          </div>
          <button style={style} onClick={props.deleteData}>
            delete Me!
          </button>
          <br />
        </ErrorBoundry>
      </React.Fragment>
    );
  }
}

Floor.propTypes = {
  deleteData: PropTypes.func,
  showModify: PropTypes.bool,
};

export default Floor;
