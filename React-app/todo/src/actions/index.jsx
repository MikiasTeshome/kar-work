export const AddTodo = (data) => {
    return{
        type : "ADDTODO",
        payload:{
            id : new Date().getTime.toString(),
            data : data,
        }
    }
}

export const DeleteTodo = () => {
    return{
        type : "DELETETODO",
    }
}

export const RemoveTodo = () => {
    return{
        type : "REMOVETODO",
    }
}




