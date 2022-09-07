import React, { Component } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
}from "react-router-dom";
import Cake from './08Cake';

class product extends Component {
    render() {

        const numbers = {'/Cake':'Cake'}
        const returndata = Object.entries(numbers).map((res,i,arr)=>{
        return <li className="nav-item">
    <Link className='nav-link' to={res[0]}>{res[1]}</Link>
               </li>
  })
        return (
        //  <Router>
            <div>
            <nav className="navbar navbar-expand-sm bg-success navbar-dark">
             
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
            <Route path="/product" element={<Cake/>}/>
                           
              </Routes>
          
            </div>
         
            // </Router>
        );
    }
}
export default product;