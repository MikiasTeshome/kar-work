import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
}from "react-router-dom";
 import Home from './01Home';
 import About from './02About';
 import Product from './03product';
 import Loop from './04loop';
 import Compo from './05compo';
 import Language from './07language';
 import Stste from './10stste';
 import Merragefunction from './11merragefunction';
 import Lifecycle from './12statelifecycle';
//  import Cake from './08Cake';
 import API from './13API';
 import FetchAPI from './fetchAPI';
 import ButtonClick from './14ButtonClick';
 import Usestate from './FunctionalCompo/01usestate';
 import UseEffect from './FunctionalCompo/02UseEffect';
 import UselayoutEffect from './FunctionalCompo/03UselayouteEffect';
 import UseRef from './FunctionalCompo/04UseRef';
 import UseReducers from './FunctionalCompo/UseReducers';
 import UseContext from './FunctionalCompo/UseContext';
 import FunctioAPI from './FunctionalCompo/FetchAPI';
 import UseDebugValue from './FunctionalCompo/UseDebugValue';
 import UseImperactiveHandle from './FunctionalCompo/UseImperactiveHandle';



class header extends Component {
    render() {

        const numbers = {'/home':'Home','/about':'About','/product':'Product','/loop':'Loop','/compo':'Compo',
        '/language':'Language','/stste':'Stste','/merragefunction':'Merragefunction','/statelifecycle':'Lifecycle','/API':'API',
        '/fetchAPI':'fetchAPI','/ButtonClick':'ButtonClick','/Usestate':'Usestate','/UseEffect':'UseEffect',
      '/UselayoutEffect':'UselayoutEffect','/UseRef':'UseRef','/UseReducers':'UseReducers','/UseContext':'UseContext',
      '/FunctioAPI':'FunctioAPI','/UseDebugValue':'UseDebugValue','/UseImperactiveHandle':'UseImperactiveHandle'}
        const returndata = Object.entries(numbers).map((res,i,arr)=>{
        return <li className="nav-item" key={i}>
               <Link className='nav-link' to={res[0]}>{res[1]}</Link>
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
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/loop" element={<Loop/>}/>
              <Route path="/product/*" element={<Product/>}/>
              {/* <Route path="/Cake" element={<Cake/>}/> */}
              <Route path="/compo" element={<Compo/>}/>
              <Route path="/language" element={<Language/>}/>
              <Route path="/stste" element={<Stste/>}/>
              <Route path="/merragefunction" element={<Merragefunction/>}/>
              <Route path="/statelifecycle" element={<Lifecycle/>}/>
              <Route path="/API" element={<API/>}/>
              <Route path="/fetchAPI" element={<FetchAPI/>}/>
              <Route path="/ButtonClick" element={<ButtonClick/>}/>
              <Route path="/Usestate" element={<Usestate/>}/>
              <Route path="/UseEffect" element={<UseEffect/>}/>
              <Route path="/UselayoutEffect" element={<UselayoutEffect/>}/>
              <Route path="/UseRef" element={<UseRef/>}/>
              <Route path="/UseReducers" element={<UseReducers/>}/>
              <Route path="/UseContext" element={<UseContext/>}/>
              <Route path="/FunctioAPI" element={<FunctioAPI/>}/>
              <Route path="/UseDebugValue" element={<UseDebugValue/>}/>
              <Route path="/UseImperactiveHandle" element={<UseImperactiveHandle/>}/>
             
              
            </Routes>
          
            </div>
         
          </Router>
        );
    }
}
export default header;