import { Base_Url } from '../Utilities/Constants/ServiceConstant'
const Sub_Base_Url = 'users/login'

/*
const LoginUser = (email, pass) => {
    const url = Base_Url + Sub_Base_Url
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pass })
    };
    
    return fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        return data
    });
    
}


export const LoginService = {
    LoginUser
}
*/

const LoginService = 
{
    LoginUser : (email, pass)  =>
    {
        const url = Base_Url + Sub_Base_Url
        let formData = new FormData()
        formData.append ('email', email)
        formData.append ('password', pass)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data'},
            body: formData
        };
        
        
        return fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
    }
}

export default LoginService