import ProductDetailService from '../../Service/ProductDetailService'
import { PRODUCT_DETAIL_FAIL, LOADER, PRODUCT_DETAIL } from "../Type/ProductDetailType";
export const GetProductDetail = (id) => 
    {
        return dispatch => 
        {
             dispatch (ShowLoader())
            //  dispatch ({
            //      type : LOADER
            //  })
            dispatch (PerformAsynGetProductDetail (id))
        }

    }

    //Fun name              // Param            //Function body
    const PerformAsynGetProductDetail = (id) => async dispatch =>
    {
        ProductDetailService.GetProductDetails (id)
        .then (
            data => {
                dispatch({
                    type : PRODUCT_DETAIL,
                    data : data
                })
            }, 
            error => {
                dispatch({
                    type : PRODUCT_DETAIL_FAIL,
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
