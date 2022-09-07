import React, { Component } from 'react';
import PropTypes from 'prop-types';

class  API extends Component {
    constructor(props) {
        super(props);
        this.state={
            UserData : ' ',
            status: 'Panding...',
            data : 'refresh'
        }
        console.log('Constructor called');
    }
   
    componentDidMount() {
        console.log("Didmount called");
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
                console.log(res);                           
                return res.json()
            }).then((resData)=>{
                this.setState({UserData:resData,status:'Completed'})
                console.log(resData);
            }).catch((ErrorHndl)=>{
                console.log(ErrorHndl);
          
        });
            
        }, 3000);
       
    }
     btnchange=()=>{
       setTimeout(() => {
         this.setState({data:"Refresh.."})
        
       }, 2000);
    }

    render() {
        console.log("render called");
        return (
           <>                    
            {this.state.status}
           
           <button onClick={this.btnchange}>Click me</button>
           {this.state.data}
           {this.state.status!='Completed'?'Loading...':"Will be print"}           
           </>
        );
    }
}
 
export default API;