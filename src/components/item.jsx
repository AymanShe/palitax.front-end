import React, { Component } from "react";
import Counter from "./counter";

class Item extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body d-flex flex-row justify-content-between align-items-center p-2 bg-white px-3 rounded">
          <div className="d-flex flex-column align-items-center product-details">
            <span className="font-weight-bold">{this.props.item.name}</span>
          </div>
          <div className="d-flex align-items-center">
            <Counter
              value={this.props.item.quantity}
              onEditValue={(amount) =>
                this.props.onEditQuantity(this.props.item, amount)
              }
            />
            <button
              onClick={() => this.props.onDelete(this.props.item.id)}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
