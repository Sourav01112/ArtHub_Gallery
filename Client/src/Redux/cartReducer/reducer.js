
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cartData: [],
};

export const reducer = (state = initialState, { type, payload }) => {

  // console.log("payload #########", payload)
  switch (type) {
    case ADD_TO_CART_REQUEST:
    case GET_CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartData: [...state.cartData, payload],
      };
    }

    case GET_CART_SUCCESS: {
      console.log("Current state before update:", state);
      console.log("Received cart data:", payload);
      return {
        ...state,
        isLoading: false,
        cartData: payload,
      };
    }
    case ADD_TO_CART_FAILURE:
    case GET_CART_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        erro: payload
      };
    }

    default: {
      return state;
    }
  }
};
