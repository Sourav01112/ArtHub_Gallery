import { ChevronDownIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginPageTemp from "../../assets/LoginPageTemp.png";
import { loadData, saveData } from "../../Utilities/localStorage";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../../Redux/authReducer/action";
import { loginCard } from "../../Utilities/encoded/login";
import { loginBackground } from "../../Utilities/encoded/loginBackground";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  Button,
  useToast,
  InputRightElement,
  FormHelperText,
  FormErrorMessage,
  MenuButton,
  MenuList,
  Menu,
  MenuItem,
} from "@chakra-ui/react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [isErrorVal, setIsErrorVal] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const isError = email === "";
  const { isAuth } = useSelector((store) => store.authReducer);
  // //("@@@location from Login", location);

  // All the Logic inside handleSubmit is in action.js of AuthReducer

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
      return;
    }

    const userData = {
      email,
      password,
    };

    dispatch(loginAction(userData, toast, setEmail, setPassword)).then(() => {
      function delay(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(); // resolving
          }, ms);
        });
      }

      delay(1000)
        .then(() => {
          toast({
            position: "top-right",
            title: !isAuth ? "Taking you back where you came from" : "-",
            status: "warning",
            duration: 1000,
            isClosable: true,
          });
        })
        .catch((err) => {
          //(err);
        });

      delay(2000)
        .then(() => {
          navigate(location.state);
        })
        .catch((err) => {
          //(err);
        });
    });
  };

  return (
    <div>
      <Box
        id="log-Sec"
        className="loginContainer"
        style={{ backgroundImage: `url(${loginBackground})` }}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Heading
          fontWeight={"700"}
          fontSize={"50px"}
          textAlign={"center"}
          color={"#616161"}
        >
          Login
        </Heading>
        <Box className="innerContainer">
          <Box>
            <Image src={loginCard} className="loginImageForm" />
          </Box>
          <Box>
            <FormControl mt={30} id="email" isInvalid={isError}>
              <FormLabel>
                <span style={{ color: "red" }}>*</span> Email address
              </FormLabel>
              <Input
                type="email"
                value={email}
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you used during Sign Up!
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}

              <FormLabel mt={5} id="password">
                <span style={{ color: "red" }}>*</span> Password
              </FormLabel>
              <InputGroup>
                <Input
                  required={true}
                  value={password}
                  placeholder="Enter your Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
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
              {!isError ? (
                <FormHelperText>Password is Mandatory!</FormHelperText>
              ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}

              <div
                style={{
                  display: "flex",
                  marginTop: "50px",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  display={"block"}
                  bgColor={"black"}
                  color={"white"}
                  // margin={"auto"}
                  // mt={"50px"}
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <Menu mt={"50px"}>
                  <MenuButton
                    color={"white"}
                    as={Button}
                    bgColor={"black"}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Login as
                  </MenuButton>
                  <MenuList>
                    <Link to="/admin_login">
                      <MenuItem border={"0"} maxH="50px">
                        ADMIN
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </div>
              <Button
                className="loginButton"
                textAlign={"center"}
                variant={"ghost"}
              >
                Not Registered, Don't worry?&nbsp;{" "}
                <Link to={"/signup"}>
                  <span style={{ color: "red" }}>SIGN UP</span>
                </Link>
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
