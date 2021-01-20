import { LOGIN  } from "../Types/LoginTypes";

export const PerformLogin = (email, pass) => {
    //1. Api call
    //2. Send data
    console.log(email)
    console.log(pass)
    return {
        type : LOGIN,
        data : {'email' : email, 'id' : '1'}
    }
}

