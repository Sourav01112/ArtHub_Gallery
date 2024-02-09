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
  Spinner,
  Badge,
} from "@chakra-ui/react";
import { FaArrowCircleUp, FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { AiOutlineLogout } from "react-icons/ai";
import LoginLogo from "../assets/Login.png";
import { logoutAction } from "../Redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { emptyCartAction, getCartAction } from "../Redux/cartReducer/action";
import { signupLogo } from "../Utilities/encoded/signupLogo";
import { DrawerComponent } from "./DrawerComponent";
import { ImCart } from "react-icons/im";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const {
    isOpen: isLogoutModalOpen,
    onOpen: openLogoutModal,
    onClose: closeLogoutModal,
  } = useDisclosure();

  const cartData = useSelector((store) => store.cartReducer);

  // console.log("cartData in navBARRRRR", cartData);

  const cancelRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { token } = useSelector((store) => store.authReducer);
  const btnRef = useRef();
  const [showSpinner, setShowSpinner] = useState(true);

  const toast = useToast();
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  //****************  Scroll to Top   **************
  const [isTop, setIsTop] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    dispatch(getCartAction(token));

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
  }, [getCartAction]);

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
        dispatch(emptyCartAction);
        navigate("/");
      })
      .catch((err) => {
        //(err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // After 5 seconds, hide the spinner
      setShowSpinner(false);
    };

    fetchData();
  }, []); // Empty dependency array to run this effect only once

  return (
    <header>
      <div className="navbarNew" id="section-1">
        <div
          className="logoWrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt=""
            style={{ width: "15%", marginRight: "20px" }}
          />
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
          className="linkWrapper"
          ref={navRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Link className="links">ARTISTS</Link>
          <Link className="links">EXHIBITIONS</Link>
          <Link className="links">NEWS</Link>
          <Link to={"/shop"}>
            <span style={{ color: "red" }}>SHOP</span>
          </Link>
          <Link className="links" to={"/contact"}>
            CONTACT
          </Link>
          <Link className="links" to={"/about"}>
            ABOUT
          </Link>
          <div>
            <Menu>
              <MenuButton as={Text} color={"rgba(0, 0, 0, 0.547)"}>
                <span style={{ color: "red", fontWeight: 800, marginTop:'150px' }}>PROFILE</span>
                
              </MenuButton>
              <MenuList mt={5} p={0}>
                {localStorage.getItem("userName") && (
                  <MenuItem border={"0"} maxH="60px" pl={"30%"}>
                    👋
                    <span
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontSize: "20px",
                      }}
                    >
                      {localStorage?.getItem("userName")?.split(" ")[0]}
                    </span>
                  </MenuItem>
                )}

                {/* style={{ backgroundImage: `url(${registerencoded})` }} */}
                {/*  */}

                <Link to={"/signup"}>
                  <MenuItem border={"0"} maxH="60px">
                    <Image
                      boxSize="2.1rem"
                      src={signupLogo}
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
                    onClick={openLogoutModal}
                    border={"0"}
                    maxH="60px"
                    bg={"#FF7043"}
                  >
                    <Image
                      boxSize="2rem"
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
              isOpen={isLogoutModalOpen}
              leastDestructiveRef={cancelRef}
              onClose={closeLogoutModal}
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
                    <Button ref={cancelRef} onClick={closeLogoutModal}>
                      Cancel
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        logout();
                        // onClose();
                        closeLogoutModal();
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

          <DrawerComponent
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            btnRef={btnRef}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
              backgroundColor: isHovered ? "rgb(224, 224, 224)" : "",
              borderRadius: "5px",
              padding: "5px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onOpen()}
          >
            <ImCart
              ref={btnRef}
              style={{
                fontSize: "20px",
                marginRight: "5px",
              }}
            />

            {showSpinner ? (
              <Spinner size="sm" color="red.500" />
            ) : cartData?.cartData?.length > 0 ? (
              <Badge
                variant="solid"
                colorScheme="green"
                style={{ marginLeft: "5px" }}
              >
                {cartData?.cartData?.length}
              </Badge>
            ) : (
              ""
            )}
          </div>

          <Button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </Button>
        </div>
        <Button className="nav-btn" onClick={showNavBar}>
          <GiHamburgerMenu />
        </Button>
      </div>

      {/* To top button :- CHAKRA */}
      {/* <Box
        className="ScrollTopButton"
        position="fixed"
        bottom="2rem"
        right="0.5rem"
      >
        {isTop && (
          <FaArrowCircleUp color="#757575" size={30} onClick={scrollToTop} />
        )}
      </Box> */}
      {/* <hr /> */}
    </header>
  );
}

export default NavBar;
