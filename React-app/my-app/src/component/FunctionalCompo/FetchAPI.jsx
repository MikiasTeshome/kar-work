import React, { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function FetchAPI(props) {
    const[data,setdata]=useState({});
    const[Loader,setLoader]=useState("pending");

    useLayoutEffect(()=>{
        setTimeout(() => {
            setLoader("Loading...");
        }, 1000);
    },[])

useEffect(()=>{
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
        .then(Response=>{
            console.log(Response);
            setdata(Response);
        }).catch(error=>{
            console.log(error);
        })
               
    }, 2000);
},[])

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    {Loader}
                    {Object.entries(data).map(function(item,i){
                    return <li key={i}>{item[1].title}</li>
                    
                    })}

                </div>
            </div>
        </div>
        </>
    );
}

export default FetchAPI;