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

export const getProducts = (paramsObj, _id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  //  conditional fetch
  let URLwithCondition = "http://localhost:4500/shop";
  if (_id) {
    URLwithCondition = `${URLwithCondition}/${_id}`;
  }
  // if (_id) is present then fetch on the basis of _id

  axios
    // .get(`http://localhost:4500/shop`, paramsObj)
    // .get(`http://localhost:4500/shop`)
    .get(URLwithCondition, paramsObj)
    .then((res) => {
      // console.log("@@@response", res);
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
