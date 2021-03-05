import ProductDetailService from '../../Service/ProductDetailService';
import ProductService from '../../Service/ProductService'
import { GET_PRODUCT, LOADER, GET_PRODUCT_FAIL, BUY, BUY_FAIL } from "../Type/ProductType";
export const GetProductList = (id, limit, page) => 
    {
        return dispatch => 
        {
             dispatch (ShowLoader())
            //  dispatch ({
            //      type : LOADER
            //  })
            dispatch (PerformAsynGetProductList (id, limit, page))
        }

    }

    //Fun name              // Param            //Function body
    const PerformAsynGetProductList = (id, limit, page) => async dispatch =>
    {
        ProductService.GetProducts (id, limit, page)
        .then (
            data => {
                dispatch({
                    type : GET_PRODUCT,
                    data : data
                })
            }, 
            error => {
                dispatch({
                    type : GET_PRODUCT_FAIL,
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

    
    export const AddToCart = (id, quantity) =>
    {
        return dispatch =>
        {
            dispatch (ShowLoader)
            dispatch (AsynAddToCart (id, quantity))

        }
    }

    const AsynAddToCart = (id, quantity) => 
    {
        ProductDetailService.AddToCart (id, quantity)
        .then (
            data =>
            {
                dispatch (
                    {
                        type : BUY,
                        data : data
                    }
                )
            },
            error => {
                dispatch (
                    {
                        type : BUY_FAIL,
                        data : error
                    }
                )
            }
        )
    }