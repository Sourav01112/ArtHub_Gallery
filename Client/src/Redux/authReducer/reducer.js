import { saveData, loadData } from "../../Utilities/localStorage";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";

const inState = {
  isLoading: false,
  isAuth: loadData("loginToken") || true || undefined,
  token: loadData("loginToken") || "",
  userID: loadData("userID") || "",
  isError: false,
  errorMessage: "",
};

export const reducer = (state = inState, { type, payload }) => {
  // console.log("@payload", payload);
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("loginToken", payload.token);
      // saving whole User and not just _id
      localStorage.setItem("user",  JSON.stringify(payload.user));
      localStorage.setItem("Permission_To", JSON.stringify(payload.rights));

      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        userID: payload.userID,
        isError: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    }
    case LOGOUT: {
      // localStorage.removeItem("loginToken");
      // localStorage.removeItem("userID");
      localStorage.clear();

      return { inState };
    }

    default: {
      return state;
    }
  }
};
