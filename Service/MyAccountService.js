import { Base_Url } from '../Utilities/Constants/ServiceConstant'
const Sub_Base_Url = 'users/getUserData'
const MyAccountService = 
{
    GetAccountDetails : () => 
    {
        let url = Base_Url + Sub_Base_Url
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'multipart/form-data', 'access_token' : '60363d1f0f412'},
        };

        return fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
    }
}

export default MyAccountService