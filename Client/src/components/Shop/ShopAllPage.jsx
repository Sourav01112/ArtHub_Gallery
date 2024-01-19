import React, { useEffect, useState } from "react";
import ShopBig from "../../assets/Shop_Big.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Shopcard } from "./Shopcard";
import { getProducts } from "../../Redux/productReducer/action";
import { ShopNavbar } from "./ShopNavbar";
import { Button } from "@chakra-ui/react";

export const ShopAllPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputTyped, setInputTyped] = useState();
  const [searchError, setSearchError] = useState("");
  const [searchPerformed, setsearchPerformed] = useState(false);

  const { products, isLoading } = useSelector((store) => store.productReducer);
  const location = useLocation();

  var paramsObj;

  if (inputTyped) {
    paramsObj = {
      page: 1,
      limit: 50,
      search: {
        $text: {
          $search: inputTyped,
        },
      },
    };
  } else {
    paramsObj = {
      page: 1,
      limit: 50,
      search: {},
    };
  }

  useEffect(() => {
    dispatch(getProducts(paramsObj));
  }, []);

  const handleSearch = (e) => {
    setInputTyped(e.target.value);
    setSearchError("");
  };

  const handleButtonClick = () => {
    dispatch(getProducts(paramsObj));
  };

  return (
    <div>
      <ShopNavbar
        handleSearch={handleSearch}
        // handleKeyPress={handleKeyPress}
        inputTyped={inputTyped}
        setInputTyped={setInputTyped}
        handleButtonClick={handleButtonClick}
      />

      {searchPerformed === true ? searchError && <p>{searchError}</p> : null}

      {/* Shop ART Card  */}
      <div className="ShopContainer">
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
      </div>
      {/* Pagination */}

      <Button>Add Pagination</Button>
    </div>
  );
};
