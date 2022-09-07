// import React, { Component } from 'react';
// import { useState } from 'react';

// const About = () => {
//      let time = new Date().toLocaleTimeString();
//      const [ctime,setctime]=useState(time);

//      const UpdateTime = () =>{
//         time=new Date().toLocaleTimeString();
//         setctime(time);
//      }
//       setInterval(UpdateTime,1000);
//       return(
//             <>
//                 <center><h1>{ctime}</h1>
//                 </center>
//             </>
//         );
//       }

// export default About;

import React, { Component } from 'react';
// import React from 'react';
class Clock extends Component {

    ShowTime=()=> {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var session = "AM";
    
        if(h == 0)
        {
            h = 12;
        }
    
        if(h > 12)
        {
            h = h - 12;
            session = "PM";
        }
    
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
    
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("DisplayClock").innertext=time;
        document.getElementById("DisplayClock").textContent=time;
        document.getElementById("displayClock").innerHTML=time;
       
        setTimeout(1000);
        
        
    }
    
    render() {
       return(
            <>
                <p>Simple Clock Using javascript</p>
                <p id="DisplayClock" className="clock1" onLoad={this.ShowTime}> </p>
                <button onClick={this.ShowTime}>click</button> 
            </>
        );
        }
}
export default Clock; 