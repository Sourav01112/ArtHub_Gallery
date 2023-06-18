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
        // console.log(res.data.data.productInCart, "15");
        setData(res.data.data.productInCart);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ overflowX: "hidden", overflow: "hidden" }}>
      <hr style={{ border: "2px solid gray" }} />
      <h1 style={{ marginBottom: "15px", marginTop: "15px" }}>CART LIST</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data?.map((item, index) => {
          return (
            <div
              key={item.id}
              style={{
                margin: "10px",
                // background: "#eee",
                // border: "2px solid blue",
              }}
            >
              <div
                style={{
                  display: "flex",
                  // border: "2px solid red"
                }}
              >
                <img
                  style={{
                    width: "50%",
                  }}
                  src={item.image[0]}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "2",
                    marginLeft: "10px",
                  }}
                >
                  <p
                    style={{ color: "red", fontWeight: 800, fontSize: "16px" }}
                  >
                    {item.artist}{" "}
                  </p>
                  <p style={{ fontSize: "12px" }}>{item.subtitle}</p>
                  <strong>
                    {" "}
                    <p> $ {item.price} </p>{" "}
                  </strong>
                  <p> + 1 - </p>
                  <strong>
                    <p>Remove</p>
                  </strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
