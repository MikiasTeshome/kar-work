import React from 'react';
import { useRef } from 'react';

function UseRef() {
    const inp = useRef(null)
    const btnclick=()=>{
        inp.current.focus();
    console.log(inp.current);
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <input type="text" ref={inp} />
                        <button onClick={btnclick}>click</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseRef;