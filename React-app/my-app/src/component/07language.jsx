import React, { Component } from 'react';
import Reuselanguage from './09reuselanguage';

class language extends Component {
    render() {
        return (
           <>
                <center><h1>Programing Language</h1></center>
                <div className='demo'>
                <div className="container" >
                    <div className="row">

                        <div className="col-3">
                            <Reuselanguage heading="java Script" images="img/java.png" title="java" contain="hello javascript" button="submit"/>
                        </div>
                        <div className="col-3">
                            <Reuselanguage heading="C++" images="img/c++.png" title="C++" contain="hello C++" button="submit"/>
                        </div>
                        <div className="col-3">
                            <Reuselanguage heading="ASP.Net" images="img/downloadasp.jpg" title="ASP.Net" contain="hello asp.net" button="submit"/>
                        </div>
                                                
                    </div>
                </div>
                </div>
           </>
        );
    }
}
export default language;