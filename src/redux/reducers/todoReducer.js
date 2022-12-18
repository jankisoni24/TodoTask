import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    addTodoError: "",
    todoData: []
}

export const todoReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADDTODO_ERROR:
            return {...state, addTodoError:payload};
        case ActionTypes.ADD_TODO:
            return {...state, todoData:payload};
        case ActionTypes.TODO_DATA:
            return {...state, todoData:payload};
        case ActionTypes.DELETE_TODO:
            return {...state, todoData:payload};
        case ActionTypes.EDIT_TODO:
            return {...state, todoData:payload};
        default:
            return state;
    }
}