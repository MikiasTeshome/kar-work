import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import HOME from './Home';
import ABOUT_ME from './ABOUT_ME';
import EDUCATION from './EDUCATION';
import PORTFOLIO from './PORTFOLIO.jsx';
import ACHIEVEMENT from './ACHIEVEMENT';


function navbar(props) {

    const numbers={'/Home':'HOME','/ABOUT_ME':'ABOUT_ME','/EDUCATION':'EDUCATION','/PORTFOLIO':'PORTFOLIO','/ACHIEVEMENT':'ACHIEVEMENT'}
    const returndata = Object.entries(numbers).map((res,i,arr)=>{
    return (<li className="nav-item" key={i}>
    <Link className="nav-link text-white text1" to={res[0]}>{res[1]}</Link>
  </li>
    )
})

    return (
        <>
        <div className='photo'>
         <div className="photo1">
      <img className='image' src="../image/Digal1.jpg" alt="image" />
         </div>
         <div className='photo2'>
        <Router>
        
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container About_me ">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
       {returndata}
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path="/Home" element={<HOME />}/>
    <Route path="/ABOUT_ME" element={<ABOUT_ME />}/>
    <Route path="/EDUCATION" element={<EDUCATION />}/>
    <Route path="/PORTFOLIO" element={<PORTFOLIO />}/>ACHIEVEMENT
    <Route path="/ACHIEVEMENT" element={<ACHIEVEMENT />}/>
    
</Routes>
       
        </Router>
        </div>
        </div>
        </>
    );
}

export default navbar;