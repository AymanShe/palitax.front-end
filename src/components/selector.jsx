import React, { Component } from "react";
import Counter from "./counter";
import Axios from "axios";
import configData from "../config.json";

const api = Axios.create({
  baseURL: configData.SERVER_URL + "/Items",
});

class Selector extends React.Component {
  state = {
    items: [],
    addQuantity: 1,
    selectValue: 0,
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    try {
      let data = await api.get("/").then(({ data }) => data);
      this.setState({ items: data });
    } catch (err) {
      console.log(err);
    }
  };

  handleEditQuantity = (amount) => {
    this.setState({ addQuantity: this.state.addQuantity + amount });
  };

  handleChange = (e) => {
    this.setState({ selectValue: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="card m-2">
          <h5
            className="card-header text-white"
            style={{ background: "steelblue" }}
          >
            Items
          </h5>
          <div className="card-body">
            <h5 className="card-title">Select item from the menu</h5>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <select name="items" id="items" onChange={this.handleChange}>
                <option value="0">Choose Item</option>
                {this.state.items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.description}
                  </option>
                ))}
              </select>
              <Counter
                value={this.state.addQuantity}
                onEditValue={(amount) => this.handleEditQuantity(amount)}
              />
              <button
                onClick={() =>
                  this.props.onAdd(
                    this.state.items.find(
                      (c) => c.id == this.state.selectValue
                    ),
                    this.state.addQuantity
                  )
                }
                className="btn btn-secondary btn-sm mg-2"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Selector;
