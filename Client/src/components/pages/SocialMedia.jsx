import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

export const SocialMedia = () => {
  return (
    <div>
      <div className="last">
        <div>
          <h3
            style={{ fontSize: "25px", fontFamily: "Playfair Display, serif" }}
          >
            Join our list
          </h3>
        </div>
        <div>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(0, 0, 0, 0.700)",
              marginLeft: "70px",
            }}
          >
            Sign up to receive emails featuring the latest news and events.
          </p>
        </div>
        <div style={{ width: "40%", marginTop: "15px" }}>
          <InputGroup width={"100%"}>
            <InputRightElement pointerEvents="none">
              {/* <PhoneIcon color='gray.300' /> */}
              <ArrowForwardIcon style={{ marginRight: "6px" }} />
            </InputRightElement>
            <Input
              type="tel"
              padding={"20px"}
              borderRadius={"0"}
              placeholder="Your Email address"
            />
          </InputGroup>
        </div>
      </div>
      <hr />

      <div className="logo">
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <a href="#" class="fa fa-facebook"></a>
          <span id="name-pro">FACEBOOK</span>
        </div>

        <div>
          <a href="#" class="fa fa-twitter"></a>
          <span id="name-pro">TWITTER</span>
        </div>
        <div>
          <a href="#" class="fa fa-youtube"></a>
          <span id="name-pro">YOUTUBE</span>
        </div>
        <div>
          <a href="#" class="fa fa-instagram"></a>
          <span id="name-pro">INSTAGRAME</span>
        </div>
        <div>
          <a href="#" class="fa fa-wechat"></a>
          <span id="name-pro">WECHAT</span>
        </div>

        <div></div>
      </div>
    </div>
  );
};
