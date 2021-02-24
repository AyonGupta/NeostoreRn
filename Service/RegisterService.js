import { Base_Url } from '../Utilities/Constants/ServiceConstant'
const Sub_Base_Url = 'users/register'

const RegisterService = 
{
    RegisterUser : (first_name, last_name, email, password, gender, phone_no)  =>
    {
        const url = Base_Url + Sub_Base_Url
        let formData = new FormData()
        formData.append ('email', email)
        formData.append ('password', password)
        formData.append ('first_name', first_name)
        formData.append ('last_name', last_name)
        formData.append ('gender', gender)
        formData.append ('phone_no', phone_no)
        formData.append ('confirm_password', password)

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

export default RegisterService