 import React, { Component } from 'react';

 class Listview extends Component {
     render() {

        const number={'/Use Array. Map':'Use Array. Map','/Note a For loop':'Note a For loop','/give each item a unique key':'give each item a unique key'}

        const returndata=Object.entries(number).map((res,i,arr)=>{
            return <li className="container list-item list-group-item" to={res[0]}>{res[1]}
             
            </li>
            
          })
         return (
        <div class="l1">
            <>
            <h1><center>The "React - Way" Render a List</center></h1>
            <div class="container">
                <ul class="list-group">
                        {returndata}
                </ul>
            </div>
            </>
        </div>
         );
     }
 }
 export default Listview;

