import { LOADER, LOGIN, LOGIN_FAIL, LOGIN_FORCE } from "../Type/LoginType";
import LoginService from '../../Service/LoginService'
import LoginViewModel from "../../ViewModel/Login/LoginViewModel";
export const PerformLogin = (email, pass) => 
    {
        return dispatch => 
        {
             dispatch (ShowLoader())
            //  dispatch ({
            //      type : LOADER
            //  })
            dispatch (PerformAsynLogin (email, pass))
        }

    }

    //Fun name              // Param            //Function body
    const PerformAsynLogin = (email, pass) => async dispatch =>
    {
        LoginService.LoginUser(email,pass)
        .then (
            data => {

             LoginViewModel.SaveLoginData(data, (status) => {
                if (status) {
                    dispatch({
                        type : LOGIN,
                        data : data
                    })
                } else {
                    dispatch({
                        type : LOGIN_FAIL,
                        data : error
                    })
                }
             })
                
            }, 
            error => {
                dispatch({
                    type : LOGIN_FAIL,
                    data : error
                })
            }
        )
    }

export const PerformForceLogin = () => {

    return dispatch => {
        dispatch (ShowLoader ())
        dispatch (PerformAsyncForceLogin())
    }
}

const PerformAsyncForceLogin = () => async dispatch => dispatch ({
    type : LOGIN_FORCE
})

    export const ShowLoader = () => {
        return {
            type : LOADER
        }
    }
