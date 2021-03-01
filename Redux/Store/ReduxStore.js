import { createStore, combineReducers, applyMiddleware } from "redux"  
import thunk from "redux-thunk";  
import LoginReducer from "../Reducer/LoginReducer";
import RegisterReducer from "../Reducer/RegisterReducer";
import ProductReducer from "../Reducer/ProductReducer";


const RootReducer = combineReducers ({
    loginReducer : LoginReducer,
    registerReducer : RegisterReducer,
    productReducer : ProductReducer
})

const ConfigureStore = () => createStore (RootReducer, applyMiddleware (thunk))

export default ConfigureStore