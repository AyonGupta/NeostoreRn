import { createStore, combineReducers, applyMiddleware } from "redux"  
import thunk from "redux-thunk";  
import LoginReducer from "../Reducer/LoginReducer";

const RootReducer = combineReducers ({
    loginReducer : LoginReducer
})

const ConfigureStore = () => createStore (RootReducer, applyMiddleware (thunk))

export default ConfigureStore