import React, { Component } from "react";
import Counter from "./counter";

class Item extends React.Component {
  render() {
    return (
      <div>
        <span className="m-2">{this.props.item.name}</span>
        <Counter
          value={this.props.item.quantity}
          onEditValue={(amount) =>
            this.props.onEditQuantity(this.props.item, amount)
          }
        />

        <button
          onClick={() => this.props.onDelete(this.props.item.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
