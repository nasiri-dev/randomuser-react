import React from 'react';


class Header extends React.Component{
    render(){
        return(
            <div>
                <p>UserName:{this.props.username}</p>
                <p>Email:{this.props.email}</p>
            </div>
        )
    }
}



export default Header;