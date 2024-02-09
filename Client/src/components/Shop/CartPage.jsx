import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  calculateTotalAction,
  decrementItemAction,
  getCartAction,
  incrementItemAction,
  removeItemAction,
} from "../../Redux/cartReducer/action";
import { Text, Spinner, HStack, IconButton, Box } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import "./SingleProductPage.css";
import { AnimationComponent } from "../../Lottie/AnimationComponent";
import animationData from "../../Lottie/animatedCart.json";

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((store) => store.authReducer);
  const { cartData, isLoading } = useSelector((store) => store.cartReducer);

  const handleIncrement = (productId) => {
    dispatch(incrementItemAction(token, productId, cartData));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementItemAction(token, productId, cartData));
  };

  const handleRemove = (productId) => {
    dispatch(removeItemAction(token, productId, cartData));
  };

  const calculateTotal = useCallback(() => {
    const totalPrice = cartData.reduce(
      (total, item) => total + item?.productId?.price * item?.quantity,
      0
    );
    // console.log("totalPrice", totalPrice);
    dispatch(calculateTotalAction(totalPrice));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCartAction(token));
    calculateTotal();
  }, [dispatch, token, calculateTotal]);

  if (isLoading === undefined || isLoading) {
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <Spinner size="xl" />
        <Text mt={4}>Loading...</Text>
      </div>
    );
  }
  return (
    <div style={{ overflowX: "hidden", overflow: "hidden" }}>
      {/* <hr style={{ border: "2px solid gray" }} /> */}
      {cartData?.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {Array.isArray(cartData) &&
            cartData.length > 0 &&
            cartData.map((item, index) => {
              // Your existing rendering logic
              const imageUrl =
                item?.productId?.image && item.productId.image[0]
                  ? item.productId.image[0]
                  : null;

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
                    }}
                  >
                    {imageUrl && (
                      <img
                        className="cartImg"
                        src={imageUrl}
                        alt={item?.productId?.title}
                      />
                    )}
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
                      <p> Quantity: {item?.quantity} </p>

                      <div
                        className="cartBtn"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <HStack mb={3}>
                          {item.quantity == 1 ? (
                            "null"
                          ) : (
                            <>
                              <IconButton
                                icon={<MinusIcon w="3" />}
                                onClick={() =>
                                  handleDecrement(item?.productId?._id)
                                }
                                aria-label="Decrement"
                              />
                            </>
                          )}

                          <IconButton
                            icon={<AddIcon w="3" />}
                            onClick={() =>
                              handleIncrement(item?.productId?._id)
                            }
                            aria-label="Increment"
                          />

                          <IconButton
                            icon={<DeleteIcon w="6" />}
                            onClick={() => handleRemove(item?.productId?._id)}
                            aria-label="Increment"
                          />
                        </HStack>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="65vh" 
        >
          <AnimationComponent animationData={animationData} />
        </Box>
      )}
    </div>
  );
}

export default CartPage;
