import actionTypes from "./actionTypes";
import axios from "axios";
import { baseURL } from "../../utils/constant";

export const signupUser = async (user, dispatch, setOpenSignup, setOpenUpdate) => {
    dispatch({
        type: actionTypes.SIGNUP_START
    });
    try {
        const response = await axios.post(`${baseURL}/api/auth/register`, user, {
        });
        dispatch({
            type: actionTypes.SIGNUP_SUCCESS,
            payload: response.data,
        })
        setOpenSignup(false);
        setOpenUpdate(true);
    } catch (err) {
        console.log(err.response.data)
        dispatch({
            type: actionTypes.SIGNUP_FAIL,
            data: null
        });
    }
}

export const loginUser = async (user, dispatch, setOpenLogin) => {
    dispatch({
        type: actionTypes.LOGIN_START
    })
    try {
        const response = await axios.post(`${baseURL}/api/auth/login`, user);
        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: response.data
        });
        setOpenLogin(false)
        // navigate(state?.path || "/");
    } catch (err) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            data: null
        })
    }
}

export const logoutUser = async (dispatch) => {
    dispatch({
        type: actionTypes.LOGOUT_USER
    })
}
