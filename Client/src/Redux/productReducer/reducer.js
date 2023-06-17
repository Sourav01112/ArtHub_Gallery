import {
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
} from "./actionTypes";

const inState = {
  isLoading: false,
  isError: false,
  products: [],
};
// console.log(inState);

export const reducer = (state = inState, { type, payload }) => {
  // console.log("payload", payload);
  switch (type) {
    case PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    //   //POST
    //   case POST_PRODUCT_SUCCESS: {
    //     return {
    //       ...state,
    //       isLoading: false,
    //     };
    //   }
    case PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    //GET
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
        isError: true,
      };
    }
    //DELETE
    //   case DELETE_PRODUCT_SUCCESS: {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       // payload: payload
    //     };
    //   }

    //   //PATCH
    //   case PATCH_PRODUCT_SUCCESS: {
    //     return {
    //       ...state,
    //       isLoading: false,
    //     };
    //   }
    default: {
      return state;
    }
  }
};
