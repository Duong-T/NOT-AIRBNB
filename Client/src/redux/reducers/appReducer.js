import actionTypes from "../actions/actionTypes"

const initState = {
    categories: []
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        case actionTypes.GET_CATEGORIES_FAIL:
            return {
                ...state,
                categories: []
            }
        default:
            return state;
    }
}

export default appReducer;