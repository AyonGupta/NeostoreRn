import { LOADER, GET_ACCOUNT, GET_ACCOUNT_FAIL } from "../Type/MyAccountType";
import MyAccountService from '../../Service/MyAccountService'
export const GetAccountDetail = () => 
    {
        return dispatch => 
        {
             dispatch (ShowLoader())
            //  dispatch ({
            //      type : LOADER
            //  })
            dispatch (PerformAsynGetAccountDetail ())
        }

    }

    //Fun name              // Param            //Function body
    const PerformAsynGetAccountDetail = () => async dispatch =>
    {
        MyAccountService.GetAccountDetails()
        .then (
            data => {
                dispatch({
                    type : GET_ACCOUNT,
                    data : data
                })
                
            }, 
            error => {
                dispatch({
                    type : GET_ACCOUNT_FAIL,
                    data : error
                })
            }
        )
    }

    const ShowLoader = () => {
        return {
            type : LOADER
        }
    }
