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
    }
}
export default LoginViewModel