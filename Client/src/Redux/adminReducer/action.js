import axios from "axios";
import { ADMIN_TYPE } from "./actionTypes";

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    return await axios
      .post(`${"http://localhost:4500"}/admin/verify`, { token })
      .then((res) => {
        // console.log(res);
        if (res.data.decoded.role == "admin") {
          dispatch({ type: ADMIN_TYPE, payload: true });
        } else {
          dispatch({ type: ADMIN_TYPE, payload: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    dispatch({ type: ADMIN_TYPE, payload: false });
  }
};
