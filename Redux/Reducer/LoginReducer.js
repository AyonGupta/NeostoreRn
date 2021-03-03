import { LOADER, LOGIN, LOGIN_FAIL } from "../Type/LoginType";
const initialState = {
    UserData : {},
    IsUserLogin : false,
    isLoader : false,
    errorData : {}
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN :
        return {
            ...state,
            UserData : action.data,
            IsUserLogin : true,
            isLoader : false
        }
        case LOADER:
        return {
            ...state,
            isLoader : true
        }
        case LOGIN_FAIL : 
        return {
            ...state,
            errorData : action.data
        }
        default :
        return state
    }
}

export default LoginReducer