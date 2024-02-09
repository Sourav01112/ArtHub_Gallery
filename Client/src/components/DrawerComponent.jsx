import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import CartPage from "./Shop/CartPage";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const DrawerComponent = ({ isOpen, onOpen, onClose, btnRef }) => {
  const cartData = useSelector((store) => store.cartReducer);
  const cartLength = cartData?.cartData;

  const calculateTotal = () => {
    const totalPrice = cartData?.cartData?.reduce(
      (total, item) => total + item?.productId?.price * item?.quantity,
      0
    );
    return totalPrice;
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent
        css={{
          "&::-webkit-scrollbar": { width: "6px" },
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        }}
      >
        <DrawerCloseButton />
        <DrawerHeader
          borderBottomWidth="1px"
          fontSize="xl"
          fontWeight="bold"
          color="blue.500"
        >
          Your Cart ({cartLength?.length} Items)
        </DrawerHeader>
        <DrawerBody css={{ "&::-webkit-scrollbar": { width: "6px" } }}>
          <CartPage />
        </DrawerBody>
        <hr
          style={{
            border: "2px solid gray",
            width: "90%",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        />
        <DrawerFooter display={"flex"} justifyContent={"space-between"}>
          <div>
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              Total: ${calculateTotal()}
            </Text>
          </div>
          <div>
            <Link to="/checkout">
              <Button
                colorScheme="blue"
                mr={3}
                size="lg"
                _hover={{ bg: "blue.800" }}
                onClick={() => {
                  console.log("hello");
                }}
              >
                Checkout
              </Button>
            </Link>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
