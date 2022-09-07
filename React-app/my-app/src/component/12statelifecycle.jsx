import React, { Component } from 'react';
import PropTypes from 'prop-types';

class statelifecycle extends Component {
    constructor(props) {
        super(props);
      this.state={counter:0}
      console.log("Counter called");

    }

    // componentWillMount() {
    //                 console.log("componentWillMount");
    // }

    componentDidMount() {
            console.log("componentDidMount called");
    }

    // componentWillReceiveProps(nextProps) {
    //             console.log("componentWillReceiveProps");
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        console.log("nextprops",nextProps);
        console.log("nextstate",nextState);
        return true;


    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");

    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called");
        console.log("prevprops",prevProps);
        console.log("prevstate",prevState);

    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        
    }
    changeData=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    render() {
        return (
            <>
           <center><h1>counter increments</h1></center>

                <center><button onClick={this.changeData}>Click</button></center>
                
               <p><h1><center> {this.state.counter}</center></h1></p>
            </>
        );
    }
}
export default statelifecycle;