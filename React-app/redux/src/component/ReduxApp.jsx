import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from '../actions/index';

function ReduxApp(props) {
    const mystate = useSelector((state)=>state.Changenumber);
    const dispatch = useDispatch();
    return (
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <button className='btn btn-primary m-2' ><a onClick={()=>dispatch(decNumber())}>DEC</a></button>
                    <input type="text" name="text" value={mystate}/>
                    <button className='btn btn-primary m-2'><a onClick={()=>dispatch(incNumber())}>INC</a></button>
                </div>
            </div>
        </div>
        </>
    );
}

export default ReduxApp;