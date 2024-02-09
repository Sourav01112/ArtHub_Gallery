import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Image,
  Text,
  Alert,
  AlertIcon,
  Button,
  useDisclosure,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./SingleProductPage.css";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/productReducer/action";
import Contact from "../../components/pages/Contact";
import { addToCartAction, getCartAction } from "../../Redux/cartReducer/action";
import { DrawerComponent } from "../DrawerComponent";
import { ProgressBar } from "react-loader-spinner";

export const SingleProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { token } = useSelector((store) => store.authReducer);
  const cartData = useSelector((store) => store.cartReducer);
  const navigate = useNavigate();
  const [val, setval] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [alertStatus, SetAlert] = useState(false);
  const { _id } = useParams();
  const btnRef = useRef();
  const toast = useToast();
  const { products, isLoading, isError } = useSelector(
    (store) => store.productReducer
  );

  const handleADDtoCART = () => {
    const payload = {
      productId: _id,
      quantity: 1,
    };
    dispatch(addToCartAction(payload, token, cartData, toast));
  };

  // if the token is deleted navigate to Login
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!localStorage.getItem("loginToken")) {
      navigate("/login");
    }
    dispatch(getCartAction(token));
    dispatch(getProducts({}, _id));
  }, [getCartAction]);

  return (
    <React.Fragment>
      {products?.length == 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <ProgressBar
            visible={true}
            height="100"
            width="100"
            barColor="#1A237E"
            borderColor="black"
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      ) : (
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
              <ChevronRightIcon boxSize={4} color="gray.500" />{" "}
              {products?.title}
            </Text>
          </div>

          <div className="singlProductAlign">
            <div className="ImageFlex">
              <div className="ImageFlexImage">
                <Box
                  className="smallImages"
                  width={"20%"}
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
            </div>
            <div>
              <div
                className="content"
                style={{
                  textAlign: "center",
                  width: "80%",
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
                  <strong> Published by </strong> Marian Goodman Gallery, New
                  York <br /> <br />
                  <strong>ISBN</strong> 0-944219-19-5 <br /> <br />
                </p>
                <p>
                  {" "}
                  <strong>in stock:</strong> {products?.inStock} <br />
                  <br />
                </p>
                <div
                  className="ButtonContainer"
                >
                  <Button
                    onClick={() => handleADDtoCART()}
                    colorScheme="teal"
                    size="lg"
                    mb={3}
                  >
                    ADD TO CART
                  </Button>

                  <Button
                    ref={btnRef}
                    onClick={() => onOpen()}
                    colorScheme="black"
                    size="lg"
                  >
                    SHOW CART
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/*  Showing Cart Drawer */}

          <DrawerComponent
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            btnRef={btnRef}
          />
          <Contact />
        </div>
      )}
    </React.Fragment>
  );
};

