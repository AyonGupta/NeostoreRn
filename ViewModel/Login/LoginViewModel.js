import CommonMethods from "../../Utilities/Common/CommonMethods";
const LoginViewModel = 
{
    ValidateEmail : (email) => 
    {
        CommonMethods.CheckEmailValid(email)
    },

    ValidatePassword : (password) => 
    {
        CommonMethods.CheckEmptyString(password)
    }
}
export default LoginViewModel