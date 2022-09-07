import React, { Component } from 'react';

class loop extends Component {
    render() {
        // ************* for *************
        
         const data = [12,23,34,45];
        // for(let index=0;index<data.length;index++)
        // {
        //     const element = data[index];
        //     console.log(element);
        // }


        // ************ for in ****************
        // for(const key in data)
        // {
        //     if(data.hasOwnProperty.call(key,data))
        //     {
        //         const element = data[key];
        //         console.log(element);
        //     }
        // }


        // ********* for of *************

        // for (const key of data)
        // {
        //     console.log(key);
        // }


        // ******* for each ***********

        // var myvar = data.forEach(element=>{
        //     console.log(element);
        //     return element;})

        // map
        const returndata = data.map((res)=>{
            return <p> {res} </p>
        })
        console.log(returndata);
        return (
            <>
            <div>
                {returndata}
            </div></>
        );
    }
}

export default loop;