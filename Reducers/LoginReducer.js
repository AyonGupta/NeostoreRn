import { LOGIN } from "./Types/LoginTypes";
const initialState = {
    UserData : {},
    isLogin : false
}

export const LoginReducer = (state = initialState, action) => {
    switch (action) {
        case LOGIN :
        return {
            ...state,
            UserData : action.data ,
            isLogin : true
        }
        default : return state
    }
}