import React, { forwardRef, useImperativeHandle, useRef, inputref } from 'react';

function UseImperactiveHandle(props,ref) {
{
    const inputref=useRef(null);
    useImperativeHandle(ref,()=>({
        focus:()=>{
            inputref.current.focus();
            console.log(inputref.current);
        }
    }));
}
function Checkdata() {
    console.log(inputref.current.value);
    
}
    return (
        <div>
           <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <input type="text" value={inputref}/>
                    <input type="button" value="check ref" onClick={Checkdata}/>
                </div>
            </div>
           </div>
        </div>
    );
}
UseImperactiveHandle = forwardRef(UseImperactiveHandle);
export default UseImperactiveHandle;