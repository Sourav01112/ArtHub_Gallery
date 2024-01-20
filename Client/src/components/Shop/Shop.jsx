import React, { useEffect, useState } from "react";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import { Shopcard } from "./Shopcard";
import { Shop_Big } from "../../Utilities/encoded/Shop_Big";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../../Redux/productReducer/action";
import axios from "axios";
import "./shop.css";
import SkeletonModel from "./SkeletonModel";

/*  Shop Page by Sourav */

export const Shop = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading, isError, error } = useSelector(
    (store) => store.productReducer
  );
  const location = useLocation();
  const [data, setData] = useState([]);

  var paramsObj = {
    page: 1,
    limit: 50,
    search: {},
  };

  useEffect(() => {
    dispatch(getProducts(paramsObj));
  }, []);

  // //(products);

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
        {/* <Image src={Shop_Big} className="loginImageForm" w={"100%"} /> */}

        <Link to="/collections/shop">
          <div
            style={{
              position: "absolute",
              top: "5%",
              left: "90%",
              color: "white",
              // padding: "10px",
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
      {/* Shop ART Card  */}
      <h3 style={{ fontSize: "30px", marginTop: "50px", marginLeft: "4%" }}>
        NEW
      </h3>

      <div className="ShopContainer">
        <div className="CardContainer">
          {/* Include the Card component */}

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
      </div>
    </div>
  );
};
