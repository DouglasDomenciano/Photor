import { createStore, combineReducers } from "redux";
import userReducer from './reducers/user'
import postReducer from './reducers/posts'

const reducers = combineReducers({ user: userReducer, posts: postReducer })
const storeConfig = () => { return createStore(reducers) }

export default storeConfig