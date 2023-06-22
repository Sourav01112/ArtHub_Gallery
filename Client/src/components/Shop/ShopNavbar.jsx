import { Box, Flex, Text, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import "./Shop.css";
// This will handle all the filter and sort and useSearchParams
export const ShopNavbar = () => {
  //  Dummy Dat, change it with API call to artists
  const options = [
    {
      value: "Ahtila, Eija-Liisa",
      label: "Ahtila, Eija-Liisa",
      color: "#FF8B00",
    },
    {
      value: "Baghramian, Nairy",
      label: "Baghramian, Nairy",
    },
    { value: "Baldessari, John", label: "Baldessari, John", color: "#FF8B00" },
    { value: "Baldessari, John", label: "Baldessari, John" },
    { value: "Baldessari, John", label: "Baldessari, John", color: "#FF8B00" },
    { value: "Baldessari, John", label: "Baldessari, John" },
    { value: "Baldessari, John", label: "Baldessari, John", color: "#FF8B00" },
    { value: "Baldessari, John", label: "Baldessari, John" },
    { value: "Baldessari, John", label: "Baldessari, John", color: "#FF8B00" },
    { value: "Baldessari, John", label: "Baldessari, John" },
    { value: "Baldessari, John", label: "Baldessari, John", color: "#FF8B00" },
    { value: "Baldessari, John", label: "Baldessari, John" },
    { value: "Baldessari, John", label: "Baldessari, John", color: "#FF8B00" },
    { value: "Baldessari, John", label: "Baldessari, John" },
  ];

  const colorStyles = {
    menu: (provided) => ({
      ...provided,
      // maxHeight: "200px", // Adjust the height as needed
      overflowY: "scroll",
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      marginLeft: "7px",
      marginRight: "7px",
    }),
    option: (styles, { data, isDisable, isFocused, isSelected }) => {
      //   console.log("option", data, isDisable, isFocused, isSelected);
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
  };

  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options?.filter((ele) =>
        ele.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("loadOptions", searchValue, filteredOptions);
      callback(filteredOptions);
    }, 2000);
  };

  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };

  return (
    <div className="stackNav">
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        spacing="30px"
        margin={"auto"}
        justifyItems={"center"}
        alignContent={"center"}
        alignItems={"center"}
        h="100px"

        // border={"1px solid red"}
      >
        <HStack
          //   border={"1px solid red"}
          w="30%"
          justifyContent={"space-evenly"}
        >
          <Text fontSize="md">SHOP ALL</Text>
          <Text fontSize="md">PUBLICATION</Text>
          <Text fontSize="md">EDITIONS</Text>
          <Text fontSize="md">INFO</Text>
        </HStack>

        <HStack
          // border={"1px solid red"}
          w="45%"
          justifyContent={"center"}
        >
          <Text fontSize="lg" color={"red"}>
            MODERN ART GALLERY
          </Text>
        </HStack>

        <HStack
          //   border={"1px solid red"}
          w="15%"
          justifyContent={"space-evenly"}
        >
          <Text fontSize="md">SEARCH</Text>
          <Text fontSize="md">CART</Text>
        </HStack>
      </Stack>
      {/* <hr></hr> */}

      <AsyncSelect
        loadOptions={loadOptions}
        defaultOptions
        isMulti
        placeholder="Select Artist...."
        onChange={handleChange}
        styles={colorStyles}
      />
    </div>
  );
};
