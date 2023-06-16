import { Box, FormControl, FormLabel, Heading,Text,Input,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
    return (
        <div>
            <Box id="signup"  p={20}  backgroundImage={"url(https://www.technocrazed.com/wp-content/uploads/2015/11/Cool-Black-And-White-Wallpapers-Resolution-1920x1080-Desktop-Backgrounds-130.jpg)"} backgroundPosition={"center"} backgroundSize={"cover"}>
                {/* <Navbar /> */}
                {/* {alt} */}
                <Heading fontWeight={"500"} textAlign={"center"} >Signup</Heading>
                <Box width={"60%"} display={"flex"} margin={"auto"} mt={"50px"} backgroundColor={"white"}  p={10}  boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
                    <Box>
                        <Image mt={39} width={"90%"} src="https://img.xcitefun.net/users/2012/11/308292,xcitefun-incredible-painting-art-1.jpg" />
                    </Box>
                    <Box width={"60%"}>
                        {/* <Image width={"50%"} display={"block"} margin={"auto"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7kHT9XYYCnVNBIrKcz7Z-b3mwtnJj-0y_tsgvEc0k8WdHVJA4T2jskYT6nElVcskZpY&usqp=CAU"/> */}
                        <form action="">
                            <FormControl mt={30}>
                                <FormLabel>Name*</FormLabel>
                                <Input type='text' placeholder="Enter your Name"  isRequired />
                                <FormLabel mt={2}>Email address*</FormLabel>
                                <Input type='email' placeholder="Enter your Email" isRequired />
                                <FormLabel mt={2}>Password*</FormLabel>
                                <Input type='password' placeholder="Enter your Password"  isRequired />
                                <FormLabel mt={2}>Re-Enter-Password*</FormLabel>
                                <Input type='password' placeholder="Enter your Password" isRequired />

                                {/* <Button display={"block"} bgColor={"black"} color={"white"} margin={"auto"} mt={"50px"}>Submit</Button> */}
                            </FormControl>
                            <input type="submit" style={{ width: "100%", fontSize: "20px", padding: "5px", borderRadius: "5px", border: "none", backgroundColor: "black", color: "white", marginTop: "50px" }} value="Submit" />
                            <Text textAlign={"Center"} mt={6}>If you have an account? </Text>
                        </form>
                    </Box>

                </Box>
            </Box>
        </div>
    )
}

{/* <Link to={"/login"}>Login</Link> */}
