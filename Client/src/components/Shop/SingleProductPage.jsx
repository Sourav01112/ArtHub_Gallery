import React, { useEffect, useState } from "react";
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

export const SingleProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading, isError } = useSelector(
    (store) => store.productReducer
  );

  //   console.log("@@products", products);

  const dispatch = useDispatch();

  const [isAuth, SetisAuth] = useState(true);
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

  const [val, setval] = useState(1);

  const [img, SetImage] = useState(
    "https://cdn.shopify.com/s/files/1/2095/4219/products/MGGS_GabrielOrozco_CorplegadosandParticles_Cover.jpg?v=1669233423&width=823"
  );

  const imgArr = [
    "https://cdn.shopify.com/s/files/1/2095/4219/products/MGGS_GabrielOrozco_CorplegadosandParticles_Cover.jpg?v=1669233423&width=823",
    "https://cdn.shopify.com/s/files/1/2095/4219/products/MGG_Orozco_Corplegados_Pages.jpg?v=1677264760&width=823",
  ];

  const handleBuy = () => {
    if (!isAuth) {
      const element = document.getElementById("section-1");
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      SetAlert((prev) => !prev);
      const element = document.getElementById("section-1");
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const func = () => {
    setTimeout(() => {
      SetAlert(false);
    }, 2000);
  };

  useEffect(() => {
    func();
  }, [alertStatus]);

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
        <Link style={{ marginLeft: "600px", fontSize: "30px" }}>
          <DrawerExample />
        </Link>
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

          <button
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "25px",
              fontWeight: "500",
              marginTop: "50px",
            }}
            id="Add-btn"
            onClick={() => handleBuy()}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

// ******************************* DRAWER *****************

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <>
      <AiOutlineShoppingCart onClick={onOpen} />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart Page</DrawerHeader>
          <Divider />

          <DrawerBody mt={150}>
            <img
              src="https://cpimg.tistatic.com/04750918/b/4/extra-04750918.jpg"
              alt=""
              style={{ margin: "auto", alignItems: "center", width: "60%" }}
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                textDecoration: "underline",
              }}
            >
              Cart is Empty
            </p>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
