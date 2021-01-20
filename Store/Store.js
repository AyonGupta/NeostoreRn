import { combineReducers, createStore } from 'redux';
import LoginReducer from '../Reducers/LoginReducer'
const rootReducer = combineReducers ({
    loginReducer : LoginReducer
})

const configureStore = () => createStore(rootReducer)
export default configureStore