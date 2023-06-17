import React, { useEffect } from "react";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import "./shop.css";

import { Shopcard } from "./Shopcard";
import ShopBig from "../../assets/Shop_Big.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../../Redux/productReducer/action";

/*  Shop Page by Sourav */

export const Shop = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading } = useSelector((store) => store.productReducer);
  const location = useLocation();

  // console.log("@@@@", products);

  useEffect(() => {
    //  add ParamsObj inside getProducts and also in action.js when adding the filtering/sorting and useSearchParams
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img src={ShopBig} alt="Image" style={{ maxWidth: "100%" }} />
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
      <div className="ShopContainer">
        <h3>NEW</h3>
        <div className="CardContainer">
          {/* Include the Card component */}

          {products?.length > 0 &&
            products?.map((ele) => {
              return (
                <div key={ele.id}>
                  <Link to={`/shop/${ele._id}`}>
                    <Shopcard {...ele} />
                  </Link>
                </div>
              );
            })}
        </div>
        <Link to="/collections/shop">
          <Button>SHOP ALL</Button>
        </Link>
      </div>
    </div>
  );
};
