import { LOGIN  } from "./Types";

export const PerformLogin = (email, pass) => {
    //1. Api call
    //2. Send data
    return {
        type : LOGIN,
        data : {'email' : 'ag@wwindia.com', 'id' : '1'}
    }
}

