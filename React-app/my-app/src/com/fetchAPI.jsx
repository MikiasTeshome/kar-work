import React, { Component } from 'react';

class fetchAPI extends Component {

    constructor(props){
        super(props);
        this.state={
            fetchdata:'',
            status:'Panding'
        }
        console.log("constructor called..");
    }

       componentDidMount(){

        setTimeout(() => {

            fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then((res)=>{
                return res.json();
                // console.log(res);
            }).then((res)=>{

                    var HTMLDATA='';
                    res.forEach(element => {
                        HTMLDATA+=`<tr>
                        <td>${element.postId}</td>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.email}</td>
                        <td>${element.body}</td>
                        </tr>`
                        
                    });
                document.querySelector("#data").innerHTML=HTMLDATA
                this.setState({fetchdata:res,status:"success.."})
                console.log(res);
            })
        }, 6000);
            console.log("did mount called");

       }

    render() {
        console.log("render called");
        return (
           <>

           {this.state.status}
           
           <table border="4" align="center">
            <thead>
                <tr>
                    <td>postId</td>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>body</td>
                </tr>
            </thead>
            <tbody id="data"></tbody>
           </table>
           {this.setstate=="success.."?<div>Data{JSON.stringify(this.state.fetchdata)}</div>:"did you print"}
           </>
        );
    }
}

export default fetchAPI;