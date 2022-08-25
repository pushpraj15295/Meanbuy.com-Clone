import React from "react";
import { newArrival } from "../Api.js";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewARRIVALS = () => {
  const navigat = useNavigate();
  const handleData = (id) => {
    navigat("/singlePage/" + id);
  };
  return (
    <SimpleGrid columns={4}>
      {newArrival?.map((i) => (
        <Box onClick={() => handleData(i.id)} key={i.id} margin="8px">
          <img src={i.image} width="280" height="280" alt={i.id} />
          <Text fontSize="sm">{i.name}</Text>
          <Box
            textAlign="right"
            fontSize="13px"
            margin="10px"
            borderBottom="1px solid lightgray"
          >
            <button
              style={{
                backgroundColor: "rgb(60,193,1)",
                paddingLeft: "10px",
                paddingRight: "10px",
                color: "white",
              }}
            >
              {i.rating} ☆
            </button>
          </Box>
          <Flex justifyContent="space-between">
            <Text color="rgb(251,176,104)">₹ {i.price}</Text>{" "}
            <Text fontSize="md" color="rgb(46,151,69)">
              {i.off}
            </Text>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default NewARRIVALS;
