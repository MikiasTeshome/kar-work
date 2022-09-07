import React from 'react';
import { useReducer } from 'react';
const InitialData = {count:0}

function render(state,action)
{
    switch (action.type) 
    {
        case 'Increment':
            return {count : state.count+1}
        case 'Decrement':
            return {count : state.count-1}
        case 'Reset':
            return {count : state.count=0}
        default:
                throw new Error();
    }
}

function UseReducers(props) {
    const[state,dispatch]=useReducer(render,InitialData);
    return (
       <>
         <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <button className='btn btn-info text-white' onClick={()=>dispatch({type:'Decrement'})}>Decerement</button>
                        <h2>{state.count}</h2>
                    <button className='btn btn-success text-white' onClick={()=>dispatch({type:'Increment'})}>Incerment</button>
                        <p></p>
                    <button className='btn btn-dark text-white' onClick={()=>dispatch({type:'Reset'})}>Reset</button>
                </div>
            </div>
         </div>
       </>
    );
}

export default UseReducers;