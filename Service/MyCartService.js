import { Base_Url } from "../Utilities/Constants/ServiceConstant";
const Sub_Base_Url = {
  GET_CART: "cart",
  EDIT_CART: "editCart",
  DELETE_CART: "deleteCart",
};

const MyCartService = {
  GetCartItem: () => {
    const url = Base_Url + Sub_Base_Url.GET_CART;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: "60363d1f0f412",
      },
    };

    return PerformRequest(url, requestOptions);
  },

  EditCartItem: (product_id, quantity) => {
    const url = Base_Url + Sub_Base_Url.EDIT_CART;
    let formData = new FormData();
    formData.append("product_id", product_id);
    formData.append("quantity", quantity);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: "60363d1f0f412",
        body: formData,
      }
    };

    return  PerformRequest(url, requestOptions);
  },

  DeleteCartItem: (product_id) => {
    const url = Base_Url + Sub_Base_Url.DELETE_CART;
    let formData = new FormData();
    formData.append("product_id", product_id);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: "60363d1f0f412",
        body: formData,
      }
    };

    return PerformRequest(url, requestOptions);
  },
};
const PerformRequest = (uri, options) => {
  return fetch(uri, options)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default MyCartService;
