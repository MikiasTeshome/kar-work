import React, { Component } from 'react';
import ReusableCompo from './06ReusableCompo';

class  compo extends Component {
    render() {
        return (
            <>
               <div className="container">
                   <div className="row mt-3">

                       <div className="col-3 ">
                           <ReusableCompo imgSrc="img/apple.jpg" title="Apple" oldprice="50,000" newprice="20,000"/>
                       </div>

                       <div className="col-3 ">
                           <ReusableCompo imgSrc="img/mi.jpg" title="MI" oldprice="50,000" newprice="20,000"/>
                       </div>

                       <div className="col-3 ">
                           <ReusableCompo imgSrc="img/oppo.png" title="Oppo" oldprice="50,000" newprice="20,000"/>
                       </div>

                       <div className="col-3 ">
                           <ReusableCompo imgSrc="img/vivo.jpg" title="Vivo" oldprice="50,000" newprice="20,000"/>
                       </div>
                       <div className="col-3 ">
                           <ReusableCompo imgSrc="img/samsung.jpg" title="Samsung" oldprice="60,000" newprice="30,000"/>
                       </div>

                   </div>
                   
               </div>
            </>
        );
    }
}

export default compo;