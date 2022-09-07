import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";
import UseValidation from './UseValidation';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';
import Slider from './slider';
class header extends Component {
   
    render() {
        const numbers={'/UseValidation':'UseValidation','/DigitalClock':'DigitalClock','/AnalogClock':'AnalogClock','/slider':'Slider'}

        const returndata = Object.entries(numbers).map((res,i,arr)=>{
            return  <li className="nav-item" key={i}>
                    <Link className="nav-link" to={res[0]}>{res[1]}</Link>
          </li>
        })
        return (
            <>
          <Router>
          <div>
            
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
    
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                 <ul className="navbar-nav">
                         {returndata}          
        
                 </ul>
            </div>
            </div>
            </nav>
            <Routes>
                 <Route path="/UseValidation" element={<UseValidation />} />
                 <Route path="/DigitalClock" element={<DigitalClock />} />
                 <Route path="/AnalogClock" element={<AnalogClock />} />
                 <Route path="/slider" element={<Slider />} />
                 
            </Routes>

            </div>
            </Router>
         
            </>
        );
    }
}

export default header;