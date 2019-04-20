import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED } from "../actions/actionTypes";
const INITIAL_STATE = { name: null, email: null, isLoading: false, token: ''}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {...state, name: action.payload.name,email: action.payload.email, token: action.payload.token}
            break;
        case USER_LOGGED_OUT:
            return {...INITIAL_STATE}
            break;
        case LOADING_USER:
            return {...state, isLoading: true}
            break;
        case USER_LOADED:
            return {...state, isLoading: false}
            break;
        default:
            return state
            break;
    }
}

export default reducer