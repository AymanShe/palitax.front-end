import React, { Component } from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={this.props.value <= 1}
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
      </div>
    );
  }
}

export default Counter;
