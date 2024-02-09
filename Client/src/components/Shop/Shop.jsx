import React, { useEffect, useRef, useState } from "react";
import { Badge, Box, Button, Spinner, useDisclosure } from "@chakra-ui/react";
import { Shopcard } from "./Shopcard";
import { Shop_Big } from "../../Utilities/encoded/Shop_Big";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../../Redux/productReducer/action";
import "./shop.css";
import SkeletonModel from "./SkeletonModel";
import { ImCart } from "react-icons/im";
import { DrawerComponent } from "../DrawerComponent";

export const Shop = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading, isError, error } = useSelector(
    (store) => store.productReducer
  );
  const [isTop, setIsTop] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const cartData = useSelector((store) => store.cartReducer);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  var paramsObj = {
    page: 1,
    limit: 50,
    search: {},
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   dispatch(getProducts(paramsObj));
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProducts(paramsObj));
    const handleScroll = () => {
      const threshold =
        document.documentElement.scrollHeight - window.innerHeight;

      if (window.scrollY < threshold / 8) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          alt="Image"
          src={Shop_Big}
          style={{
            maxWidth: "100%",
          }}
        />

        <Link to="/collections/shop">
          <div
            style={{
              position: "absolute",
              top: "5%",
              left: "90%",
              color: "white",
            }}
          >
            <p style={{ fontSize: "25px" }}>SHOP ALL</p>
          </div>
        </Link>

        <div
          style={{
            position: "absolute",
            top: "75%",
            left: "35%",
            color: "white",

            transform: "translate(-50%, -50%)",
            padding: "10px",
          }}
        >
          <p style={{ fontSize: "35px" }}>Manga Dan Graham Story </p>
          <p>
            A special reprint published on the occasion of the Marian Goodman
            Gallery exhibition Dan Graham: Is There Life After Breakfast?,
            curated by Peter Fischli.
          </p>
        </div>
      </div>
      <h3 style={{ fontSize: "30px", marginTop: "50px", marginLeft: "4%" }}>
        NEW
      </h3>

      <div className="ShopContainer">
        <div className="CardContainer">
          {isLoading
            ? [1, 2].map((n) => <SkeletonModel key={n} size={145} />)
            : products?.length > 0 &&
              products.map((ele) => (
                <div key={ele._id}>
                  <Link to={`/shop/${ele._id}`}>
                    <Shopcard {...ele} />
                  </Link>
                </div>
              ))}
        </div>
        <Link to="/collections/shop">
          <Button>SHOP ALL</Button>
        </Link>

        <DrawerComponent
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          btnRef={btnRef}
        />

        <Box
          className="hoverCart"
          position="fixed"
          bottom="2rem"
          right="1.5rem"
        >
          {isTop && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
                backgroundColor: "rgb(255, 213, 79)",
                borderRadius: "5px",
                padding: "5px",
              }}
              className="hoverContent"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => onOpen()}
            >
              <ImCart
                ref={btnRef}
                style={{
                  fontSize: "24px",
                }}
              />
              {cartData?.cartData.length === 0 ? (
                <Spinner size="sm" color="red.500" />
              ) : (
                <>
                  {cartData?.cartData?.length > 0 ? (
                    <Badge
                      variant="solid"
                      colorScheme="green"
                      style={{ marginLeft: "5px" }}
                    >
                      {cartData?.cartData?.length}
                    </Badge>
                  ) : (
                    <Badge
                      variant="solid"
                      colorScheme="red"
                      style={{ marginLeft: "5px" }}
                    >
                      0
                    </Badge>
                  )}
                </>
              )}
            </div>
          )}
        </Box>
      </div>
    </div>
  );
};
