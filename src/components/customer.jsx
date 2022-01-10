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

  render() {
    return (
      <div>
        <label htmlFor="customers">Select customer from the menu</label>
        <br />
        <select name="customers" id="customers">
          {this.state.customers.map((customer) => (
            <option key={customer.id} value="{customer.id}">
              {customer.fullName}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Customer;
