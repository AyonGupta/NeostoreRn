import { createStore, combineReducers, applyMiddleware } from "redux"  
import thunk from "redux-thunk";  
import LoginReducer from "../Reducer/LoginReducer";
import RegisterReducer from "../Reducer/RegisterReducer";


const RootReducer = combineReducers ({
    loginReducer : LoginReducer,
    registerReducer : RegisterReducer
})

const ConfigureStore = () => createStore (RootReducer, applyMiddleware (thunk))

export default ConfigureStore