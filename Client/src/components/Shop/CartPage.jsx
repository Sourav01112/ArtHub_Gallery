import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartAction } from "../../Redux/cartReducer/action";
import { Text, Spinner } from "@chakra-ui/react";

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((store) => store.authReducer);
  const { cartData, isLoading } = useSelector((store) => store.cartReducer);

  useEffect(() => {
    dispatch(getCartAction(token));
  }, [dispatch, token]);

  if (isLoading === undefined || isLoading) {
    // Render a loading spinner or message
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <Spinner size="xl" />
        <Text mt={4}>Loading...</Text>
      </div>
    );
  }
  return (
    <div style={{ overflowX: "hidden", overflow: "hidden" }}>
      <hr style={{ border: "2px solid gray" }} />
      <h1 style={{ marginBottom: "15px", marginTop: "15px" }}>CART LIST</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text>Hello</Text>
        {Array.isArray(cartData) &&
          cartData.length > 0 &&
          cartData.map((item, index) => {
            // Your existing rendering logic
            return (
              <div
                key={item?.productId?._id}
                style={{
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // border: "2px solid red"
                  }}
                >
                  <img
                    style={{
                      width: "50%",
                    }}
                    src={item?.productId?.image[0]}
                    alt={item?.productId?.title}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "2",
                      marginLeft: "10px",
                    }}
                  >
                    <p
                      style={{
                        color: "red",
                        fontWeight: 800,
                        fontSize: "16px",
                      }}
                    >
                      {item?.productId?.artist}{" "}
                    </p>
                    <p style={{ fontSize: "12px" }}>
                      {item?.productId?.subtitle}
                    </p>
                    <strong>
                      {" "}
                      <p> $ {item?.productId?.price} </p>{" "}
                    </strong>
                    <p> Quantity: {item.quantity} </p>
                    <strong>
                      <p>Remove</p>
                    </strong>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CartPage;

// {cartData?.map((item, index) => {
//   return (
//     <div
//       key={item.id}
//       style={{
//         margin: "10px",
//         // background: "#eee",
//         // border: "2px solid blue",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           // border: "2px solid red"
//         }}
//       >
//         <img
//           style={{
//             width: "50%",
//           }}
//           // src={item?.image[0]}
//         />
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             lineHeight: "2",
//             marginLeft: "10px",
//           }}
//         >
//           <p
//             style={{ color: "red", fontWeight: 800, fontSize: "16px" }}
//           >
//             {item.artist}{" "}
//           </p>
//           <p style={{ fontSize: "12px" }}>{item.subtitle}</p>
//           <strong>
//             {" "}
//             <p> $ {item.price} </p>{" "}
//           </strong>
//           <p> + 1 - </p>
//           <strong>
//             <p>Remove</p>
//           </strong>
//         </div>
//       </div>
//     </div>
//   );
// })}
