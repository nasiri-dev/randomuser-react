import React from 'react';

class users extends React.Component{

    constructor(props){
        super(props);
        this.componentDidMount=this.componentDidMount.bind(this)
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api")
        .then(res => res.json())
        .then(
            json =>{
                this.setState({
                    users:json.results
                })
                
            }

        )
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default users;