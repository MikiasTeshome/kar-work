import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function UseValidation(props) {

    const inp = useRef(null)
    const Btnclick=()=>{
        inp.current.focus()
      
        console.log(inp.current)
    }
   
    const[email,setemail]=useState('');
    const[pass,setpass]=useState('');

    const[allEntry,setallEntery]=useState([]);
    const SubmitForm=(e)=>{
        
        e.preventdefault();

        if(email && pass)
        {
            const NewEntry={id :new Date().getTime(),email:email,pass:pass}
            setallEntery([...allEntry,NewEntry])
            console.log(allEntry);

            setemail('');
            setpass('');
           
            
        }
        else{
            alert("plz fill the data")
        }
       
    }
    
    console.log("called");
    const NameBlank=(e)=>{

        if(email=="")
        {
            alert('plz enter name');
        }
         
    }
   
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        <form action="" onSubmit={SubmitForm}>
                            
                            <label htmlFor="email" >Email</label>
                            <input type="text" name='email' id="email"  value={email} onChange={(e)=>setemail(e.target.value)} onBlur={NameBlank}  ref={inp}/><br /><br />
                            <label htmlFor="password" >password</label>
                            <input type="password" name='password' id="password" value={pass} onChange={(e)=>setpass(e.target.value)} onBlur={NameBlank} /><br /><br />
                            <input type="text" className='btn btn-primary' value='Login' onClick={Btnclick}/>
                           
                            </form> 
                    </div>
                </div>
        </div>
        </>
    );
}

export default UseValidation;
