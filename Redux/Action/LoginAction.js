import { LOADER, LOGIN, LOGIN_FAIL } from "../Type/LoginType";
import LoginService from '../../Service/LoginService'
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
                console.log ('login data = ', data)
                dispatch({
                    type : LOGIN,
                    data : data
                })
            }, 
            error => {
                console.log ('login error = ', error)
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
