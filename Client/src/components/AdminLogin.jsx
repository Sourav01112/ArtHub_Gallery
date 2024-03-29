import axios from "axios";
import { FormErrorMessage, FormHelperText, useToast } from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyToken } from "../Redux/adminReducer/action";

export default function Admin() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isErrorVal, setIsErrorVal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const isError = email === "";

  // //(location, admin);

  function handleAdminLogin() {
    // Form validation
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

    // console.table({ email, password });
    if (email && password) {
      axios
        .post(`${"http://localhost:4500/admin"}`, {
          email,
          password,
        })
        .then((res) => {
          //(res);
          toast({
            position: "top",
            title: res.statusText,
            description: res.data.msg,
            status: res.data.msg === "Login Successful." ? "success" : "error",
            duration: 9000,
            isClosable: true,
          });

          if (res.data.status == "success") {
            localStorage.setItem("adminToken", res.data.token);
            dispatch(verifyToken()).then(() => {
              //  as of now redirecting to homepage
              navigate(location.state ? location.state : "/");
            });
          }
        })
        .catch((err) => {
          //(err);
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
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}></Stack>
        <Box
          // rounded={"2xl"}
          borderRadius={"45px"}
          bg={useColorModeValue("white", "gray.700")}
          //   boxShadow={"lg"}
          boxShadow={"2xl"}
          p={10}
          w={{ base: "335px", md: "470px" }}
          //   border={"1px solid black"}
        >
          <Heading marginBottom={4} fontSize={"4xl"} textAlign={"center"}>
            Admin
          </Heading>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={isError}>
              <FormLabel>Email</FormLabel>
              <Input
                isRequired
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you used during Sign Up!
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl id="password" isInvalid={isError}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  isRequired
                  required={true}
                  value={password}
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
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"flex-end"}
                justify={"end"}
              >
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"black"}
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }}
                onClick={handleAdminLogin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
