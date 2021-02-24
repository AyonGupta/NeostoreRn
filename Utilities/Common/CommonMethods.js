const CommonMethods = 
{
    CheckEmptyString : (text) => 
    {
        return text != undefined && text != ''
    },
    CheckEmailValid : (email) => 
    {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    CheckStringEqual : (text1, text2)  =>
    {
        return text1 == text2
    }
}
export default CommonMethods