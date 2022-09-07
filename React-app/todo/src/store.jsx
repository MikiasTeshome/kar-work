import { combineReducers, createStore } from "redux";
import rootReducer from "./reducers/index";

const asyncMID = store=>next=>action=>{
    if(action.promise)
    {
        action.promise.then(response=>response.json()).
        then((result)=>{
            console.log(result);
            store.dispatch({type:action.type,success:true,playload:result});
        })
    }
    else
    {
        next(action);
    }
}

const store =createStore(combineReducers({
    listdata : rootReducer,
    
}));
export default store;