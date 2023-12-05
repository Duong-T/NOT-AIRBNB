import actionTypes from "../actions/actionTypes";

const initState = {
    currentUser: null,
    pending: false,
    error: false
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_START:
            return {
                ...state,
                pending: true
            }
        case actionTypes.UPDATE_USER_SUCCESS:
        case actionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                currentUser: action.payload,
                error: false
            }
        case actionTypes.UPDATE_USER_FAIL:
        case actionTypes.GET_USER_FAIL:
            return {
                ...state,
                pending: false,
                error: true
            }

        default:
            return state;
    }
}

export default userReducer