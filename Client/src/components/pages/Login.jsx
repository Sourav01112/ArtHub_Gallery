import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  Text,
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
import { ChevronDownIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginPageTemp from "../../assets/LoginPageTemp.png";
import { loadData, saveData } from "../../Utilities/localStorage";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../../Redux/authReducer/action";

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
  // console.log("@@@location from Login", location);

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
      return; // Stop further execution if the form is not valid
    }

    const userData = {
      email,
      password,
    };

    // API call Logic is in action.js
    dispatch(loginAction(userData, toast, setEmail, setPassword)).then(() => {
      // delaying Navigate after 2 seconds
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
          console.log(err);
        });

      delay(2000)
        .then(() => {
          navigate(location.state);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div>
      <Box
        id="log-Sec"
        p={10}
        backgroundImage={
          // "url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SNc_bPaMeiw63zp8r/white-seamless-animated-background-loop_rizjvmafux_thumbnail-1080_01.png)"

          "url(https://img.freepik.com/free-vector/watercolor-artwork_1409-2684.jpg?w=996&t=st=1687124167~exp=1687124767~hmac=74620e1e575dc094b45df3ea69670d28e0345865fa0d5a08c9acd8acbe68c21d)"
        }
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
        <Box
          width={"60%"}
          display={"flex"}
          margin={"auto"}
          mt={"50px"}
          borderRadius={"20px"}
          backgroundColor={"white"}
          p={10}
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        >
          <Box>
            <Image src={LoginPageTemp} mt={"50px"} width={"90%"} />
          </Box>
          <Box width={"50%"}>
            {/* <Image
              width={"50%"}
              display={"block"}
              margin={"auto"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7kHT9XYYCnVNBIrKcz7Z-b3mwtnJj-0y_tsgvEc0k8WdHVJA4T2jskYT6nElVcskZpY&usqp=CAU"
            /> */}
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
              <Button mt={6} textAlign={"center"} variant={"ghost"}>
                Don't have an account?&nbsp;{" "}
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
