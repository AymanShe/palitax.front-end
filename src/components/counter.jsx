import React, { Component } from "react";

const Counter = () => {
    return ( <React.Fragment>
        <button
          onClick={() => this.props.onEditQuantity(this.props.item, -1)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <span className="m-3">{this.props.value}</span>
        <button
          onClick={() => this.props.onEditQuantity(this.props.item, +1)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </React.Fragment> );
}

export default Counter;
