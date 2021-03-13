import {
  DELETE_CART,
  DELETE_CART_FAIL,
  LOADER,
  EDIT_CART,
  EDIT_CART_FAIL,
  GET_CART,
  GET_CART_FAIL
} from "../Type/MyCartType";
const initialState = {
  CartData: {},
  EditCartData: {},
  DeleteCartData: {},
  CartError: {},
  isLoader: false,
  errorData: {},
};

const MyCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      console.log ('loader stopped')
      return {
        ...state,
        CartData: action.data,
        isLoader: false,
      };
    case LOADER:
      console.log ('loader started')
      return {
        ...state,
        isLoader: true,
      };
    case GET_CART_FAIL:
      return {
        ...state,
        CartError: action.data,
        isLoader: false,
      };
    case EDIT_CART:
      console.log ('loader stopped')
      return {
        ...state,
        EditCartData: action.data,
        isLoader: false,
      };
    case EDIT_CART_FAIL:
      return {
        ...state,
        CartError: action.data,
        isLoader: false,
      };
      case DELETE_CART:
      return {
        ...state,
        DeleteCartData: action.data,
        isLoader: false,
      };
      case DELETE_CART_FAIL:
      return {
        ...state,
        CartError: action.data,
        isLoader: false,
      };
    default:
      return state;
  }
};

export default MyCartReducer;
