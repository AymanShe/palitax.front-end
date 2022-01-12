import React, {Component} from 'react';
import Customer from './components/customer';
import './App.css';
import Items from './components/items';
import Selector from './components/selector';
import Invoice from './components/invoice';
import Axios from "axios";
import configData from "./config.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import react from 'react';


const api = Axios.create({
  baseURL: configData.SERVER_URL + "/Calculators",
  headers: {
    'accept': "*/*",
    'Content-Type': "application/json"
  }
});

class App extends React.Component {
  state = {
    items: [],
    customerId: 0,
    result:null
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
    this.setState({ result: null });
    this.setState({customerId: 0});
  };

  handleSubmit = async () => {
    if(this.state.customerId == 0){
      this.showError('You have to choose a customer first')
    }else{

      //TODO try catch
      let result = await api.post('', {
        customerId: this.state.customerId,
        itemsList: 
        this.state.items.map((item) => (
          {
            id: item.id,
            quantity: item.quantity
          }
          ))
        })
        this.setState({ result: result.data });
      }
  };

  handleAdd = (item, quantity) =>{
    if(item == undefined){
      this.showError('You have to choose an item first')
    }else{
      const addedItem = this.state.items.find(c=>c.id == item.id)
      if(addedItem != null){
        this.editQuantity(addedItem, quantity)
      }else{
        this.setState({
          items: [...this.state.items, { id: item.id, quantity: quantity, name: item.description }]
        })
      }
    }
  }

  handleCustomerChanged = (id) =>{
    this.setState({ customerId: id })
  }

  showError = (message) =>{
    toast.error(message, {
      position:"top-right",
      autoClose:5000,
      hideProgressBar:true,
      newestOnTop:false,
      closeOnClick:true,
      rtl:false,
      pauseOnFocusLoss:true,
      draggable:true,
      pauseOnHover:true,
      theme:"colored",
    });
  }

  render() { 
    return (
    <react.Fragment >
      <ToastContainer
        />
      {!this.state.result && <div className='container' style={{width: 50+'rem'}}>
        <Customer showError={(message) => this.showError(message)} onCustomerChange={(customerId) => this.handleCustomerChanged(customerId)}/>
        <Selector showError={(message) => this.showError(message)} onAdd={(addedItem, quantity) => this.handleAdd(addedItem, quantity)}/>
        
        {this.state.items.length > 0 && (
        <Items 
          items={this.state.items} 
          onReset={this.handleReset} 
          onEditQuantity={(item, amount) => this.editQuantity(item, amount)} 
          onDelete={this.handleDelete} 
          onSubmit={this.handleSubmit} />
        )}
      </div> }
      
      {this.state.result && <Invoice result={this.state.result} onReset={this.handleReset}/>}

    </react.Fragment>
      );
  }
}

export default App;
