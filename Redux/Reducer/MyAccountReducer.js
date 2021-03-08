import { GET_ACCOUNT, GET_ACCOUNT_FAIL, LOADER } from "../Type/MyAccountType";
const initialState = 
{
    UserData : {},
    isLoader : false,
    errorData : {}
}

const MyAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNT :
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
        case GET_ACCOUNT_FAIL : 
        return {
            ...state,
            errorData : action.data,
            isLoader : false
        }
        default :
        return state
    }
}

export default MyAccountReducer