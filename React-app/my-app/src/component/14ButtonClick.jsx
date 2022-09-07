import React, { Component } from 'react';
import {Navigate,useNavigate} from 'react-router-dom';

class ButtonRedirect extends Component {
    render() {
        return (
           <>
                {/* <button onClick={()=>{
                    console.log("called");
                    Navigate('/invoice');
                }}>click</button> */}

                <button onClick={()=>{
                    console.log("btn called");
                    console.log(this.props);
                }}>Click me</button>
           </>
        );
    }
}

export default ButtonClick;

function ButtonClick()
{
   let navigate = useNavigate();
   return <>
   <ButtonRedirect navigatedata={navigate}/>
   </>
}