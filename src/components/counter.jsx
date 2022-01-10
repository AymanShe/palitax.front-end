import React, { Component } from "react";

class Counter extends React.Component {
  // TODO add this.disableIfZero()
  disableIfZero() {
    return this.props.item.quantity === 0 ? " true" : "false";
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.onEditValue(-1)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <span className="m-3">{this.props.value}</span>
        <button
          onClick={() => this.props.onEditValue(+1)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
