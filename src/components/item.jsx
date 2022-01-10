import React, { Component } from "react";
import Counter from "./counter";

class Item extends React.Component {
  state = {
    name: this.props.item.name,
  };

  render() {
    return (
      <div>
        <span className="m-2">{this.state.name}</span>
        <Counter
          value={this.props.item.quantity}
          onEditValue={(amount) =>
            this.props.onEditQuantity(this.props.item, amount)
          }
        />
        {/* TODO add this.disableIfZero() */}

        <button
          onClick={() => this.props.onDelete(this.props.item.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  disableIfZero() {
    return this.props.item.quantity === 0 ? " true" : "false";
  }
}

export default Item;
