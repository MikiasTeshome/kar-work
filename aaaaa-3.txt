import React, { Component } from 'react';

class fetchAPI extends Component {
    constructor(props){
        super(props);
        this.state={
            fetchdata:'',
            status:'Panding...'
        }
        console.log("constructor called");
    }
    componentDidMount()
    {
        setTimeout(() => {
            console.log("dis mount called..");
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then((res)=>res.json()
        ).then((Response)=>{
            console.log(Response);
           
            // this.setState({})
           
                var HTMLDATA = '';
                Response.forEach(element => {
                    HTMLDATA+=`<tr>
                     <td>${element.postId}</td>
                     <td>${element.id}</td>
                     <td>${element.name}</td>
                     <td>${element.email}</td>
                     <td>${element.body}</td>
                    </tr>`
                    
            });
       
                 document.querySelector('#dispdata').innerHTML = HTMLDATA
                 this.setState({fetchdata:Response,status:'success'})
                 console.log(Response);

        }).catch((errorhandl)=>{
            console.log(errorhandl)
        });
        }, 1000);
        
        
    }
    render() {
        console.log("render called..");
        return (
            <>
                <table border='3' align="center">
                    <thead>
                        <tr>
                            <td>postId</td>
                            <td>id</td>
                            <td>name</td>
                            <td>email</td>
                            <td>body</td>
                        </tr>
                    </thead>
                    <tbody id="dispdata"></tbody>
                </table>
                {this.state.status=="success"?<div>Data{JSON.stringify(this.state.fetchdata)}</div>:'data is not found'}
            </>
              );
    }
}

export default fetchAPI;