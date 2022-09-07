import React from 'react';
import { useState } from 'react';

function Functiontest(props) {
    const[username,setusername]=useState("patel");

        // function btn(){
        //     setusername("digal patel")
        // }

    return (
       <>
       {username}

       {/* <button onClick={btn}>CLICK ME</button> */}

       <button onClick={()=>setusername("patel digal")}>click me</button>
       </>
    );
}

export default Functiontest;

