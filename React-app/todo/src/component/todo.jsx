import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {AddTodo} from '../actions/index';

function Todo(props) {
    const [inputData,setInputData] = useState('');
    const list = useSelector((state)=>state.listdata.list);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <h1>ToDo Application </h1>
                <div className="col-3">
                    <input type="text" className='form-control' value={inputData} onChange={(event)=>{setInputData(event.target.value)}}/>
                </div>
                <div className="col-3">
                    <button className='btn btn-primary' onClick={()=>{dispatch(AddTodo(inputData),setInputData(''))}}>ADD TASK</button>
                </div>
            </div>

            
            

                {/* {list.map((ele)=>{ */}
                    {(list || []).map((elem)=>{
                        return(
                            <div className="row mt-5">
                                <div className="col-3" key={elem.id}>
                                    <input type="text" className='form-primary' value={elem.data} ></input>
                                </div>
                                
                            </div>
                            
                        )
                    })
                }

        </div>
    );
}

export default Todo;