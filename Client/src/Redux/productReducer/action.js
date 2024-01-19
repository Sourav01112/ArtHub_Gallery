import { urlBase } from "../../api/constant";
import {
  PRODUCT_REQUEST,
  PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

import axios from "axios";


export const getProducts = (paramsObj, _id) => (dispatch) => {

  dispatch({ type: PRODUCT_REQUEST });
  let URLwithCondition = `${urlBase}/shop/`;

  if (_id) {
    URLwithCondition = `${urlBase}/shop/id?id=${_id}`;
  }


  axios.post(URLwithCondition, paramsObj)
    .then((res) => {

      if (res?.data?.dataFetch) {
        dispatch({
          type: GET_PRODUCT_SUCCESS,
          payload: res?.data?.dataFetch,
        });
      } else {

        dispatch({
          type: GET_PRODUCT_SUCCESS,
          payload: res?.data?.data?.docs,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: PRODUCT_FAILURE,
      });
    });
};
