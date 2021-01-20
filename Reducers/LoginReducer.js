import { LOGIN } from "../Types/LoginTypes";
const initialState = {
    UserData : {},
    isLogin : false
}
 const LoginReducer = (state = initialState, action) => {
     console.log("reducer = ", action)
    switch (action.type) {
        case LOGIN :
        return {
            ...state,
            UserData : action.data ,
            isLogin : true
        }
        default : return state
    }
}
export default LoginReducer