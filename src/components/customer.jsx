import React, { Component } from "react";
import Axios from "axios";
import configData from "../config.json";

const api = Axios.create({
  baseURL: configData.SERVER_URL + "/Customers",
});
class Customer extends React.Component {
  state = {
    customers: [],
  };

  componentDidMount() {
    this.getCustomers();
  }

  getCustomers = async () => {
    try {
      let data = await api.get("/").then(({ data }) => data);
      this.setState({ customers: data });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    this.props.onCustomerChange(e.target.value);
  };

  render() {
    return (
      <div className="card m-2">
        <h5
          className="card-header  text-white"
          style={{ background: "steelblue" }}
        >
          Customer
        </h5>
        <div className="card-body">
          <h5 className="card-title">Select customer from the menu</h5>
          <select name="customers" id="customers" onChange={this.handleChange}>
            <option value="0">Choose Customer</option>
            {this.state.customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.fullName}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Customer;
