import React from 'react';
import { useRef } from 'react';


function UseValidation() {
  
        const name = useRef(null)
        const btnclick=()=>{
            name.current.focus();
        console.log(name.current);
        }
   
    function validateform()
        {
            var name = document.getElementById('name').value;
            var pass =  document.getElementById('password').value;
            var email =  document.getElementById('email').value;
            if(name == "")
            {
                alert("Please enter the data in name Field");
                document.getElementById('name').focus();
                return false;
            }
            var nameptrn =/^[a-zA-Z]{3,20}$/;
            if(!nameptrn.test(name))
            {
                alert("Please enter only characters name Field");
                document.getElementById('name').focus();
                return false;
            }
            if(pass == "")
            {
                alert("Please enter the data in Password Field");
                document.getElementById('password').focus();
                return false;
            }
            var passptrn =/(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[~!@#$%^&*_])[a-zA-Z0-9~!@#$%^&*_]{6,12}$/;
            if(!passptrn.test(pass))
            {
                alert("Please enter  one uppercase,number,lowercase and special character in password field");
                document.getElementById('password').focus();
                return false;
            }
            if(email == "")
            {
                alert("Please enter the data in Email Field");
                document.getElementById('email').focus();
                return false;
            }
            var emailptrn =/^[a-z0-9_.-]+@+[a-z]{3,6}\.[a-z]{2,3}$/;
            if(!emailptrn.test(email))
            {
                alert("Please enter  Valid Email Id");
                document.getElementById('password').focus();
                return false;
            }

        }
    
    return (

                

        <div>


        <label>Name:</label>
        <input type="text" name="name" id="name" ref={name}/>
        <br/><br/>
        <label>Email:</label>
        <input type="text" name="email" id="email" />
        <br/><br/>
        <label>Password:</label>
        <input type="password" name="password" id="password" />
        <br/><br/>

        <button onClick={validateform}>click</button>

            
            
        </div>
    );
}

export default UseValidation;