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
import { registerencoded } from "../../Utilities/encoded/registerencoded";
import { signupface } from "../../Utilities/encoded/signupface";
import { urlBase } from "../../api/constant";

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
  role: "",
};

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
      setIsErrorVal(true);
      toast({
        position: "top",
        title: "Validation Error",
        description: "Please fill in all the fields.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    axios
      .post(`${urlBase}/users/register`, {
        name: state.name,
        email: state.email,
        password: state.password,
        age: state.age,
        city: state.city,
        role: state.role,
      })
      .then((res) => {
        console.log("Data", res);
        if (res.data.msg === "The new user has been registered") {
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

  const { name, email, password, age, city, role } = state;

  return (
    <div>
      <Box
        id="signup"
        className="signupContainer"
        // p={10}
        style={{ backgroundImage: `url(${registerencoded})` }}
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
        <Box className="innerContainer">
          <Box>
            <Image className="formImage" src={signupface} />
          </Box>
          <Box>
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
                  name="role"
                  value={role}
                  onChange={handleChange}
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
              <Button
                className="signupButton"
                textAlign={"center"}
                variant={"ghost"}
              >
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
