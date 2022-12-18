import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    userData: {}
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.USER_SIGNUP:
            return {...state, userData:payload};
        case ActionTypes.USER_LOGIN:
            return {...state, userData:payload};
        case ActionTypes.USER_LOGOUT:
            return {...state, userData:payload};
        default:
            return state;
    }
}