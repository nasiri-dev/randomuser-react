import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state={
      counter: 0
    }
 
  }

  increment(){
    this.setState((prevState)=>{
      return{
        counter:prevState.counter + 1
      }
    })

  }
  decrement(){
    this.setState((prevState)=>{
      return{
        counter:prevState.counter - 1
      }
    })
  }

  reset(){
    this.setState((prevState)=>{
      return{
        counter:0
      }
    })
  }

  render(){
    return(
      <div>
        <h1>Counter : {this.state.counter}</h1>
        <button type="btn" onClick = {this.increment} > + </button>
        <button type="btn" onClick = {this.decrement}> - </button>
        <button type="btn" onClick = {this.reset}> Reset!</button>
      </div>
    )  
  }
}




export default App;