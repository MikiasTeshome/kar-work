import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
}from 'react-router-dom';
import Home from './Home';
import Mobile from './mobile';
import State from './state';
import Lifecycle from './statelifecycle';
import API from './API';
import POST from './POST';
import Functiontest from './functional/01functiontest';
import FetchAPI from './fetchAPI';
import ButtonClick from './ButtonClick';
import Listview from './Listview';
import Listicon from './Listicon';
import Addusestate from './functional/02Addusestate';
import UseEffect from './functional/UseEffect';
import UseRef from './functional/UseRef';
import FunctionAPI from './functional/FunctionAPI';



class header extends Component {
  render() {
    const number={'/Home':'Home','./mobile':'Mobile','/state':'State','/statelifecycle':'Lifecycle',
    '/API':'API','/POST':'POST','/FetchAPI':'FetchAPI','/ButtonClick':'ButtonClick','/Functiontest':'Functiontest',
  '/Listview':'Listview','/Listicon':'Listicon','/Addusestate':'Addusestate',
'/UseEffect':'UseEffect','/UseRef':'UseRef','/FunctionAPI':'FunctionAPI'}
    const returndata=Object.entries(number).map((res,i,arr)=>{
      return <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>{res[1]}</Link>
      </li>
    })
    return (
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
  <Route path='/Home' element={<Home/>}/>
  <Route path='/mobile' element={<Mobile/>}/>
  <Route path='/state' element={<State/>}/>
  <Route path='/statelifecycle' element={<Lifecycle/>}/>
  <Route path='/API' element={<API/>}/>
  <Route path='/POST' element={<POST/>}/>
  <Route path='/FetchAPI' element={<FetchAPI/>}/>
  <Route path='/ButtonClick' element={<ButtonClick/>}/>
  <Route path='/Functiontest' element={<Functiontest/>}/>
  <Route path='/Listview' element={<Listview/>}/>
  <Route path='/Listicon' element={<Listicon/>}/>

  <Route path='/Addusestate' element={<Addusestate/>}/>
  <Route path='/UseEffect' element={<UseEffect/>}/>
  <Route path='/UseRef' element={<UseRef/>}/>
  <Route path='/FunctionAPI' element={<FunctionAPI/>}/>
  
</Routes>

      </div>
      </Router>

    );
  }
}

export default header;