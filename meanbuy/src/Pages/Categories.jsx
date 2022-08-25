import {
  Box,
  Button,
  Heading,
  Image,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Recomandation = () => {
  return (
    <>
      <PopoverTrigger>
        <Text cursor="pointer" fontSize="14px">Categories &nbsp;&nbsp;&nbsp; ▼</Text>
      </PopoverTrigger>
      {/* /////////////////////////// */}
      <PopoverContent
        zIndex={4}
        w="1200px"
        border="1px solid lightgrey"
        backgroundColor="white"
      >
        {/* <PopoverHeader fontWeight="semibold" border="none"></PopoverHeader> */}

        <PopoverBody height="350px" overflow="scroll" >
          <TableContainer >
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>
                    <NavLink to="#">MEN</NavLink>
                  </Th>
                  <Th>
                    <NavLink to="#">WOMEN</NavLink>
                  </Th>
                  <Th>
                    <NavLink to="#">ELECTROCS</NavLink>
                  </Th>
                  <Th>
                    <NavLink to="#">ESSENTIALS</NavLink>
                  </Th>
                  <Th>
                    <NavLink to="#">FLASH SALE</NavLink>
                  </Th>
                  <Th>
                    <NavLink to="#">HOME & LIVING</NavLink>
                  </Th>
                  <Th>
                    <NavLink to="#">kIDS & MOM</NavLink>
                  </Th>
                  <Th>
                    <NavLink to="#">MEANBUY DEALS</NavLink>
                  </Th>
                  <Th>
                    <NavLink to="#">MOBILES & TABS</NavLink>
                  </Th>
                </Tr>
              </Thead>

              <Tr>
                <Td>
                  <NavLink to="#">Watches</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Makeup Accessories</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Gaming Accessories</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Home Essentials</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Flash Sale</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Bath & Storage</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Action Figures</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Gifts</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Bluetooth Earphones</NavLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <NavLink to="#">Men's Watches</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Watches</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Keyboards & Mouse</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Men's Essentials</NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Gardening</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Discovery Adventure</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Electric</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Mobile Accessories</NavLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Small Appliances</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Women's Essentials</NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Home Decor</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Disney</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Men's Watches</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Sporting Bluetooth</NavLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Home Improvement</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Hello Kitty</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Smart Watches</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">wired Headphones</NavLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Kitchen Wares</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">kid's Shoes</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Top Selling Smart Watches</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Wireless Charger</NavLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Nordic Ceiling Lights</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Marvel</NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Wireless Speaker</NavLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Pet Products</NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Minions</NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">School BackPacks</NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#">Toys</NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
                <Td>
                  <NavLink to="#"></NavLink>
                </Td>
              </Tr>
            </Table>
          </TableContainer>
        </PopoverBody>
      </PopoverContent>
    </>
  );
};

export default Recomandation;
//   <Popover>
//  <Recomandation />
// </Popover>
