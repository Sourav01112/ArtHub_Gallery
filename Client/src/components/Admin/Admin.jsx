import React, { useEffect } from "react";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import "../Shop/shop.css";

import { Shopcard } from "../Shop/Shopcard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getAdminProducts } from "../../Redux/adminReducer/action";

/*  Shop Page by Sourav */

export const Admin = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading } = useSelector((store) => store.adminReducer);
  const location = useLocation();

  console.log("@@@@", products);

  useEffect(() => {
    //  add ParamsObj inside getProducts and also in action.js when adding the filtering/sorting and useSearchParams
    dispatch(getAdminProducts());
  }, []);

  return (
    <div>
      {/* ADMIN All Products  */}
      <h3 style={{ fontSize: "30px", marginTop: "50px", marginLeft: "4%" }}>
        NEW
      </h3>
      <div className="ShopContainer">
        <div className="CardContainer">
          {/* Include the Card component */}

          {products?.length > 0 &&
            products?.map((ele) => {
              return (
                <div key={ele._id}>
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
