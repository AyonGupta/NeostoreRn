import CommonMethods from "../../Utilities/Common/CommonMethods"
import * as LocalStorageKeys from "../../Utilities/Constants/LocalStorageKeys";
const LoginViewModel = 
{
    ValidateEmail : (email) => 
    {
        return CommonMethods.CheckEmailValid(email)
    },
    
    ValidatePassword : (password) => 
    {
        return CommonMethods.CheckEmptyString(password)
    },
    SaveLoginStatus : () => 
    {
        return CommonMethods.SaveData (LocalStorageKeys.KIsLogin, 'true')
    },
    SaveLoginData :  (data, completion) => 
    {
        CommonMethods.SaveData (LocalStorageKeys.KUSERDATA,
            data.toString(),
            (status) => 
            {
                completion (status)
            })
        }
    }
    export default LoginViewModel