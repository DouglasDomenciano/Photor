import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/actionTypes";
const INITIAL_STATE = { name: null, email: null}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {...state, name: action.payload.name,email: action.payload.email}
            break;
        case USER_LOGGED_OUT:
            return {...state, name: null,email: null}
            break;
        default:
            return state
            break;
    }
}

export default reducer