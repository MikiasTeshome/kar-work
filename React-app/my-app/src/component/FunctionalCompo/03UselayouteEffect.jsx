import React from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UselayoutEffect() {
    let a=50;
    let b=50;

    const[vara,setvara]=useState(0);
    const[varname,setvarname]=useState("Tops");
    useLayoutEffect(()=>{
        setTimeout(() => {
            console.log("uselayout called");
        }, 2000);
        
    })

    useEffect(()=>{
        setTimeout(() => {
            console.log("useEffect called");
            return changedata
        }, 3000);
     },[vara,varname])

        function changedata() {
            // a=1000
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

export default UselayoutEffect;