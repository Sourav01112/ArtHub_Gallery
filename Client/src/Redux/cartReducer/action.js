import { urlBase } from "../../api/constant";
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
} from "./actionTypes";

import axios from "axios";



export const addToCartAction = (payload, token) => (dispatch) => {

  // console.log({ paramsObj, _id })

  // return

  dispatch({ type: ADD_TO_CART_REQUEST });

  let apiHit = `${urlBase}/cart/addCart`;


  axios.post(apiHit, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {

      console.log("res-----ADD", res?.data?.data)

      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: res?.data?.data
      })

    })
    .catch((error) => {
      dispatch({
        type: ADD_TO_CART_FAILURE,
      });
    });
};



export const getCartAction = (token) => (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });


  console.log("token000000000", token)

  let apiHit = `${urlBase}/cart/getCart`;

  axios.post(apiHit, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log("res-----GET", res?.data?.data)
      dispatch({
        type: GET_CART_SUCCESS,
        payload: res?.data?.data,
      });
    })
    .catch((error) => {
      console.log("error in reducer", error)
      dispatch({
        type: GET_CART_FAILURE,
        payload: error
      });
    });
};