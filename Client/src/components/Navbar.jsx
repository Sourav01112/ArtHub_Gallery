import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  position,
  Text,
  Image,
  useToast,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import LoginLogo from "../assets/Login.png";
import { logoutAction } from "../Redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store.authReducer);
  console.log("isAuth is ?", isAuth);

  const toast = useToast();

  //****************  Scroll to Top   **************
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold =
        document.documentElement.scrollHeight - window.innerHeight;

      if (window.pageYOffset < threshold / 2) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsTop(true);
  };
  //****************  Scroll to Top  ENDS **************

  // LogOut

  const logout = () => {
    toast({
      position: "top",
      title: "Logging out..",
      status: "error",
      duration: 1000,
      isClosable: true,
    });
    toast({
      position: "bottom",
      title: "Redirecting To Homepage !",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    // delaying Navigate after 2 seconds
    function delay(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(); // resolving
        }, ms);
      });
    }

    delay(2000)
      .then(() => {
        dispatch(logoutAction);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="navbarNew"
        style={{
          display: "flex",
          justifyContent: "space-between",
          // paddingBottom: "10px",
          alignItems: "center",
          marginBottom: "1px",
          padding: "30px",
        }}
        id="section-1"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="" style={{ width: "10%" }} />
          <Link
            to={"/"}
            style={{
              color: "red",
              fontSize: "16px",
              marginLeft: "10px",
              marginBottom: "15px",
            }}
          >
            MODERN ART GALLERY
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            alignItems: "center",
          }}
        >
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }}>ARTISTS</Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }}>EXHIBITIONS</Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }}>NEWS</Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }} to={"/shop"}>
            SHOP
          </Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }} to={"/contact"}>
            CONTACT
          </Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }} to={"/about"}>
            ABOUT
          </Link>
          <div>
            <Menu>
              <MenuButton as={Text} mt={4} color={"rgba(0, 0, 0, 0.547)"}>
                PROFILE
              </MenuButton>
              <MenuList mt={5} p={0}>
                <Link to={"/signup"}>
                  <MenuItem border={"0"} maxH="60px">
                    <Image
                      boxSize="2.1rem"
                      // borderRadius="full"
                      src="https://img.uxwing.com/wp-content/themes/uxwing/download/editing-user-action/signup-icon.svg"
                      alt="SignUp"
                      ml="10%"
                      mr="20%"
                    />
                    <span> SIGN UP</span>
                  </MenuItem>
                </Link>

                {!isAuth ? (
                  <Link to={"/login"}>
                    <MenuItem border={"0"} maxH="60px" bg={"#CCFF90"}>
                      <Image
                        boxSize="2rem"
                        // borderRadius="full"
                        src={LoginLogo}
                        alt="Login"
                        ml="10%"
                        mr="20%"
                      />
                      <span>LOGIN</span>
                    </MenuItem>
                  </Link>
                ) : (
                  <MenuItem
                    onClick={onOpen}
                    // onClick={logout}
                    border={"0"}
                    maxH="60px"
                    bg={"#FF7043"}
                  >
                    <Image
                      boxSize="2rem"
                      // borderRadius="full"
                      src={
                        "https://cdn.icon-icons.com/icons2/2518/PNG/512/logout_icon_151219.png"
                      }
                      alt="Logout"
                      ml="10%"
                      mr="20%"
                    />
                    <span>LOGOUT</span>
                  </MenuItem>
                )}
              </MenuList>
            </Menu>

            <AlertDialog
              motionPreset="scale"
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isCentered
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Log Out !
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        logout();
                        onClose();
                      }}
                      ml={3}
                    >
                      Logout
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </div>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)", marginBottom: "5px" }}>
            <Search2Icon />
          </Link>
        </div>
      </div>

      {/* To top button :- CHAKRA */}

      <Box position="fixed" bottom="2rem" right="0.5rem">
        {isTop && (
          <FaArrowCircleUp color="#757575" size={30} onClick={scrollToTop} />
        )}
      </Box>
      {/* <hr /> */}
    </>
  );
}

export default NavBar;
