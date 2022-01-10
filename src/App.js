import React, {Component} from 'react';
import Customer from './components/customer';
import './App.css';
import Items from './components/items';
import Selector from './components/selector';

class App extends React.Component {
  state = {
    items: [],
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

  handleAdd = (item, quantity) =>{
    // TODO if item id === 0 or quantity === 0 show error 
    const addedItem = this.state.items.find(c=>c.id == item.id)
    if(addedItem != null){
      this.editQuantity(addedItem, quantity)
    }else{
      this.setState({
        items: [...this.state.items, { id: item.id, quantity: quantity, name: item.description }]
      })
    }
  }

  render() { 
    return (
    <div className='container'>
      <Customer/>
      <Selector onAdd={(addedItem, quantity) => this.handleAdd(addedItem, quantity)}/>
      <Items items={this.state.items} onReset={this.handleReset} onEditQuantity={(item, amount) => this.editQuantity(item, amount)} onDelete={this.handleDelete} onSubmit={this.handleSubmit} />

    </div>
      );
  }
}

export default App;
