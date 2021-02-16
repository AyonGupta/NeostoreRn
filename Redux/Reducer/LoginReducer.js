import { LOGIN_ASYNC } from "../Type/LoginType";
const initialState = {
    UserData : {},
    IsUserLogin : false
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ASYNC :
        return {
            ...state,
            UserData : action.data,
            IsUserLogin : true
        }
        default :
        return state
    }
}

export default LoginReducer