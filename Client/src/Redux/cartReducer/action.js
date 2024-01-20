import { urlBase } from "../../api/constant";
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  INCREMENT_ITEM_REQUEST,
  INCREMENT_ITEM_SUCCESS,
  INCREMENT_ITEM_FAILURE,
  DECREMENT_ITEM_REQUEST,
  DECREMENT_ITEM_SUCCESS,
  DECREMENT_ITEM_FAILURE,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
} from "./actionTypes";

import axios from "axios";

const updateCartInState = (updatedItem, cartData) => {

  const updatedCart = [...cartData];
  // // console.log("upatedCart", updatedCart)
  const index = updatedCart.findIndex(item => item._id === updatedItem._id);

  // // console.log("id inside ----", index)

  if (index !== -1) {
    updatedCart[index] = updatedItem;
  }

  return updatedCart;
};

export const addToCartAction = (payload, token) => (dispatch) => {
  dispatch({ type: ADD_TO_CART_REQUEST });
  let apiHit = `${urlBase}/cart/addCart`;
  axios.post(apiHit, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
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
  let apiHit = `${urlBase}/cart/getCart`;
  axios.post(apiHit, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch({
        type: GET_CART_SUCCESS,
        payload: res?.data?.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CART_FAILURE,
        payload: error
      });
    });
};



export const incrementItemAction = (token, productId, cartData) => {
  // // console.log("in inc^^^^^^", {token, productId, cartData})

  return async (dispatch) => {
    dispatch({ type: 'INCREMENT_ITEM_REQUEST' });
    try {
      const response = await axios.post(
        `${urlBase}/cart/increment/id?id=${productId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedItem = response.data.data;
      // console.log("updatedItem", updatedItem)

      dispatch({
        type: INCREMENT_ITEM_SUCCESS,
        payload: updateCartInState(updatedItem, cartData)
      });
    } catch (error) {
      dispatch({
        type: INCREMENT_ITEM_FAILURE,
        payload: error.message
      });
    }
  }
}



// Thunk action for decrementing item quantity
export const decrementItemAction = (token, productId, cartData) => {


  // // console.log("in dec^^^^^^", {token, productId, cartData})
  return async (dispatch) => {
    dispatch({ type: 'DECREMENT_ITEM_REQUEST' });

    try {
      const response = await axios.post(
        `${urlBase}/cart/decrement/id?id=${productId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedItem = response.data.data;
      // // console.log("updatedItem", updatedItem)


      dispatch({
        type: DECREMENT_ITEM_SUCCESS,
        payload: updateCartInState(updatedItem, cartData)
      });

    } catch (error) {
      dispatch({
        type: DECREMENT_ITEM_FAILURE,
        payload: error.message
      });
    }
  };
};




export const removeItemAction = (token, productId) => async (dispatch) => {


  dispatch({ type: REMOVE_ITEM_REQUEST });

  try {


    const response = await axios.delete(`${urlBase}/cart/remove/id?id=${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log("response======", response)

    // return

    dispatch({
      type: REMOVE_ITEM_SUCCESS,
      payload: productId,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_ITEM_FAILURE,
      payload: error.message,
    });
  }
};
