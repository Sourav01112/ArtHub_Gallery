import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Navigate, useNavigate } from "react-router-dom";
export const AddProduct = () => {
  // state for Add Product Form
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState([""]);
  const [price, setPrice] = useState("");
  const [subtitle, setSub] = useState("");
  const [year, setYear] = useState("");
  const [artist, setArtist] = useState("");
  const [inStock, setStock] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [refreshPage, setRefreshPage] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  //  To post New Product

  useEffect(() => {
    if (addSuccess) {
      const timeout = setTimeout(() => {
        navigate("/admin");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [addSuccess]);

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
        // below code will trigger a refresh after axios process
        setRefreshPage(!refreshPage);
        if (res.data.msg === "New Product added") {
          setAddSuccess(true);
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

  return (
    <div className="addproductForm">
      <h2 style={{ fontSize: "30px", fontWeight: 800 }}> Add-Product</h2>
      <FormControl mt={4}>
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
        <Button mt={50} colorScheme="blue" mr={3} onClick={addNewProduct}>
          ADD
        </Button>
      </FormControl>
    </div>
  );
};
