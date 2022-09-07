import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HOME from "./Home";
import PAGES from "./PAGES";
import SHOP from "./SHOP"; 
import CATEGORIES from "./CATEGORIES";
import BLOG from "./BLOG";
import CONTACT from "./CONTACT";
import Header from "./Header";

function Navbar(props) {
  const numbers = {'/Home':'HOME','/PAGES':'PAGES','/SHOP':'SHOP','/CATEGORIES':'CATEGORIES','/BLOG':'BLOG','/CONTACT':'CONTACT','/Header':'Header'};
  const returndata = Object.entries(numbers).map((res, i, arr) => {
    return (
      <li className="nav-item" key={i}>
        <Link className="navlink nav-link text-body h6" to={res[0]}>{res[1]}
        </Link>
      </li>
    );
  });
  return (
    <>
   
      <Router>
       <div>
        {/* <div className="main123"> */}
        <nav className=" navbar sticky-top navbar-expand-sm navcolor navbar-dark " >
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              <img
                src="https://beshop-demo.vercel.app/assets/img/header-logo.svg"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler btn-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">{returndata}</ul>
            </div>
          </div>
          </nav>

        {/* <div className='main1'>
             <p className='pro'>Professional</p>
             <p className='bea'>Beauty & Care</p>
             <p className='nou'>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
            <button className='btn1'>SHOP NOW</button>
          </div>
          <div className="img2">
            
          </div> */}
          
          {/* </div> */}
          
        <Routes>
          <Route path="/Home" element={<HOME />} />
          <Route path="/PAGES" element={<PAGES />} />
          <Route path="/SHOP" element={<SHOP />} />
          <Route path="/CATEGORIES" element={<CATEGORIES />} />
          <Route path="/BLOG" element={<BLOG />} />
          <Route path="/CONTACT" element={<CONTACT />} />
          <Route path="/Header" element={<Header />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default Navbar;
