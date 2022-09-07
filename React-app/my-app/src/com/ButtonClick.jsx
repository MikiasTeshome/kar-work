import React, { Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

class Buttonreuse extends Component {
    render() {
        return (
            <>
            {/* <button onClick={()=>{
                console.log("called");
                Navigate=('/invoice');
            }}>click me</button> */}

            <button onClick={()=>{
            console.log("button called...")
            console.log(this.props);
            }}>click me</button>
            </>
        );
    }
}

export default ButtonClick;


function ButtonClick(){
    let navigate=useNavigate()
    return <>
    <Buttonreuse navigatedata={navigate}/>
    </>
}