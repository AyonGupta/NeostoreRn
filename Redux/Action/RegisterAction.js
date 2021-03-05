import { REGISTER, REGISTER_FAIL, REGISTER_LOADER } from "../Type/RegisterType";
import RegisterService from '../../Service/RegisterService'
export const PerformRegister = (first_name, last_name, email, password, gender, phone_no) => 
    {
        return dispatch => 
        {
             dispatch (ShowLoader())
            //  dispatch ({
            //      type : LOADER
            //  })
            dispatch (PerformAsynRegister (first_name, last_name, email, password, gender, phone_no))
        }

    }

    //Fun name              // Param            //Function body
    const PerformAsynRegister = (first_name, last_name, email, password, gender, phone_no) => async dispatch =>
    {
        RegisterService.RegisterUser(first_name, last_name, email, password, gender, phone_no)
        .then (
            data => {
                dispatch({
                    type : REGISTER,
                    data : data
                })
            }, 
            error => {
                dispatch({
                    type : REGISTER_FAIL,
                    data : error
                })
            }
        )
    }

    const ShowLoader = () => {
        return {
            type : REGISTER_LOADER
        }
    }
