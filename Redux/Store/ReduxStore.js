import { createStore, combineReducers, applyMiddleware } from "redux"  
import thunk from "redux-thunk";  
import LoginReducer from "../Reducer/LoginReducer";
import RegisterReducer from "../Reducer/RegisterReducer";
import ProductReducer from "../Reducer/ProductReducer";
import ProductDetailReducer from "../Reducer/ProductDetailReducer"
import MyAccountReducer from "../Reducer/MyAccountReducer"
import MyCartReducer from "../Reducer/MyCartReducer"

const RootReducer = combineReducers ({
    loginReducer : LoginReducer,
    registerReducer : RegisterReducer,
    productReducer : ProductReducer,
    productDetailReducer : ProductDetailReducer,
    myAccountReducer : MyAccountReducer,
    myCartReducer : MyCartReducer
})

const ConfigureStore = () => createStore (RootReducer, applyMiddleware (thunk))

export default ConfigureStore