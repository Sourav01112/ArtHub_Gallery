import {
  Box,
  Flex,
  Text,
  HStack,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";

import "./shop.css";

// This will handle all the filter and sort and useSearchParams
export const ShopNavbar = ({ handleSearch, inputTyped, handleButtonClick }) => {
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

      <Input
        placeholder="search anything"
        value={inputTyped}
        onChange={(e) => handleSearch(e)}
      />

      <Button onClick={() => handleButtonClick()}>Submit</Button>
    </div>
  );
};
