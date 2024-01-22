import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Image,
  Text,
  Alert,
  AlertIcon,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Input,
  Divider,
  Heading,
  useToast,
  Badge,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./SingleProductPage.css";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/productReducer/action";
import Contact from "../../components/pages/Contact";
import CartPage from "./CartPage";
import { addToCartAction, getCartAction } from "../../Redux/cartReducer/action";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const SingleProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading, isError } = useSelector(
    (store) => store.productReducer
  );
  const toast = useToast();
  const { token } = useSelector((store) => store.authReducer);
  const cartData = useSelector((store) => store.cartReducer);
  const navigate = useNavigate();

  const cartLength = cartData?.cartData;
  console.log("cartData--------", cartData);

  const [refresh, setRefresh] = useState(false);
  const [isAuth, SetisAuth] = useState(true);
  const [val, setval] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  // if the token is deleted navigate to Login
  useEffect(() => {
    if (!localStorage.getItem("loginToken")) {
      navigate("/login");
    }
    dispatch(getCartAction(token));
  }, [getCartAction]);

  const dispatch = useDispatch();
  const [alertStatus, SetAlert] = useState(false);
  const [art, setArt] = useState();
  const { _id } = useParams();

  useEffect(() => {
    dispatch(getProducts({}, _id));
  }, []);

  const handleADDtoCART = () => {
    const payload = {
      productId: _id,
      quantity: 1,
    };

    dispatch(addToCartAction(payload, token, cartData, toast));
  };

  return (
    <div>
      {alertStatus ? (
        <Alert
          mt={2}
          status="success"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          variant="subtle"
        >
          <AlertIcon />
          Product is Successfully Added to Cart
        </Alert>
      ) : null}
      <div className="breadCrum">
        <Text textAlign="center" className="breadcrumText">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>{" "}
          <ChevronRightIcon boxSize={4} color="gray.500" />
          <Link to="/shop" className="breadcrumb-link">
            Shop
          </Link>{" "}
          <ChevronRightIcon boxSize={4} color="gray.500" /> {products?.title}
        </Text>
        {/* 
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/get/cart")}
        >
          <AiOutlineShoppingCart
            style={{ fontSize: "24px", marginRight: "5px" }}
          />
          {cartData === undefined ? ( // Assuming cartData is initially undefined
            <Spinner size="sm" color="green.500" />
          ) : (
            <>
              {cartData?.cartData?.length > 0 ? (
                <Badge variant="solid" colorScheme="green">
                  {cartData?.cartData?.length}
                </Badge>
              ) : (
                <Badge variant="solid" colorScheme="red">
                  0
                </Badge>
              )}
            </>
          )}
        </div> */}
      </div>

      <div className="ImageFlex">
        <div className="ImageFlexImage">
          <Box
            className="smallImages"
            width={"20%"}
            // style={{ border: "1px solid red" }}
          >
            {products?.image &&
              products?.image?.map((ele, index) => (
                <Image
                  key={index}
                  width="100%"
                  cursor="pointer"
                  src={ele}
                  mb={5}
                />
              ))}
          </Box>
          <Box className="BigImageContainer">
            {products?.image && (
              <Image
                className="BigImage"
                width={"1050px"}
                src={
                  val === 1
                    ? products?.image[0]
                    : val === 2
                    ? products?.image[1]
                    : products?.image[2]
                }
              />
            )}
          </Box>
        </div>
        <div
          className="content"
          style={{
            // border: "1px solid red",
            textAlign: "center",
            width: "80%",
            // margin: "auto",
          }}
        >
          <Heading as="h5" size={"lg"}>
            {products?.title}
          </Heading>
          <p style={{ marginTop: "20px" }}>
            <strong> {products?.subtitle}</strong>
          </p>
          <p
            style={{
              fontSize: "20px",
              marginTop: "20px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <strong> $ {products?.price}</strong>
          </p>
          <p style={{ fontSize: "16px", marginTop: "20px" }}>
            {products?.desc}
          </p>
          <p style={{ fontSize: "16px", marginTop: "20px" }}>
            <strong>{products?.year}</strong>
            <br />
            <strong>Essay by </strong> {products?.artist} <br /> <br />
            <strong> Published by </strong> Marian Goodman Gallery, New York{" "}
            <br /> <br />
            <strong>ISBN</strong> 0-944219-19-5 <br /> <br />
          </p>
          <p>
            {" "}
            <strong>in stock:</strong> {products?.inStock} <br />
            <br />
          </p>
          <div
            className="ButtonContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Button
              // onClick={onOpen}
              onClick={() => handleADDtoCART()}
            >
              ADD TO CART
            </Button>

            <Button ref={btnRef} onClick={() => onOpen()}>
              SHOW CART
            </Button>
          </div>

          {/*  Showing Cart Drawer */}
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size={"md"}
          >
            <DrawerOverlay />

            <DrawerContent css={{ "&::-webkit-scrollbar": { width: "6px" } }}>
              <DrawerCloseButton />
              <DrawerHeader>Cart : {cartLength?.length}</DrawerHeader>

              <DrawerBody css={{ "&::-webkit-scrollbar": { width: "6px" } }}>
                <CartPage />
              </DrawerBody>

              <DrawerFooter>
                <Button colorScheme="blue" mr={3}>
                  Checkout
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          {/*  Showing Cart Drawer */}
        </div>
      </div>
      <Contact />
    </div>
  );

  // return <Text>Hello</Text>;
};

// ******************************* DRAWER *****************
