import {
  PRODUCT_REQUEST,
  PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

import axios from "axios";

// GET All Products

export const getProducts = (paramsObj, _id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  //  conditional fetch
  let URLwithCondition = "https://electric-blue-firefly-vest.cyclic.app/shop";
  if (_id) {
    URLwithCondition = `${URLwithCondition}/${_id}`;
  }
  // if (_id) is present then fetch on the basis of _id

  axios
    // .get(`https://electric-blue-firefly-vest.cyclic.app/shop`, paramsObj)
    // .get(`https://electric-blue-firefly-vest.cyclic.app/shop`)
    .get(URLwithCondition, paramsObj)
    .then((res) => {
      // console.log("@@@response", res.data);
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: PRODUCT_FAILURE,
      });
    });
};
