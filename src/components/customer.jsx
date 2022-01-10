import React, { Component } from "react";
import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:40253/api/Customers",
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
        <label for="customers">Select customer from the menu</label>
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
