import React, { Component } from 'react';
import PropTypes from 'prop-types';

class POST extends Component {
    constructor(props) {
        super(props);
        this.state={
            Userdata:'',
            status:'Pending...',
            data:'refersh...'
        }
        console.log("constructor called");
    }

   
    componentDidMount() {
        console.log("did mount called.");

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                console.log("response");
                return response.json();
            }).then ((response)=>{
                var HTMLDATA='';
                response.forEach(element => {
                    HTMLDATA+=`<tr>
                    <td>${element.userId}</td>
                    <td>${element.id}</td>
                    <td>${element.title}</td>
                    </tr>`

                });
                document.querySelector('#data').innerHTML = HTMLDATA
                console.log(response);
            });
        }, 2000);
    }
      btnChange=()=>{
        setTimeout(() => {
            this.setState({data:'REFERSH..'})
        }, 1000);
    }
   
    render() {
        console.log("Render caleed.");
        return (
            <>
                {this.state.status}
                <button onClick={this.btnChange}>Click me</button>
                {this.state.data}

                <table border="2" align="center">
                    <thead>
                        <tr>
                            <td>USERID</td>
                            <td>ID</td>
                            <td>TITLE</td>
                        </tr>
                      
                    </thead>
                    <tbody id="data"></tbody>
                </table>
            
            </>
        );
    }
}



export default POST;