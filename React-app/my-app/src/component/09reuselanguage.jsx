import React, { Component } from 'react';

class reuselanguage extends Component {
    render() {
        return (
            <>
            
            <div className="container mt-3">
            <h2>{this.props.heading}</h2>
            <div className="card-body">
            <div className="card img-fluid">
                <img className="card-img" src={this.props.images} alt="java" width="500%" height="500px"/>
                <div className="card-img-overlay">
                    <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.contain}</p>
                        {/* <button className="btn ab"  >{this.props.button} */}
                    {/* </button> */}
                    <button className="ab">{this.props.button}</button>
                </div>
            </div>
            </div> 
            </div>  
            </>
        );
    }
}

export default reuselanguage;