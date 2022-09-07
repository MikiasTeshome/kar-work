import React, { Component } from 'react';
import Reusemobile from './reusemobile';

class mobile extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">                  
                    <div className='col-3'>
                        <Reusemobile img="img/mi.jpg" title="mi phone" contain="this is a mi phone hear.."> </Reusemobile>
                    </div>   
                    <div className='col-3'>
                        <Reusemobile img="img/vivo.jpg" title="vivo phone" contain="this is a vivo phone hear.."> </Reusemobile>
                    </div>              
                </div>
                </div>
            </>
        );
    }
}

export default mobile;