import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";
import axios from "axios";

export const loginAction =
  (userData, toast, setEmail, setPassword) => async (dispatch) => {
    if (email && password) {
      return axios
        .post(`http://localhost:4500/user/login`, userData)
        .then((res) => {
          console.log(res.data.token);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });

          toast({
            position: "top",
            title: res.request.statusText,
            description: res.data.msg,
            status: res.data.msg === "Login Successful" ? "success" : "error",
            duration: 3000,
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
            duration: 3000,
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
