import React, { Component } from 'react';
import PropTypes from 'prop-types';

class statelifecycle extends Component {
    constructor(props) {
        super(props);
       this.state={counter:0}
       console.log("counter called");


    }

    // componentWillMount() {
    //     console.log("componentWillMount");

    // }

    componentDidMount() {
        console.log("componentDidMount called");

    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        console.log("nextprops",nextProps);
        console.log("nextstate",nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate called");

    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called");
        console.log("preprops",prevProps);
        console.log("prestate",prevState);
    

    }

    componentWillUnmount() {
        console.log("componentWillUnmount");

    }
    inc=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    dec=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }

    res=()=>{
        this.setState({
            counter:this.state.counter=0
        })
    }

    render() {
        return (
        <div className="l2">
            <>
                <div><center><h1>React web</h1></center></div>
            <center><h1>{this.state.counter}</h1></center>
            <div className="main">
            <div class="l3"> <button class="b1" onClick={this.inc}>INCREMENT</button></div>

               <div class="l4"> <button class="b1" onClick={this.dec}>DECREMENT</button></div>
               </div>


               <div class="l5"> <button class="b1" onClick={this.res}>RESET</button></div><br />
                
            </>
            </div>
        );
    }
}

export default statelifecycle;