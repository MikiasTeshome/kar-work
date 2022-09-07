const intialState = {
    list:[]
}
const todoReducers=(state=intialState,action)=>{
    switch (action.type)
     {
        case 'ADDTODO':
            // console.log("called");
            const id = action.payload.id;
            const data = action.payload.data;
            console.log(data);
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id : id,
                        data : data
                    }
                ]
            }


        case 'DELETETODO':
           console.log("delete called");

        case 'REMOVETODO':
            console.log("remove called");
            
        default:
           return state;
    }
}
export default todoReducers;

