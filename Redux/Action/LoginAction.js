import { LOADER, LOGIN, LOGIN_FAIL } from "../Type/LoginType";
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

                LoginViewModel.SaveLoginStatus()

                dispatch({
                    type : LOGIN,
                    data : data
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

    const ShowLoader = () => {
        return {
            type : LOADER
        }
    }
