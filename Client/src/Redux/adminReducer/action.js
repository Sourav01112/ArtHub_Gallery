import axios from "axios";
import {
  ADMIN_TYPE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from "./actionTypes";

export const getAdminProducts =()=> (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  //  conditional fetch
  // let URLwithCondition = "https://electric-blue-firefly-vest.cyclic.app/admin/getProducts";
  // if (_id) {
  //   URLwithCondition = `${URLwithCondition}/${_id}`;
  // }
  // if (_id) is present then fetch on the basis of _id

  axios
    .get('https://electric-blue-firefly-vest.cyclic.app/admin/getProducts')
    .then((res) => {
      console.log("@@@response", res.data);
      dispatch({
        type: PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    return await axios
      .post(`https://electric-blue-firefly-vest.cyclic.app/admin/verify`, { token })
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
