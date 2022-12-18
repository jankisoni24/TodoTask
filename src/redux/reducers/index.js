import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { todoReducer } from './todoReducer';

const reducers = combineReducers({
    userData: userReducer,
    todoData: todoReducer
});

export default reducers;