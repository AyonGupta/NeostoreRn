import { LOGOUT } from "../Type/LogoutType";
import CommonMethods from "./../../Utilities/Common/CommonMethods";
import * as LocalStorageKeys from "./../../Utilities/Constants/LocalStorageKeys";

export const PerformLogout = () =>  
{
    return (dispatch) => 
    {
        dispatch (AsyncLogout())
    };
};

const AsyncLogout = () => async dispatch => 
{
    CommonMethods.DeleteLocalByKey (LocalStorageKeys.KUSERDATA)
    dispatch ({
        type : LOGOUT
    })
}
