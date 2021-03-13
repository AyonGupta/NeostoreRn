import { GET_PRODUCT, LOADER, GET_PRODUCT_FAIL } from "../Type/ProductType";
const initialState = {
    ProductData : {},
    isLoader : false,
    errorData : {}
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT :
        return {
            ...state,
            ProductData : action.data,
            isLoader : false
        }
        case LOADER :
        return {
            ...state,
            isLoader : true
        }
        case GET_PRODUCT_FAIL :
        return {
            ...state,
            isLoader : false,
            errorData : action.data
        }
        default : 
        isLoader = true
        return state
    }
}

export default ProductReducer