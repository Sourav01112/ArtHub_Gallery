import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";
import axios from "axios";

// export const loginAction = (userData, toast) => async (dispatch) => {
//   try {
//     if (email && password) {
//       axios.post(`http://localhost:4500/user/login`, userData).then((res) => {
//         console.log(res);
//         // setting token so that I can access the private Route
//         dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
//       });
//     }
//   } catch (error) {
//     dispatch({ type: LOGIN_FAILURE, payload: error.message });
//   }
// };

export const loginAction =
  (userData, toast, setEmail, setPassword) => async (dispatch) => {
    if (email && password) {
      axios
        .post(`http://localhost:4500/user/login`, userData)
        .then((res) => {
          console.log(res);

          toast({
            position: "top",
            title: res.request.statusText,
            description: res.data.msg,
            status: res.data.msg === "Login Successful" ? "success" : "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            position: "top",
            title: `Request Failed`,
            description: `Something went wrong please try again.`,
            status: "error",
            duration: 9000,
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
