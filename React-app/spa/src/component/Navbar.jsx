import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  }from 'react-router-dom';
  import Home from './Home';
  import About from './About';
  // import Header from './Header';
  import Programs from './Programs';
  import Contact from './contact';
  import Footer from './Footer';
  

  function Navbar(props) {
    const number={'/Home':'Home','/Programs':'Programs','/About':'About','/contact':'Contact','/Footer':'Footer'}
    const returndata=Object.entries(number).map((res,i,arr)=>{
        return <li className="nav-item " key={i}>
                   <Link className="nav-link" to={res[0]}>{res[1]}</Link>
               </li>
      })
     
      
    return (
        <>
        <Router>   
           <div>
         
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" >
                <div className="container-fluid ">
                <a className="navbar-brand" href="#"><img src="../img/tops.png" alt="logo" height="40px" width="150px"/></a>
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
  <Route path='/Home' element={<Home />}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  {/* <Route path='/Header' element={<Header/>}/> */}
  <Route path='/Programs' element={<Programs/>}/>
  <Route path='/Footer' element={<Footer/>}/>
  
 
</Routes>

      </div>
      </Router>
      </>
    );
}

export default Navbar;