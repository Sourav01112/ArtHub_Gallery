import { urlBase } from "../../api/constant";
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_DUPLICATE,
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
  CALCULATE_TOTAL
} from "./actionTypes";

import axios from "axios";

const updateCartInState = (updatedItem, cartData) => {
  const updatedCart = [...cartData];
  const index = updatedCart.findIndex(item => item._id === updatedItem._id);
  if (index !== -1) {
    updatedCart[index] = updatedItem;
  }
  return updatedCart;
};


export const addToCartAction = (payload, token, cartData, toast) => (dispatch) => {

  dispatch({ type: ADD_TO_CART_REQUEST });

  const existingCartItem = cartData?.cartData?.find((item) => {
    if (item?.productId?._id === payload?.productId) {
      return true
    }
    return false
  });
  if (existingCartItem) {
    return toast({
      position: "top",
      title: "Product already in the cart !",
      description: "Please increase the quantity in the next step.",
      status: "warning",
      duration: 2000,
      isClosable: true,
    });
  } else {
    console.log("else")
    // If the product is not in the cart, proceed with the original logic
    let apiHit = `${urlBase}/cart/addCart`;
    return axios.post(apiHit, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch({
          type: ADD_TO_CART_SUCCESS,
          payload: res?.data?.data
        });
        toast({
          position: "top",
          title: "Product added to Cart !",
          // description: "Please fill in all the fields.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_TO_CART_FAILURE,
        });
      });
  }
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



// export const decrementItemAction = (token, productId, cartData) => {
//   return async (dispatch) => {
//     const qtyIsGreaterThanOne = cartData?.find((item) => {

//       console.log("item.quanretrtrt", item.quantity)
//       if (item.quantity < 1) {
//         return false
//       }
//       return true;
//     });

//     const itemToDecrement = cartData.find((item) => item.productId === productId);

//     console.log("cartDATAAAA", itemToDecrement)

//     if (qtyIsGreaterThanOne) {
//       dispatch({ type: 'DECREMENT_ITEM_REQUEST' });
//       try {
//         const response = await axios.post(
//           `${urlBase}/cart/decrement/id?id=${productId}`,
//           {},
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         const updatedItem = response.data.data;
//         dispatch({
//           type: DECREMENT_ITEM_SUCCESS,
//           payload: updateCartInState(updatedItem, cartData)
//         });
//       } catch (error) {
//         dispatch({
//           type: DECREMENT_ITEM_FAILURE,
//           payload: error.message
//         });
//       }
//     } else {
//       console.log("SORTTTYIU")
//     }
//   };
// };


export const decrementItemAction = (token, productId, cartData) => {
  return async (dispatch) => {

    const itemToDecrement = cartData.find((item) => item.productId._id === productId)

    if (itemToDecrement && itemToDecrement.quantity > 1) {
      dispatch({ type: 'DECREMENT_ITEM_REQUEST' });

      try {
        const response = await axios.post(
          `${urlBase}/cart/decrement/id?id=${productId}`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const updatedItem = response.data.data;
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
    } else {
      console.log("Quantity is already 1 or less. Cannot decrement further.");
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



export const calculateTotalAction = (total) => async (dispatch) => {

  dispatch({
    type: CALCULATE_TOTAL,
    payload: total,
  })
}