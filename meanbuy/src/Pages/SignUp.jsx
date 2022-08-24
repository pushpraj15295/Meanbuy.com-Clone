import {
    Box,
    Button,
    Flex,
    HStack,
    Img,
    Input,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
  
  const SignUp = () => {
    return (
      <Box border="1px solid lightgray" marginLeft="100px" marginRight="100px">
        <Flex columns={[2, 1]}>
          <Box margin="10px" width="65%">
            <Box borderBottom="1px solid lightgray">
              <Text fontSize="lg" color="rgb(234,139,47)">
                <b>Login or Create Account</b>
              </Text>
              <br />
              <br />
              <HStack>
                <Button colorScheme="facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  &nbsp;&nbsp; Logi with Facebook
                </Button>
                <Button colorScheme="twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  &nbsp;&nbsp; Signed in
                </Button>
              </HStack>
              <br />
            </Box>
            <br />
            <Box>
              <Text mb="8px" fontSize="12">
                Email Addresh
              </Text>
              <Input placeholder="Email Addresh" size="md" />
              <br />
              <br />
              <Text mb="8px" fontSize="12">
                Password
              </Text>
              <Input placeholder="Password" size="md" />
              <br />
              <br />
              <Text mb="8px" fontSize="12">
              Confirm Password
              </Text>
              <Input placeholder="Confirm Password" size="md" />
              <br />
              <br />
              <Button
                width="100%"
                backgroundColor="rgb(247,148,29)"
                color="white"
              >
                Login
              </Button>
              <br />
              <br />
              <Box textAlign="center" fontSize="12">
                <Link to="#" mb="8px">
                  Forgot Password
                </Link>
                <br />
                <br />
                <Link to="#">New to MeanBuy ? Sign up!</Link>
              </Box>
            </Box>
          </Box>
          <Box width="33%" margin="10px">
            <Box width="100%" border="1px solid lightgray" textAlign="center">
              <br />
              <h4>
                <b>Cart Details</b>
              </h4>
              <br />
            </Box>
            <Box width="100%" border="1px solid lightgray">
              <br />
              <Text marginLeft="10px">
                <b>Total Items : 0</b>
              </Text>
  
              <Text marginLeft="10px">
                <b>Sub Total:₹ 0.00</b>
              </Text>
              <br />
              <br />
              <Text marginLeft="10px">
                <b>Cart Total:₹ 0.00</b>
              </Text>
              <br />
              <Button
                margin="10px"
                colorScheme="yellow"
                variant="outline"
                width="95%"
              >
                EDIT CART
              </Button>
            </Box>
            <br />
            <Box marginLeft="170px">
              <Img
                w="110"
                h="110"
                src="https://www.meanbuy.com/assets/img/india/logo/logo_main.png"
              />
            </Box>
            <Box textAlign="center">
            <br />
              <h3>
                <b>Our Shop. Your price</b>
              </h3>
              <Text fontSize='xs'>
                <b>Feel The Power to By at Your Price</b>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  };
  
  export default SignUp;
  