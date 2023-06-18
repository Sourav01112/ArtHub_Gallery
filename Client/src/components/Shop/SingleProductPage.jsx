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
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./SingleProductPage.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/productReducer/action";
import CartPage from "./CartPage";

export const SingleProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading, isError } = useSelector(
    (store) => store.productReducer
  );
  const [refresh, setRefresh] = useState(false);
  const [isAuth, SetisAuth] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // to get product ID to add to Cart
  // console.log("@@products", products);
  // console.log("@@@productID", productID);

  const dispatch = useDispatch();

  const [alertStatus, SetAlert] = useState(false);
  const [art, setArt] = useState();

  const { _id } = useParams();

  let alt = "";

  // Getting individual Data Dynamically
  // console.log(_id);
  const singlePageData = products?.find((ele) => ele._id === _id);
  //   console.log("SinglePageData", singlePageData);

  //  API call for dynamic product fetch {(_id)}
  useEffect(() => {
    dispatch(getProducts(_id));
  }, [_id]);

  /*  Now to make sure ADD to CART works properly, we need the product ID and at the same time which user is logged in so that we can keep a track of who is buying what..thorugh handleADDtoCART */

  const handleADDtoCART = (product_ID) => {
    let productID = product_ID;
    const userID = localStorage.getItem("userID");
    // Generally userID can be retreived with getItem in backend also, but this is temporary, will change later with help of decoding in backend
    // console.log({ productID });
    // console.log(JSON.parse(userID));
    // got productID and userID from frontEnd, now logic can be written on the BE
    /*   const parsedUserID = JSON.parse(userID); 
    //to remove the double quotes
 */
    const payload = { product_ID: productID, userID };
    const headers = { loginToken: localStorage.getItem("loginToken") };
    axios
      .post("http://localhost:4500/shop/add-to-cart", payload, { headers })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          setRefresh(!refresh);
        }
      })
      .catch((err) => {
        console.log(err, "30");
      });
  };

  const [val, setval] = useState(1);

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
      ) : (
        alt
      )}
      <div
        style={{
          display: "flex",
          marginTop: "50px",
          marginBottom: "50px",
          justifyContent: "space-around",
        }}
      >
        <Text textAlign={"center"} ml={400}>
          Home <ChevronRightIcon /> Shop <ChevronRightIcon />{" "}
          {singlePageData?.title}
        </Text>
      </div>

      <div
        style={{
          display: "flex",
          gap: "100px",
          margin: "auto",
          justifyContent: "center",
          marginBottom: "100px",
        }}
      >
        <div style={{ width: "50%", display: "flex", gap: "40px" }}>
          <Box width={"20%"}>
            <Image
              width={"100%"}
              onClick={() => setval(1)}
              cursor="pointer"
              src={singlePageData?.image[0]}
              mb={5}
            />
            <Image
              width={"100%"}
              onClick={() => setval(2)}
              cursor="pointer"
              src={singlePageData?.image[1]}
            />
          </Box>
          <Box width={"90%"}>
            <Image
              width={"100%"}
              src={
                val == 1 ? singlePageData?.image[0] : singlePageData?.image[1]
              }
            />
          </Box>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
            {singlePageData?.title}
          </h2>
          <p style={{ fontFamily: "'Playfair Display', serif" }}>
            <i> {singlePageData?.subtitle}</i>
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif" }}>$60.00</p>
          <p style={{ fontSize: "16px", marginTop: "20px" }}>
            {singlePageData?.desc}
          </p>
          <p style={{ fontSize: "16px", marginTop: "20px" }}>
            {singlePageData?.year} <br />
            Essay by Benjamin H.D. Buchloh <br />
            Published by Marian Goodman Gallery, New York <br />
            ISBN 0-944219-19-5
          </p>
          <p> in stock: {singlePageData?.inStock}</p>

          <Button
            ref={btnRef}
            colorScheme="teal"
            // onClick={onOpen}
            onClick={() => {
              onOpen();
              handleADDtoCART(singlePageData._id);
            }}
            // key={size}
            // sending product ID directly through function
          >
            ADD TO CART
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size={"md"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Cart count</DrawerHeader>

              <DrawerBody>
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
        </div>
      </div>
    </div>
  );
};

// ******************************* DRAWER *****************
