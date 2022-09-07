import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Home from './Home';


function Navbar(props) {
    const numbers = {'/Home':'Home'}
    const returndata = Object.entries(numbers).map((res, i, arr) => {
        return (

          <li className="nav-item" key={i}>
          <Link className="nav-link h6 text-body" to={res[0]}>{res[1]}</Link>
        </li>
        );
      });
    return (
       <>
       <Router>
        <div>
       <nav className="navbar navbar-expand-sm  navbar-dark navcolor fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://beshop-demo.vercel.app/assets/img/header-logo.svg" alt="logo" /></a>
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
 <Route path="/Home" element={<Home />} />
 
</Routes>
</div>
</Router>
</>

    );
}

export default Navbar;