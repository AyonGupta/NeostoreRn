import { LOGIN, LOGIN_ASYNC } from "../Type/LoginType";
import { takeEvery, put, delay } from "redux-saga/effects";


export function* PerformLogin (email, pass) 
{
    yield takeEvery (LOGIN, PerformLoginAsyn(email,pass))
} 

export function* PerformLoginAsyn (email, pass) 
{
    yield delay (4000)
    yield put ({type : LOGIN_ASYNC, data : {'name' : 'Ayon'}})
}