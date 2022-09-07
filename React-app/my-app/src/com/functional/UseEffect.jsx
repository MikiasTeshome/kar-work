import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseEffect(props) {

    let a = 50;
    let b = 30;

    const[vara,setvara]=useState(0);
    const[varname,setvarname]=useState("tops");

    useEffect(()=>{
        console.log("use effect called");
        return changename
    },[vara,varname])

    function changename() {
        console.log("changed the data");
        setvara(199);
        setvarname("tops technologies");
    } 
       

    const[count,setcount]=useState(0);
    useEffect(()=>{
        console.log("count called");
        document.title=`You clicked count ${count} time`
    })

    return (
        <>
        <p>{a+b}</p>
        <p>{vara}</p>
        <p>{varname}</p>

        <button onClick={changename}>click</button>
        <p></p>

        <button onClick={()=>{setcount(count+1)}}>click me</button>{count}
        </>
    );
}

export default UseEffect;