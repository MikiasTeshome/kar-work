import React, { Component } from 'react';

class stste extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Tops",
            Age:15,
            Auther : 'Chetan',
            Auth : 'Chetan'
        }
    }

    TwoStates=()=>{
        return <p>Two States Called {this.state.Auther}</p>
    }
    Threeidiots=()=>{
        return <p>Three Idiots called {this.state.Auth}</p>
    }
    Changedata=()=>{
        this.setState({name:"Tops Technologies",Age:13,Auther:"chetan patel",Auth:"Chetan Bahgat"});
        console.log("called");

    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col">
            <h1>State</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.Age}</h1> 
                <button onClick={this.Changedata}>Click</button> 
                <h3>{this.TwoStates()} </h3>        
                <h3>{this.Threeidiots()} </h3>
                </div>
                </div>
                </div>
            </>
        );
    }
}
export default stste;