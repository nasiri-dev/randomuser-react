import React from 'react'
import './App.css'
import Users from './users';

class App extends React.Component{

    constructor(props){
        super(props);
        this.UpdateValue = this.UpdateValue.bind(this)
        this.handelSubmit = this.handelSubmit.bind(this)

        this.state ={
            inputValue:'',
            value:''
        }
    }

    UpdateValue(event){
        this.setState({
            inputValue: event.target.value
        })

    }

    handelSubmit(event){
        event.preventDefault();
        this.setState(()=>{
            return{
                value:parseInt(this.state.inputValue)
            } 
        })
    }


    render(){

        var userArray = [];
        var i;

        for(i = 0;i < this.state.value;i++){
            userArray.push(
                <Users key={i}/>
            )
        }


        return(
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.UpdateValue} />
                    <button onClick= {this.handelSubmit}>Submit</button>                    
                </div>
                <div>
                    <thead>
                        <th>Avatar</th>
                        <th>UserName</th>
                        <th>Password</th>

                    </thead>
                    {userArray}
                </div>
            </div>
        )
    }
}

export default App;