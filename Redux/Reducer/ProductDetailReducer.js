import { PRODUCT_DETAIL } from "../Type/ProductDetailType";
const initialState = {
    ProductData : {},
    isLoader : false,
    errorData : {}
}

const ProductDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL :
        return {
            ...state,
            ProductData : action.data.data,
            isLoader : false
        }
        default : 
        isLoader = true
        return state
    }
}

export default ProductDetailReducer