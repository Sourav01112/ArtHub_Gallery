import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useToast,
  HStack,
  TagLabel,
  Checkbox,
} from "@chakra-ui/react";
import "../Shop/shop.css";

import { Shopcard } from "../Shop/Shopcard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getAdminProducts } from "../../Redux/adminReducer/action";
import axios from "axios";
import "./Admin.css";
// import { getAdminProducts } from "../../Redux/adminReducer/action";
const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

export const Admin = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = useSelector((store) => store.adminReducer);
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen1, setisOpen1, onOpen1, setonOpen1, onClose1, setonClose1] =
    useState(false);
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const location = useLocation();
  const toast = useToast();

  // state for Deleted Data
  const [deletedData, setDeletedData] = useState([]);
  const [refreshPage, setRefreshPage] = useState(false);

  // console.log("@@@@", products);

  useEffect(() => {
    //  add ParamsObj inside getProducts and also in action.js when adding the filtering/sorting and useSearchParams
    // dispatch(getAdminProducts());
    axios
      .get("http://localhost:4500/admin/getProducts")
      .then((res) => {
        // console.log("@@@response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshPage]);

  const handleDelete = () => {
    const requestData = { ids: deletedData };
    axios
      .delete("http://localhost:4500/admin/delete-products", {
        data: requestData,
      })
      .then((res) => {
        console.log(res);
        setRefreshPage(!refreshPage);
        if (res.data.msg === "Selected Item Deleted successfully") {
          toast({
            position: "top",
            title: "Selected Item Deleted successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            position: "top",
            title: "Error while Adding New Product ",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* ADMIN All Products  */}
      <h3 style={{ fontSize: "30px", marginTop: "50px", marginLeft: "4%" }}>
        Admin DASHBOARD
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "auto",
          textAlign: "center",
          padding: "45px",
          // border: "1px solid black",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <Link to="/admin/add-product">
          <Button colorScheme="green" mb={"10px"}>
            ADD Product
          </Button>
        </Link>
        {deletedData.length > 0 && (
          <Button w={"auto"} colorScheme="red" onClick={handleDelete}>
            Delete Selected
          </Button>
        )}
      </div>

      <div className="ShopContainer">
        <div className="CardContainer">
          {/* Include the Card component */}

          {data?.length > 0 &&
            data?.map((ele) => {
              return (
                <div className="parentShopCard" key={ele._id}>
                  {/* <Link to={`/shop/${ele._id}`}> */}
                  <div className="ShopCard1">
                    <img src={ele.image[0]} />
                    <p style={{ marginTop: "50px", fontFamily: "monospace" }}>
                      {ele.title}
                    </p>
                    <p className="subtitle">{ele.subtitle}</p>
                    {/* <p>{ele.desc}</p> */}
                    <p>${ele.price}</p>
                  </div>
                  {/* </Link>{" "} */}
                  <br />
                  <HStack
                  mb={15}
                    ml={5}
                    mr={5}
                    gap={100}

                    // style={{ border: "1px solid red" }}
                  >
                    <Button
                      colorScheme="green"
                      onClick={() => {
                        setOverlay(<OverlayOne />);
                        onOpen();
                      }}
                    >
                      EDIT
                    </Button>

                    <Checkbox
                      color={"gray"}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        if (e.target.checked === true) {
                          setDeletedData([...deletedData, ele._id]);
                        } else {
                          setDeletedData(
                            deletedData?.filter((ele) => ele !== ele._id)
                          );
                        }
                      }}
                    >
                      Delete
                    </Checkbox>
                  </HStack>
                </div>
              );
            })}
        </div>
      </div>

      {/* EDIT PRODUCT MODAL  */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              <FormControl mt={4} className="formControl">
                <FormLabel>Title</FormLabel>
                <Input placeholder="Title" />
                <br />
                <br />

                <FormLabel>Image</FormLabel>
                <Input ref={initialRef} placeholder="Min. 3 images" />
                <br />
                <br />

                <FormLabel>Description</FormLabel>
                <Input placeholder="Description" />
                <br />
                <br />
                <FormLabel>Price</FormLabel>
                <Input placeholder="Price" />
                <br />
                <br />
                <FormLabel>Subtitle</FormLabel>
                <Input placeholder="Subtitle" />
                <br />
                <br />
                <FormLabel>Year</FormLabel>
                <Input placeholder="Year" />
                <br />
                <br />
                <FormLabel>Artist</FormLabel>
                <Input placeholder="Artist" />
                <br />
                <br />
                <FormLabel>In Stock</FormLabel>
                <Input placeholder="Stock" />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button variant={"solid"} colorScheme="blue" mr={3}>
              EDIT
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
