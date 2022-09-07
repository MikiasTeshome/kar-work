import React, { Component } from 'react';

class ReusableCompo extends Component {
    render() {
        return (
            <>
                    <div className="card">
                               <img src={this.props.imgSrc} alt="apple" />
                               <div className="card-body">
                                   <div className="row">
                                       <div className="col">
                                           <p><b>{this.props.title}</b></p>
                                       </div>
                                       <div className="col-8">
                                           <p>Old price:$<del><b>{this.props.oldprice}</b></del></p>
                                           <p>New price:${this.props.newprice}</p>
                                       </div>
                                   </div>
                               </div>
                    </div>
            </>
        );
    }
}

export default ReusableCompo;