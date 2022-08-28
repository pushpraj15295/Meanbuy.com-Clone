import React, { useContext, useEffect } from "react";
import { FlashSel } from "../Api.js";
import { Box, Button, Flex, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext.jsx";

const FlashSell = () => {
  const navigat = useNavigate();
  const {cardData,setCardData} = useContext(AppContext)
  const handleData = (id,name,price,image,off,rating) => {
    setCardData({"id":id,"name":name,"price":price,"image":image,"off":off,"rating":rating})
    // console.log("sabkuch",id,name,price,image,off)
    navigat("/singlePage/" + id);
  };

  const handlehigh=()=>{
   return  FlashSel.sort(function(a,b) {return b.price - a.price ;})
  }
  const handleLow=()=>{
    return FlashSel.sort(function(a,b) {return a.price - b.price ;})
  }
 
  return (
   <Box width="88%" margin="auto" >
     <br />
     <Box float="right">
          <Button onClick={handlehigh}>Price high to low</Button>&nbsp;
          <Button onClick={handleLow}>Price low to high</Button>
     </Box>
     <br /><br />
    <SimpleGrid columns={4}>
      {FlashSel.map((i) => (
        <Box onClick={() => handleData(i.id,i.name,i.price,i.image,i.off,i.rating)} key={i.id} margin="8px">
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
            <Text fontSize="xl" color="rgb(251,176,104)">₹ {i.price}</Text>{" "}
            <Text fontSize="md" color="rgb(46,151,69)">
              {i.off}
            </Text>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
    </Box> 
  );
};

export default FlashSell;
