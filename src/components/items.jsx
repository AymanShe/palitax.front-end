import React, { Component } from "react";
import Item from "./item";

class Items extends React.Component {
  render() {
    const { items, onDelete, onEditQuantity, onReset, onSubmit } = this.props;
    return (
      <div>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onEditQuantity={(item, amount) => onEditQuantity(item, amount)}
            onDelete={onDelete}
          />
        ))}
        <button onClick={onReset} className="btn btn-secondary mg-2">
          Reset
        </button>
        <button onClick={onSubmit} className="btn btn-primary mg-2">
          Submit
        </button>
      </div>
    );
  }
}

export default Items;
