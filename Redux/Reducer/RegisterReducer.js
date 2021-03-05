import { REGISTER, REGISTER_FAIL, REGISTER_LOADER } from "../Type/RegisterType";
const initialState = {
    UserData : {},
    IsUserLogin : false,
    isLoader : false,
    errorData : {}
}

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER :
        return {
            ...state,
            UserData : action.data,
            IsUserLogin : true,
            isLoader : false
        }
        case REGISTER_LOADER:
        return {
            ...state,
            isLoader : true
        }
        case REGISTER_FAIL : 
        return {
            ...state,
            errorData : action.data
        }
        default :
        return state
    }
}

export default RegisterReducer