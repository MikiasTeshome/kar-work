import React from 'react';
import { useState } from 'react';

function Addusestate() {
    let a=50;
    let b=10;
    const[vars,setvars]=useState(0);
    const[varb,setvarb]=useState(0);

        function change() {
            console.log("called");
            a=1000;
            console.log(a);
            var c=setvars(10);
            var b=50;
            var d=b-c;
        }
    return (
       <>
                <p>Total of value A & B:  {a+b}</p><br />
                <p>Add the value :   {vars+a+b}</p><br />
                <button onClick={change}>Click</button>
                <p>Subtraction Of value :    {a-varb}</p>

       </>
    );
}

export default Addusestate;