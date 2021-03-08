import {
  PRODUCT_DETAIL,
  BUY,
  BUY_FAIL,
  PRODUCT_DETAIL_FAIL,
  LOADER,
} from "../Type/ProductDetailType";
const initialState = {
  ProductData: {},
  isLoader: false,
  errorData: {},
  BuyData: {},
};

const ProductDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL:
      return {
        ...state,
        ProductData: action.data.data,
        isLoader: false,
      };
    case BUY:
      return {
        ...state,
        BuyData: action.data,
        isLoader: false,
      };
    case BUY_FAIL:
    case PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        errorData: action.data,
        isLoader: false,
      };
    case LOADER:
      return {
        ...state,
        isLoader: true,
      };
    default:
      isLoader = false;
      return state;
  }
};

export default ProductDetailReducer;
