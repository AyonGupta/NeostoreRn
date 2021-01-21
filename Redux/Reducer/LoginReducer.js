import { LOGIN } from "../Type/LoginType";
const initialState = {
    UserData : {},
    IsUserLogin : false
}

const LoginReducer = (state = initialState, action) => {
    switch (action) {
        case LOGIN :
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