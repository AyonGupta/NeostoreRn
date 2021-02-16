import { createStore, combineReducers, applyMiddleware } from "redux"    
import LoginReducer from "../Reducer/LoginReducer";
import createSagaMiddleware from "redux-saga";

const RootReducer = combineReducers ({
    loginReducer : LoginReducer
})

const sagaMiddleWare = createSagaMiddleware()
const ConfigureStore = () => createStore (RootReducer, applyMiddleware (sagaMiddleWare))
// sagaMiddleWare.run()
export default ConfigureStore