import { LOGIN } from "../Type/LoginType";
import LoginService from '../../Service/LoginService'
export const PerformLogin = (email, pass) => 
    {
        LoginService.LoginUser(email,pass)
        .then (
            data => {
                return {
                    type : LOGIN,
                    data : data
                }
            }, 
            error => {
                return error 
            }
        )
        //  LoginService.PerformLogin(email,pass)
        //  .
        
        // type : LOGIN,
        // data : {'email' : email, 'id' : Math.random()}
    }

