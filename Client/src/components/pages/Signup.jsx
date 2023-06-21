import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Select, Stack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
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
import "../../App.css";

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
  const [isErrorVal, setIsErrorVal] = useState(false);
  const [value, setValue] = useState("");

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

    if (!email || !password) {
      setIsErrorVal(true); // Set the form validation error
      toast({
        position: "top",
        title: "Validation Error",
        description: "Please fill in all the fields.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return; // Stop further execution if the form is not valid
    }

    // console.log(state);
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
          // console.log("waah kya baat hai", res.data.registeredUser);
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
          description: "Error Occurred",
          // description: data.msg,
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
        p={10}
        backgroundImage={
          // "url(https://www.technocrazed.com/wp-content/uploads/2015/11/Cool-Black-And-White-Wallpapers-Resolution-1920x1080-Desktop-Backgrounds-130.jpg)"
          "url(https://img.freepik.com/free-vector/watercolor-oil-painting-background_23-2150129394.jpg?w=996&t=st=1687123607~exp=1687124207~hmac=4931bcfd3e857e0bf0e3553a26d29655ce8fc66c5de6e618f16dbbed37291eb4)"
        }
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Heading
          fontWeight={"700"}
          fontSize={"50px"}
          textAlign={"center"}
          color={"#616161"}
          // borderBottom={"2px solid black"}
        >
          Signup
        </Heading>
        <Box
          width={"70%"}
          display={"flex"}
          margin={"auto"}
          mt={"50px"}
          borderRadius={"20px"}
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

                <FormLabel mt={2}>
                  {" "}
                  <span style={{ color: "red" }}>*</span> Email address{" "}
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your Email"
                  onChange={handleChange}
                  isRequired
                />

                <FormLabel mt={2}>
                  <span style={{ color: "red" }}>*</span> Password{" "}
                </FormLabel>

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

                <FormLabel mt={2}>
                  <span style={{ color: "red" }}>*</span> Age
                </FormLabel>
                <Input
                  type="number"
                  name="age"
                  value={age}
                  placeholder="Enter your Age"
                  onChange={handleChange}
                  isRequired
                />
                {/* Roles */}
                <FormLabel mt={2}>
                  <span style={{ color: "red" }}>*</span> Role
                </FormLabel>

                <Select
                  className="selectRole"
                  variant="outline"
                  placeholder="Select role..."
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  onChange={(e) => {
                    handleChange;
                    setValue(e.target.value);
                  }}
                  // below is only for placeholder/value color
                  {...(value === "" && { color: "gray" })}
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </Select>

                <FormLabel mt={2}>
                  <span style={{ color: "red" }}>*</span> City
                </FormLabel>
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
            </form>
            <Link to={"/login"}>
              <Button mt={6} textAlign={"center"} variant={"ghost"}>
                Already have an account ? &nbsp;{" "}
                <span style={{ color: "red" }}>LOGIN</span>
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
