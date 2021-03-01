import { GET_PRODUCT } from "../Type/ProductType";
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
        default : 
        isLoader = true
        return state
    }
}

export default ProductReducer