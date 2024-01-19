import {
  PRODUCT_REQUEST,
  PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

import axios from "axios";

// GET All Products

// export const getProducts = (paramsObj, id) => (dispatch) => {



//   console.log({ paramsObj, id })



//   dispatch({ type: PRODUCT_REQUEST });
//   let URLwithCondition = "http://192.168.0.111:4500/api/shop/"





//   // if (id) {
//   //   // URLwithCondition = `${URLwithCondition}/${id}`;
//   //   URLwithCondition = "http://192.168.0.111:4500/api/shop/id"


//   // }

//   if (id) {
//     URLwithCondition = `http://192.168.0.111:4500/api/shop/${id}`;
//   }




//   console.log({ URLwithCondition })

//   axios.post(URLwithCondition, paramsObj)
//     .then((res) => {
//       dispatch({
//         type: GET_PRODUCT_SUCCESS,
//         payload: res?.data?.data?.docs,
//       });
//     })
//     .catch((error) => {
//       dispatch({
//         type: PRODUCT_FAILURE,
//       });
//     });
// };


export const getProducts = (paramsObj, _id) => (dispatch) => {

  console.log({ paramsObj, _id })





  dispatch({ type: PRODUCT_REQUEST });
  let URLwithCondition = "http://192.168.0.111:4500/api/shop/";

  if (_id) {
    URLwithCondition = `http://192.168.0.111:4500/api/shop/id?id=${_id}`;
  }

  console.log({ URLwithCondition });

  axios.post(URLwithCondition, paramsObj)
    .then((res) => {

      if (res?.data?.dataFetch) {
        dispatch({
          type: GET_PRODUCT_SUCCESS,
          payload: res?.data?.dataFetch,
        });
      } else {

        dispatch({
          type: GET_PRODUCT_SUCCESS,
          payload: res?.data?.data?.docs,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: PRODUCT_FAILURE,
      });
    });
};
