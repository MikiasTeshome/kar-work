import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseEffect() {
    let a=50;
    let b=50;

    const[vara,setvara]=useState(0);
    const[varname,setvarname]=useState("Tops");

    useEffect(()=>{
        console.log("useEffect called");
        return changedata
    },[vara,varname])

        function changedata() {
            console.log("changed called");
            setvara(1000);
            setvarname("tops technologies");
        }
        const[count,setcount]=useState(0);
        useEffect(()=>{
            console.log("counter useeffect called");
            document.title = `you clicked ${count} times`;
        })
    return (
        <>
                    {/* {a+b} */}
                    {vara}
                <button onClick={changedata}>click me</button>
                    {varname}
                <button onClick={()=>{setcount(count+1)}}>click</button>{count}
        </>
    );
}
export default UseEffect;