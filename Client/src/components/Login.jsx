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
 
} from "@chakra-ui/react";
import { ChevronDownIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    if (email && password) {
      axios
        .post(`${"http://localhost:4500/user/login"}`, {
          email,
          password,
        })
        .then((res) => {
          //   console.log(res);
          toast({
            position: "top",
            title: res.statusText,
            description: res.data.msg,
            status: res.data.msg === "Login Successful" ? "success" : "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            position: "top",
            title: `Request Failed`,
            description: `Something went wrong please try again.`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Box
        id="log-Sec"
        p={20}
        backgroundImage={
          "url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SNc_bPaMeiw63zp8r/white-seamless-animated-background-loop_rizjvmafux_thumbnail-1080_01.png)"
        }
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Heading fontWeight={"500"} textAlign={"center"}>
          Login
        </Heading>
        <Box
          width={"60%"}
          display={"flex"}
          margin={"auto"}
          mt={"50px"}
          backgroundColor={"white"}
          p={10}
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        >
          <Box width={"70%"}>
            <Image
              height={"100%"}
              src="https://img.xcitefun.net/users/2012/11/308288,xcitefun-incredible-painting-art-5.jpg"
              width={"95%"}
            />
          </Box>
          <Box width={"50%"}>
            <Image
              width={"50%"}
              display={"block"}
              margin={"auto"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7kHT9XYYCnVNBIrKcz7Z-b3mwtnJj-0y_tsgvEc0k8WdHVJA4T2jskYT6nElVcskZpY&usqp=CAU"
            />
            <FormControl mt={30} id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}

              <FormLabel mt={5} id="password">
                Password
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

              <Button
                display={"block"}
                bgColor={"black"}
                color={"white"}
                margin={"auto"}
                mt={"50px"}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Text mt={6} textAlign={"center"}>
                Not have a account? <Link to={"/signup"}>Sign up</Link>
              </Text>
            </FormControl>
          </Box>
        </Box>

        
      </Box>
    </div>
  );
};
