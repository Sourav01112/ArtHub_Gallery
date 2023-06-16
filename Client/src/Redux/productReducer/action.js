import {
  PRODUCT_REQUEST,
  PRODUCT_FAILURE,
  POST_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
} from "./actionTypes";

import axios from "axios";

// GET All Products

export const getProducts = (paramsObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    // .get(`http://localhost:4500/shop`, paramsObj)
    .get(`http://localhost:4500/shop`)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: {
          data: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
