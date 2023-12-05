import actionTypes from "./actionTypes";
import axios from "axios";
import { baseURL } from "../../utils/constant";

export const getCategories = async (dispatch) => {
    try {
        const response = await axios.get(`${baseURL}/api/filter/get-all-filter`);
        dispatch({
            type: actionTypes.GET_CATEGORIES_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CATEGORIES_FAIL
        })
    }
}