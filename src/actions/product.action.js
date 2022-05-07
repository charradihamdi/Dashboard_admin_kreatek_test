import axios from "axios";
import { productConstants } from "./constants";

// new action
const getProducts = () => {

};

// modified action
export const addClients = (form) => {
  console.log("user add ",form)

  return async (dispatch) => {

      dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
      const res = await axios.post(`localhost:4000/add`, {
          ...form
      });
      
    
  }
};






// new action
export const deleteProductById = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`product/deleteProductById`, {
        data: { payload },
      });
      dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_REQUEST });
      if (res.status === 202) {
        dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_SUCCESS });
        dispatch(getProducts());
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstants.DELETE_PRODUCT_BY_ID_FAILURE,
          payload: {
            error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
