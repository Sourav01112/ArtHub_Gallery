import React, { useEffect } from "react";
import ShopBig from "../../assets/Shop_Big.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { Shopcard } from "./Shopcard";
import { getProducts } from "../../Redux/productReducer/action";

export const ShopAllPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading } = useSelector((store) => store.productReducer);
  const location = useLocation();

  useEffect(() => {
    //  add ParamsObj inside getProducts and also in action.js when adding the filtering/sorting and useSearchParams
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {/* Shop ART Card  */}
      <div className="ShopContainer">
        <h3>NEW</h3>
        <div className="CardContainer">
          {/* Include the Card component */}

          {products?.length > 0 &&
            products?.map((ele) => {
              return <Shopcard key={ele.id} {...ele} />;
            })}
        </div>
      </div>
    </div>
  );
};
