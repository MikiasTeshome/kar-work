import React, { Component } from 'react';

class state extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"abhi",
            no:20
        }

    }
    two=()=>{
        return <p>{this.state.no}</p>
    }
    changedata=()=>{
        this.setState({name:"abhi patel bharatbhai",no:87});
    }
    render() {
        return (
           <>
           <h1>state function create</h1>
           <p>{this.state.name}</p>
           <p>{this.two()}</p>

           <button onClick={this.changedata}>Click me</button>
           </>
        );
    }
}

export default state;