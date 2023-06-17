import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Image,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

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

const url =
  process.env.NODE_ENV == "development"
    ? import.meta.env.VITE_REACT_API_URL
    : import.meta.env.VITE_REACT_APP_PROD_URL;

export const Signup = () => {
  const [state, dispatch] = useReducer(formReducer, inState);
  const [showPassword, setShowPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (signupSuccess) {
      const timeout = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [signupSuccess, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    axios
      .post(`http://localhost:4500/user/register`, {
        name: state.name,
        email: state.email,
        password: state.password,
        age: state.age,
        city: state.city,
      })
      .then((res) => {
        console.log("Data", res);
        if (res.data.msg === "The new user has been registered") {
          console.log("waah kya baat hai", res.data.registeredUser);
          setSignupSuccess(true);
          toast({
            position: "top",
            title: "Redirecting To Login Page",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
        toast({
          position: "top",
          description: res.data.msg,
          status:
            res.data.msg === "The new user has been registered"
              ? "success"
              : "error",
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log("Error", error);
        toast({
          position: "top-right",
          description: "Error occurred",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });

    dispatch({ type: "RESET_INPUT_FIELDS" });
  };

  const handleChange = (e) => {
    // console.log("@e.target.value", e.target.value);
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

                {/* <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  placeholder="Enter your Password"
                  onChange={handleChange}
                  isRequired
                /> */}

                <InputGroup>
                  <Input
                    isRequired
                    name="password"
                    value={password}
                    placeholder="Enter your Password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

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
              {/* <Text>{JSON.stringify(import.meta.env)}</Text> */}
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
