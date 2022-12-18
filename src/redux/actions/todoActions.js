import { ActionTypes } from '../constants/actionTypes';

export const addTodoError = (errorMsg) => async (dispatch) => {
    dispatch({
        type: ActionTypes.ADDTODO_ERROR,
        payload: errorMsg
    });
}

export const addTodo = (todoData) => async (dispatch) => {
    let data;
    if(localStorage.getItem('todoData') != null) {
        data = await JSON.parse(atob(localStorage.getItem('todoData')));
    } else {
        data = [];
    }
    data.push(todoData);
    localStorage.setItem('todoData', btoa(JSON.stringify(data)));
    dispatch({
        type: ActionTypes.ADD_TODO,
        payload: data
    });
}

export const fetchTodoData = (data) => async (dispatch) => {
    dispatch({
        type: ActionTypes.TODO_DATA,
        payload: data
    });
}

export const deleteTodo = (todoId) => async (dispatch) => {
    let data;
    if(localStorage.getItem('todoData') != null) {
        data = await JSON.parse(atob(localStorage.getItem('todoData')));
    } else {
        data = [];
    }
    let filteredData = data.filter((item) => {return item.id != todoId});
    localStorage.setItem('todoData', btoa(JSON.stringify(filteredData)));
    dispatch({
        type: ActionTypes.DELETE_TODO,
        payload: filteredData
    });
}

export const editTodo = (todo) => async (dispatch) => {
    let data;
    if(localStorage.getItem('todoData') != null) {
        data = await JSON.parse(atob(localStorage.getItem('todoData')));
    } else {
        data = [];
    }
    console.log(todo);
    let filteredData = [];
    data.forEach((item) => { 
        if(item.id === todo.id) {
            filteredData.push(todo);
        } else {
            filteredData.push(item);
        }
    });
    console.log(filteredData);

    localStorage.setItem('todoData', btoa(JSON.stringify(filteredData)));
    dispatch({
        type: ActionTypes.EDIT_TODO,
        payload: filteredData
    });
}