import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function UseValidation(props) {
    const inp = useRef(null)
    const Btnclick=()=>{
        inp.current.focus()
      
        console.log(inp.current)
    }

    const [email,setemail] = useState(" ");
    const [pass,setpass] = useState(" ");
    const [allEntry,setallEntry] = useState([]);
    const SubmitForm = (e) =>{
        e.preventDefault();
        if(email && pass)
        {
            const NewEntry={id : new Date().getTime(),email:email,pass:pass}
            setallEntry([...allEntry.NewEntry]);
            console.log(allEntry);

            setemail('');
            setpass('');
        }
        else
        {
            alert("Plz fill in the blanks ")
        }

    }
    const NameBlank=()=>{
    
        if(email=="")
        {
            alert("Plz enter email")
        }
    }
    return (
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <form action="" onSubmit={SubmitForm}>
                       <lable htmlFor="email">Email</lable>                    
                        <input type="text" name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} onBlur={NameBlank} ref={inp}/>
                        <lable htmlFor="pass">Password</lable>         
                        <input type="password" name="pass" id="pass" value={pass} onChange={(e)=>setpass(e.target.value)} onBlur={NameBlank} />
                     <input type="submit" className='btn btn-primary' value="login" onClick={Btnclick}>submit</input>
                    </form>

                </div>
            </div>
        </div>
        </>
    );
}

export default UseValidation;