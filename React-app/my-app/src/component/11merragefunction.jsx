import React, { Component } from 'react';

class merragefunction extends Component  {
    constructor(props){
        super(props);
        this.state={
            Name:"abc",
            Ganeshpooja:"10:00 am",
            Haldi:"03:00 pm",
            Mahendi:"05:00 pm",
            Dance:"09:00 pm"
        }
    }

    mahendi=()=>{
     return <p><h3>Mahendi ceremony : {this.state.Mahendi}</h3></p>
     }

    dance=()=>{
        return <p><h3>Dance ceremony : {this.state.Dance}</h3></p>
        }
   
    Changedata=()=>{
        this.setState({Name:"abc patel",Ganeshpooja:"red sari",Haldi:"Yellow dress code",Mahendi:"green dress code",Dance:"party dress code"});
        console.log("called");
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col">
            <h1>Merrage Function</h1>
            <p><h3>full name : <h3>{this.state.Name}</h3></h3></p><br /><br />
                

                <p><h3>Ganesh - pooja ceremony :  <h3>{this.state.Ganeshpooja}</h3></h3></p><br /><br />
               

                <p><h3>Haldi ceremony : <h3>{this.state.Haldi}</h3></h3></p><br /><br />
                
                
                
                <p><h3>{this.mahendi()} </h3></p>  <br /><br />  

                 <p><h3>{this.dance()} </h3></p><br /><br />     

                <button onClick={this.Changedata}>Click</button> 
                  
               
                </div>
                </div>
                </div>
            </>
        );
    }
}


export default merragefunction;