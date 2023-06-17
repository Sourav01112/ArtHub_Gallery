import React from "react";
import { Alert, AlertIcon, AlertTitle, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <Alert
        status="warning"
        color="red"
        bg="#F7F7F7"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="100vh"
        pt={"100px"}
      >
        <Image
          mt="-200px"
          w={"300px"}
          src="https://tss-static-images.gumlet.io/notfound.png"
        />
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle color="black" mt={5} mb={1} fontSize="3xl">
          We can't seem to find the page you are looking for
        </AlertTitle>
        <Link to="/">
          <Button w="405px" h="50px" mt="40px" bg="#117A7A" color="white">
            LET'S TAKE YOU HOME
          </Button>
        </Link>
      </Alert>
    </div>
  );
};
