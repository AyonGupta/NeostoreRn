import { LOGIN } from "../Type/LoginType";
export const PerformLogin = (email, pass) => (
    {
        type : LOGIN,
        data : {'email' : email, 'id' : Math.random()}
    }
)
