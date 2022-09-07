import React, { Component } from 'react';
import { useState } from 'react';

const Clock = () => {
     let time = new Date().toLocaleTimeString();
     const [ctime,setctime]=useState(time);

     const UpdateTime = () =>{
        time=new Date().toLocaleTimeString();
        setctime(time);
     }
      setInterval(UpdateTime,1000);
      return(
            <>
           
<div className='headind'>
                <div className='headind1'>
                <center><h1>Digital Clock</h1></center>
                </div><br /><br /><br />

                <div className='headind2'>
                <center><h1>{ctime}</h1> </center>
                </div><br /><br /><br />
                </div>
             
               
               
            </>
        );
      }

export default Clock;