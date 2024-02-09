


// reducer.js
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
  CALCULATE_TOTAL,
  EMPTY_CART
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cartData: [],
  total: 0,
};


export const reducer = (state = initialState, { type, payload }) => {




  switch (type) {



    case ADD_TO_CART_REQUEST:
    case GET_CART_REQUEST:
    case INCREMENT_ITEM_REQUEST:
    case DECREMENT_ITEM_REQUEST: {
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
        // cartData: [payload],

      };
    }

    case GET_CART_SUCCESS:
    case INCREMENT_ITEM_SUCCESS:
    case DECREMENT_ITEM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartData: payload,
      };
    }

    case ADD_TO_CART_FAILURE:
    case GET_CART_FAILURE:
    case INCREMENT_ITEM_FAILURE:
    case DECREMENT_ITEM_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        erro: payload
      };
    }

    case REMOVE_ITEM_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case REMOVE_ITEM_SUCCESS: {
      const updatedCart = state.cartData.filter(item => {
        if (item?.productId?._id !== payload) {
          return true;
        }
        return false;
      });
      return {
        ...state,
        isLoading: false,
        cartData: updatedCart,
      };
    }

    case REMOVE_ITEM_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        erro: payload,
      };
    }

    case CALCULATE_TOTAL: {
      return {
        ...state,
        total: payload,
      };
    }

    case EMPTY_CART: {


      return {
        cartData: payload,
      }
    }

    default: {
      return state;
    }
  }
};













// import {
//   ADD_TO_CART_REQUEST,
//   ADD_TO_CART_SUCCESS,
//   ADD_TO_CART_FAILURE,
//   GET_CART_REQUEST,
//   GET_CART_SUCCESS,
//   GET_CART_FAILURE,
// } from "./actionTypes";

// const initialState = {
//   isLoading: false,
//   isError: false,
//   cartData: [],
// };

// export const reducer = (state = initialState, { type, payload }) => {

//   // //("payload #########", payload)
//   switch (type) {
//     case ADD_TO_CART_REQUEST:
//     case GET_CART_REQUEST: {
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       };
//     }

//     case ADD_TO_CART_SUCCESS: {
//       return {
//         ...state,
//         isLoading: false,
//         cartData: [...state.cartData, payload],
//       };
//     }

//     case GET_CART_SUCCESS: {

//       return {
//         ...state,
//         isLoading: false,
//         cartData: payload,
//       };
//     }
//     case ADD_TO_CART_FAILURE:
//     case GET_CART_FAILURE: {
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//         erro: payload
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };
