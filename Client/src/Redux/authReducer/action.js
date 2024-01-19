import { urlBase } from "../../api/constant";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";
import axios from "axios";
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // resolving
    }, ms);
  });
}

export const loginAction =
  (userData, toast, setEmail, setPassword) => async (dispatch) => {
    if (email && password) {
      return axios
        .post(
          `${urlBase}/users/login`,
          userData
        )
        .then((res) => {
          console.log("@@ token from authReducer ~ action", res);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              token: res.data.token,
              user: res.data.data,
              name: res?.data?.data?.name,
              rights: res.data.data.roles,
            },
          });

          toast({
            position: "top",
            title: res.data.message,
            description: res.data.msg,
            status: res.data.message === "Login Successful" ? "success" : "error",
            duration: 1000,
            isClosable: true,
          });
        })
        .catch((err) => {
          dispatch({ type: LOGIN_FAILURE, payload: err.message });
          console.log(err);
          toast({
            position: "top",
            title: `Request Failed`,
            description: `Something went wrong please try again.`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
        });
    }
    setEmail("");
    setPassword("");
  };

export const logoutAction = (dispatch) => {
  return dispatch({ type: LOGOUT });
};
