import {
  ADMIN_TYPE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  POST_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
} from "./actionTypes";

const inState = {
  // admin: false,
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = inState, action) => {
  console.log("@@ REDUCER", state);
  switch (action.type) {
    // case ADMIN_TYPE: {
    //   return { ...state, admin: action.payload };
    // }
    case PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    //POST
    // case POST_PRODUCT_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // }
    //GET

    case PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // DELETE
    // case DELETE_PRODUCT_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     // payload: payload
    //   };
    // }
    // PATCH
    // case PATCH_PRODUCT_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // }

    default: {
      return state;
    }
  }
};
