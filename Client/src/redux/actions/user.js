import actionTypes from "./actionTypes";
import axios from "axios";
import { baseURL } from "../../utils/constant";

export const getUser = async (dispatch, id) => {
    try {
        const response = await axios.get(`${baseURL}/api/user/${id}`);
        dispatch({
            type: actionTypes.GET_USER_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_USER_FAIL
        })
    }
}

export const updateUser = async (user, dispatch, id) => {
    dispatch({
        type: actionTypes.UPDATE_USER_START
    });
    try {
        const response = await axios.put(`${baseURL}/api/user/${id}`, user);
        dispatch({
            type: actionTypes.UPDATE_USER_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.UPDATE_USER_FAIL
        })
    }
}