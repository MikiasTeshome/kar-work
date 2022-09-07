import React from 'react';
// import { useDebugValue } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseDebugValue(msg,delay) {
    const[message,setMessage] = useState("");
    useEffect(()=>{
        setTimeout(() => {
            setMessage(msg)
        }, delay);
    });
    React.useDebugValue(message,message => 
        message? "message set":"message not set"
        );
    return message;
    }
    function App()
    {
        const delayMessage = UseDebugValue("hello",2500);
   
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                     {delayMessage}
                    </div>
                </div>
            </div>
        </div>         
        )  }
export default App;