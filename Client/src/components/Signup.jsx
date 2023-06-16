import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Image,
  Button,
} from "@chakra-ui/react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case "RESET_INPUT_FIELDS": {
      return {
        ...inState,
      };
    }
    default: {
      console.log("Action Type is Invalid");
    }
  }
};

const inState = {
  name: "",
  email: "",
  password: "",
  age: "",
  city: "",
};

export const Signup = () => {
  const [state, dispatch] = useReducer(formReducer, inState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "RESET_INPUT_FIELDS" });
  };

  const handleChange = (e) => {
    console.log("@e.target.value", e.target.value);
    let { name, value } = e.target;

    // logic to convert Age string to number
    const payload = {
      name: name,
      value: value,
    };
    if (name === "age") {
      payload.value = Number(value);
    }
    dispatch({
      type: "CHANGE_INPUT",
      payload: payload,
    });
  };

  const { name, email, password, age, city } = state;

  return (
    <div>
      <Box
        id="signup"
        p={20}
        backgroundImage={
          "url(https://www.technocrazed.com/wp-content/uploads/2015/11/Cool-Black-And-White-Wallpapers-Resolution-1920x1080-Desktop-Backgrounds-130.jpg)"
        }
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Heading fontWeight={"500"} textAlign={"center"}>
          Signup
        </Heading>
        <Box
          width={"70%"}
          display={"flex"}
          margin={"auto"}
          mt={"50px"}
          backgroundColor={"white"}
          p={10}
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        >
          <Box>
            <Image
              mt={39}
              width={"90%"}
              src="https://img.xcitefun.net/users/2012/11/308292,xcitefun-incredible-painting-art-1.jpg"
            />
          </Box>
          <Box width={"60%"}>
            <form action="" onSubmit={handleSubmit}>
              <FormControl mt={30}>
                <FormLabel>
                  {" "}
                  <span style={{ color: "red" }}>*</span> Name
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter your Name"
                  onChange={handleChange}
                  isRequired
                />

                <FormLabel mt={2}>Email address *</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your Email"
                  onChange={handleChange}
                  isRequired
                />

                <FormLabel mt={2}>Password *</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your Password"
                  onChange={handleChange}
                  isRequired
                />

                <FormLabel mt={2}>Age *</FormLabel>
                <Input
                  type="number"
                  name="age"
                  value={age}
                  placeholder="Enter your Age"
                  onChange={handleChange}
                  isRequired
                />

                <FormLabel mt={2}>City *</FormLabel>
                <Input
                  type="text"
                  name="city"
                  value={city}
                  placeholder="Enter your City"
                  onChange={handleChange}
                  isRequired
                />
              </FormControl>
              <input
                type="submit"
                style={{
                  width: "100%",
                  fontSize: "20px",
                  padding: "5px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  marginTop: "50px",
                }}
                value="Sign Up !"
              />
              {/* <Text textAlign={"Center"} mt={6}>
                If you have an account?{" "}
              </Text> */}
            </form>
            <Link to={"/login"}>
              <Button mt={6} textAlign={"center"}>
                I already have an account
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

{
  /* <Link to={"/login"}>Login</Link> */
}
