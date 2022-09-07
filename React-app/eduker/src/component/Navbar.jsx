import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HOME from "./Home";


function Navbar(props) {
  const numbers = {'/Home':'HOME'};
  const returndata = Object.entries(numbers).map((res, i, arr) => {
    return (
      <li className="nav-item" key={i}>
        <Link className="navlink nav-link text-body h6" href="javascript:void(0)" to={res[0]}>{res[1]}
        </Link>
      </li>
    
    );
  });
  return (
    <>
      <Router>
       <div>
       
        <nav className="navbar sticky-top navbar-expand-sm navcolor navbar-dark bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)"><img src="https://eduker-five.vercel.app/assets/img/logo/logo.png" alt="logo" height="60px" width="300px"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
       {returndata}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>

        
          
        <Routes>
          <Route path="/Home" element={<HOME />} />
         
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default Navbar;
