import actionTypes from "../actions/actionTypes";

const initState = {
    login: {
        currentUser: null,
        isFitching: false,
        success: false,
        error: false,
        message: ''
    },
    signup: {
        currentUser: null,
        success: false,
        error: false,
        isFitching: false,
        message: ''
    }
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_START:
            return {
                ...state.signup,
                signup: {
                    isFitching: true
                }
            }
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state.signup,
                signup: {
                    currentUser: action.payload,
                    success: true,
                    error: false,
                    isFitching: false,
                }
            }
        case actionTypes.SIGNUP_FAIL:
            return {
                ...state.signup,
                signup: {
                    success: false,
                    error: true,
                    isFitching: false,
                    message: action.payload
                }
            }
        case actionTypes.LOGIN_START:
            return {
                ...state.login,
                login: {
                    isFitching: true
                }
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state.login,
                login: {
                    currentUser: action.payload,
                    isFitching: false,
                    success: true,
                    error: false
                }
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state.login,
                login: {
                    isFitching: false,
                    success: false,
                    error: true,
                    message: action.payload
                }
            }
        case actionTypes.LOGOUT_USER:
            return {
                ...state.login,
                login: {
                    currentUser: null,
                    isFitching: false,
                    success: false,
                    error: false,
                    message: ''
                }
            }
        default:
            return state;
    }
}

export default authReducer;