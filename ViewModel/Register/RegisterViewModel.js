import CommonMethods from "../../Utilities/Common/CommonMethods"

const RegisterViewModel = 
{
     ValidateFname : (text) => 
    {
        return CommonMethods.CheckEmptyString (text)
    },
    ValidateLname : (text) => 
    {
        return CommonMethods.CheckEmptyString (text)
    },
    ValidateEmail: (text) => 
    {
        return CommonMethods.CheckEmailValid (text)
    },
    ValidatePassword: (text) => 
    {
        return CommonMethods.CheckEmptyString (text)
    },
    ValidateCpassword : (password, cpassword) => 
    {
        let isEmpty = CommonMethods.CheckEmptyString(cpassword)
        if (isEmpty)
        {
            return isEmpty
        } 
        else 
        {
            return CommonMethods.CheckStringEqual (password, cpassword)
        }
    },
    ValidatePhone : (Phone) => {
        return CommonMethods.CheckEmptyString (Phone)
    }

}
export default RegisterViewModel