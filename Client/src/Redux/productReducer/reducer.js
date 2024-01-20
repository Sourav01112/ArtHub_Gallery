import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

const inState = {
  isLoading: false,
  isError: false,
  products: [],
};
// //(inState);

export const reducer = (state = inState, { type, payload }) => {



  

  switch (type) {
    case PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    //GET
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    // Failure
    case PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,

      };
    }

    default: {
      return state;
    }
  }
};
