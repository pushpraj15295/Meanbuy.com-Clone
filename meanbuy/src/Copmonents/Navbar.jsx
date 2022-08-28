import styles from "./Navbar.module.css";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Popover,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Recomandation from "../Pages/Categories";
import { AppContext } from "../Context/AppContext";
import LogOut from "../Pages/LogOut";

const Navbar = () => {
  const { auth, setAuth ,card} = useContext(AppContext);
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  const nav = useNavigate();
  return (
    <Box className={styles.navbar}>
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        paddingTop="33px"
        paddingLeft="100px"
        paddingRight="100px"
      >
        <Box>
          <Flex gap="3rem">
            <Box className={styles.logo} onClick={() => nav("/")}>
              <Image
                w="180"
                h="63"
                src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png"
                alt="Mean-Buy"
              />
            </Box>
            <Box className={styles.inp}>
              <InputGroup w={[50,100,150,200,320,350,370,400,450,500,550]}>
                <Input
                  variant="outline"
                  value={value}
                  onChange={handleChange}
                  placeholder="search..."
                  size="sm"
                />
                <InputRightElement width="5rem" marginRight="-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Flex>
        </Box>
        <Flex gap="2.5rem">
          <Box className={styles.seller}>
            <Flex gap="0.2rem" fontSize="12">
              <Link to="#">Seller's Corner</Link>
              <p>|</p>
              <Link to="#">Feedback </Link>
              <p>|</p>
              <Link to="#">Blog</Link>
              <p>|</p>
              <Link to="#"> Delivery Info</Link>
            </Flex>
          </Box>
          <Box style={{ display: auth && "none" ,width:"150px"}}>
            <Flex gap="0.3rem" fontSize="14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              <NavLink to="/login">LOGIN </NavLink>
              <p>/</p>
              <NavLink to="/signup">SIGN UP</NavLink>
            </Flex>
            <Box>
              <b>WELCOME GUEST</b>
            </Box>
          </Box>
          <Flex>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
              color="rgb(249,141,41)"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <Text fontSize="10px">{card}</Text>
          </Flex>
          <Box style={{ display: !auth && "none" }}>
            <LogOut/>
          </Box>
        </Flex>
      </Flex>
      <Box padding="16px">
        <Flex className={styles.subcatagry}>
          <Popover>
            <Recomandation />
          </Popover>
          <NavLink to="/flashsell">Flash Sale</NavLink>
          <NavLink to="/Bestdeals">Best Deals</NavLink>
          <NavLink to="/shopbybrand">Shop by Brand</NavLink>
          <NavLink to="/trending">Trending</NavLink>
          <NavLink to="/newarrival">New Arrivals</NavLink>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;

// w={6} h={6}
///* <h1 className={styles.text}>gjgjvhjgjg</h1> */
