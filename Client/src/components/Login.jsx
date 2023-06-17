import { Box, FormControl, FormLabel, Heading,Image,Input,Text,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {


    


  return (
    <div>
        
        <Box id="log-Sec"   p={20}  backgroundImage={"url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SNc_bPaMeiw63zp8r/white-seamless-animated-background-loop_rizjvmafux_thumbnail-1080_01.png)"} backgroundPosition={"center"} backgroundSize={"cover"}>
            <Heading fontWeight={"500"} textAlign={"center"} >Login</Heading>
            <Box width={"60%"} display={"flex"} margin={"auto"} mt={"50px"}  backgroundColor={"white"} p={10} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
                <Box width={"70%"}>
                    <Image height={"100%"} src="https://img.xcitefun.net/users/2012/11/308288,xcitefun-incredible-painting-art-5.jpg" width={"95%"} />
                </Box>
                <Box width={"50%"}>
                    <Image width={"50%"} display={"block"} margin={"auto"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7kHT9XYYCnVNBIrKcz7Z-b3mwtnJj-0y_tsgvEc0k8WdHVJA4T2jskYT6nElVcskZpY&usqp=CAU" />
                    <FormControl mt={30}>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                        <FormLabel mt={5}>Password</FormLabel>
                        <Input type='password' placeholder="Enter your Password"  />
                        <Button display={"block"} bgColor={"black"} color={"white"} margin={"auto"} mt={"50px"}>Submit</Button>
                        <Text mt={6} textAlign={"center"}>Not have a account? <Link to={"/signup"}>Sign up</Link></Text>
                    </FormControl>
                </Box>

            </Box>
        </Box>
    </div>
  )
}
