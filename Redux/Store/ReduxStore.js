import { createStore, combineReducers } from "redux"    
import LoginReducer from "../Reducer/LoginReducer";

const RootReducer = combineReducers ({
    loginReducer : LoginReducer
})

const ConfigureStore = () => createStore (RootReducer)

export default ConfigureStore