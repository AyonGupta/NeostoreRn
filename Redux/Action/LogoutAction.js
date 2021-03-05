import { LOGOUT } from "../Type/LogoutType";
export const PerformLogout = () =>  
{
    return dispatch => 
    {
        dispatch (AsyncLogout())
    }
}

const AsyncLogout = () => async dispatch => 
{
    dispatch ({
        type : LOGOUT
    })
}
