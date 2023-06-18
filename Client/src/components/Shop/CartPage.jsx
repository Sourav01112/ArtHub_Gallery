import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = { userID: localStorage.getItem("userID") };
    const headers = { loginToken: localStorage.getItem("loginToken") };
    axios
      .post("http://localhost:4500/shop/get-cart", data, { headers })
      .then((res) => {
        console.log(res.data.data.productInCart, "15");
        setData(res.data.data.productInCart);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>

      <h1>PRODUCT LIST</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data?.map((item, index) => {
          return (
            <div
              style={{
                margin: "50px 30px",
                background: "#eee",
                width: "27%",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "300px",
                }}
                src={item.image[0]}
              />
              <p>{item.title}</p>
              <p> By {item.artist} </p>
              <p> PRICE : {item.price} Only/- </p>
              <button> PAY NOW </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
