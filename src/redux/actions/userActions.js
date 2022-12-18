import { ActionTypes } from '../constants/actionTypes';
//import '../../../jsonFiles'

export const userSignUp = (userData) => async (dispatch) => {
    localStorage.setItem('userData', btoa(JSON.stringify(userData)));
    const data = await JSON.parse(atob(localStorage.getItem('userData')));
    dispatch({
        type: ActionTypes.USER_SIGNUP,
        payload: data
    });
}

export const userSignIn = (userData) => async (dispatch) => {
    localStorage.setItem('userData', btoa(JSON.stringify(userData)));
    const data = await JSON.parse(atob(localStorage.getItem('userData')));
    dispatch({
        type: ActionTypes.USER_LOGIN,
        payload: data
    });
}

export const userLogout = (userData) => async (dispatch) => {
    localStorage.setItem('userData', btoa(JSON.stringify(userData)));
    const data = await JSON.parse(atob(localStorage.getItem('userData')));
    dispatch({
        type: ActionTypes.USER_LOGOUT,
        payload: data
    });
}