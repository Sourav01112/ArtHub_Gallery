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

  // state for Add Product Form
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState([""]);
  const [price, setPrice] = useState("");
  const [subtitle, setSub] = useState("");
  const [year, setYear] = useState("");
  const [artist, setArtist] = useState("");
  const [inStock, setStock] = useState("");

  // state for Deleted Data
  const [deletedData, setDeletedData] = useState([]);

  // console.log("@@@@", products);

  const open = () => {
    setisOpen1(true);
  };

  const onOPen = () => {
    setonOpen1(false);
  };
  const close = () => {
    setonClose1(false);
  };

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
  }, [deletedData]);

  //  To post New Product

  const addNewProduct = (e) => {
    e.preventDefault();
    if (
      !title ||
      !image ||
      !desc ||
      !price ||
      !subtitle ||
      !year ||
      !artist ||
      !inStock
    ) {
      toast({
        position: "top",
        title: "Please fill in all required fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    axios
      .post(
        "http://localhost:4500/admin/add-product",

        { title, desc, image, price, subtitle, year, artist, inStock }
      )
      .then((res) => {
        if (res.data.msg === "New Product added") {
          toast({
            position: "top",
            title: "Product Successfully Added",
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
    // console.log({ title, desc, image, price, subtitle, year, artist, inStock });

    setTitle("");
    setDesc("");
    setImage("");
    setPrice("");
    setSub("");
    setYear("");
    setArtist("");
    setStock("");
  };

  const handleDelete = () => {
    const requestData = { ids: deletedData };
    axios
      .delete("http://localhost:4500/admin/delete-products", {
        data: requestData,
      })
      .then((res) => {
        console.log(res);
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
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        ADD Product
      </Button>
      {deletedData.length > 0 && (
        <Button onClick={handleDelete}>Delete Selected</Button>
      )}
      <div className="ShopContainer">
        <div className="CardContainer">
          {/* Include the Card component */}

          {data?.length > 0 &&
            data?.map((ele) => {
              return (
                <div key={ele._id}>
                  {/* <Link to={`/shop/${ele._id}`}> */}
                  <div className="ShopCard">
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
                  <Button
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      open();
                    }}
                  >
                    EDIT
                  </Button>
                  <input
                    type="checkbox"
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
                  />
                </div>
              );
            })}
        </div>
      </div>

      {/* ADD PRODUCT MODAL */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box display={{ base: "24px", md: "block" }} mt={4}>
              <FormControl mt={4} className="formControl">
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="Title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <br />

                <FormLabel>Image</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Min. 3 images"
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  isRequired
                />
                <br />
                <br />

                <FormLabel>Description</FormLabel>
                <Input
                  placeholder="Description"
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  isRequired
                />
                <br />
                <br />
                <FormLabel>Price</FormLabel>
                <Input
                  placeholder="Price"
                  type="number"
                  value={price}
                  onChange={(e) => Number(setPrice(e.target.value))}
                  isRequired
                />
                <br />
                <br />
                <FormLabel>Subtitle</FormLabel>
                <Input
                  placeholder="Subtitle"
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSub(e.target.value)}
                  isRequired
                />
                <br />
                <br />
                <FormLabel>Year</FormLabel>
                <Input
                  placeholder="Year"
                  type="number"
                  value={year}
                  onChange={(e) => Number(setYear(e.target.value))}
                  isRequired
                />
                <br />
                <br />
                <FormLabel>Artist</FormLabel>
                <Input
                  placeholder="Artist"
                  type="text"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  isRequired
                />
                <br />
                <br />
                <FormLabel>In Stock</FormLabel>
                <Input
                  placeholder="Stock"
                  type="number"
                  value={inStock}
                  onChange={(e) => Number(setStock(e.target.value))}
                  isRequired
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addNewProduct}>
              ADD
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* EDIT MODAL 

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen1={isOpen1}
        onClose1={onClose1}
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
            <Button colorScheme="blue" mr={3}>
              EDIT
            </Button>
            <Button onClick={onClose1}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </div>
  );
};
