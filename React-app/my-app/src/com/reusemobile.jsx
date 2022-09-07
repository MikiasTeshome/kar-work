import React, { Component } from 'react';

class reusemobile extends Component {
    render() {
        return (
            <div>
                    <div className="card" >
                        <img className="card-img-top" src={this.props.img}/>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.title}</h4>
                            <p className="card-text">{this.props.contain}</p>
                           
                        </div>
                    </div>
 
            </div>
           
        );
    }
}

export default reusemobile;