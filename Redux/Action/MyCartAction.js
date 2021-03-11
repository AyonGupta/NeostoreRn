import {
  LOADER,
  GET_CART,
  GET_CART_FAIL,
  EDIT_CART,
  EDIT_CART_FAIL,
  DELETE_CART,
  DELETE_CART_FAIL,
} from "../Type/MyCartType";
import MyCartService from "../../Service/MyCartService";

export const GetCartItems = () => {
  return (dispatch) => {
    dispatch(ShowLoader());
    //  dispatch ({
    //      type : LOADER
    //  })
    dispatch(PerformAsynGetCartItems());
  };
};

//Fun name              // Param            //Function body
const PerformAsynGetCartItems = () => async (dispatch) => {
  MyCartService.GetCartItem().then(
    (data) => {
      dispatch({
        type: GET_CART,
        data: data,
      });
    },
    (error) => {
      dispatch({
        type: GET_CART_FAIL,
        data: error,
      });
    }
  );
};

export const EditCartItem = (id, quantity) => {
  return (dispatch) => {
    dispatch(ShowLoader());
    dispatch(PerformAsynEditCartItems(id, quantity));
  };
};
//Fun name              // Param            //Function body
const PerformAsynEditCartItems = (id, quantity) => async (dispatch) => {
  MyCartService.EditCartItem(id, quantity).then(
    (data) => {
      dispatch({
        type: EDIT_CART,
        data: data,
      });
    },
    (error) => {
      dispatch({
        type: EDIT_CART_FAIL,
        data: error,
      });
    }
  );
};

export const DeleteCartItem = (id) => {
  return (dispatch) => {
    dispatch(ShowLoader());
    dispatch(PerformAsynDeleteCartItem(id));
  };
};
//Fun name              // Param            //Function body
const PerformAsynDeleteCartItem = (id) => async (dispatch) => {
  MyCartService.DeleteCartItem(id).then(
    (data) => {
      dispatch({
        type: DELETE_CART,
        data: data,
      });
    },
    (error) => {
      dispatch({
        type: DELETE_CART_FAIL,
        data: error,
      });
    }
  );
};

const ShowLoader = () => {
  return {
    type: LOADER,
  };
};
