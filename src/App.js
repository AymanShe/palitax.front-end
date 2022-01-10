import React, {Component} from 'react';
import Customer from './components/customer';
import './App.css';
import Items from './components/items';
import Selector from './components/selector';

class App extends React.Component {
  state = {
    items: [
      { id: 1, quantity: 0, name: "TV" },
      { id: 2, quantity: 5, name: "Camera" },
      { id: 3, quantity: 2, name: "Phone" },
    ],
  };

  handleDelete = (id) => {
    const items = this.state.items.filter((c) => c.id !== id);
    this.setState({ items });
  };

  editQuantity = (item, amount) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].quantity += amount;
    this.setState({ items });
    /* TODO remove selected*/
    /* TODO desaible if zero*/
  };

  handleReset = () => {
    const items = [];
    this.setState({ items });
  };

  handleSubmit = () => {
    //TODO change to submit action
    const items = [];
    this.setState({ items });
  };
  render() { 
    return (
    <div className='container'>
      <Customer/>
      <Selector/>
      <Items items={this.state.items} onReset={this.handleReset} onEditQuantity={(item, amount) => this.editQuantity(item, amount)} onDelete={this.handleDelete} onSubmit={this.handleSubmit} />

    </div>
      );
  }
}

export default App;
