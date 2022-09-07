import React from 'react';
import { useState } from 'react';

function Functionusestate() {
    const[username,setusername] = useState("someone bhagat");
    let a=50;
    let b=10;
    const[vars,setvars]=useState(0);
    const[varb,setvarb]=useState(0);

    function Change(){
      console.log("called");
      a=1000;
      console.log(a);

      var b=50;
      var c=setvarb(10);
      var d=b-c;
    }

    // function ClickHndl()
    // {
    //     setusername("chetan bhagat");
    // }
    return (
       <>
          {username}

            <button onClick={()=>setusername("chetan bhagattt")}>click</button>  
            {/* without function change the value */}

                  {a+b}
                  <br />
                  {vars+a+b}
                  <br />


               <button onClick={Change}>change data</button>
               {a-varb}


          {/* <button onClick={ClickHndl}>click</button> */}
       </>
    );
}

export default Functionusestate;