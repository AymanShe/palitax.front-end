import react from "react";
import React, { Component } from "react";
import Item from "./item";

class Items extends React.Component {
  render() {
    const { items, onDelete, onEditQuantity, onReset, onSubmit } = this.props;
    return (
      <react.Fragment>
        <div className="card m-2">
          <h5 className="card-header">Selected Items</h5>
          <div className="card-body">
            <div className="m-2">
              {items.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  onEditQuantity={(item, amount) =>
                    onEditQuantity(item, amount)
                  }
                  onDelete={onDelete}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between m-2">
          <button onClick={onReset} className="btn btn-secondary">
            Reset
          </button>
          <button onClick={onSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </react.Fragment>
    );
  }
}

export default Items;
