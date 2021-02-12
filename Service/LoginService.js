import { Base_Url } from '../Constant/ServiceConstant'
const Sub_Base_Url = 'users/login'

const LoginService = {
    LoginUser : (email,pass) => 
    {
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

}

export default LoginService